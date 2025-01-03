import { Index } from "../docs/Toc"
import SearchInputBar from "./SearchInputBar"
import type { SearchResult } from "./SearchResult"
import SearchResultList, { SearchResultListRef } from "./SearchResultList"
import debounce from "lodash/debounce"
import MiniSearch, { SearchResult as MiniSearchResult } from "minisearch"
import React, { useCallback, useEffect, useRef, useState } from "react"

const MAX_EXCERPT_LENGTH = 80
const MAX_SEARCH_RESULTS = 25

let index: MiniSearch | undefined

const favorites: SearchResult[] = [
  {
    slug: "get-started",
    title: Index[""].title,
    body: "Install Steep and start your first workflow",
  },
  {
    slug: "how-does-steep-work",
    title: Index["how-does-steep-work"].title,
    body: "Learn about the basic concepts of Steep and its architecture",
  },
  {
    slug: "workflows",
    title: Index["workflows"].title,
    body: "Steep’s main data model",
  },
  {
    slug: "process-chains",
    title: Index["process-chains"].title,
    body: "Workflows are transformed into executable process chains",
  },
  {
    slug: "http-endpoints",
    title: Index["http-endpoints"].title,
    body: "Communicate with Steep through its HTTP API",
  },
  {
    slug: "steepyaml",
    title: Index["steepyaml"].title,
    body: "Steep’s main configuration file",
  },
]

async function ensureIndex(): Promise<MiniSearch> {
  if (index !== undefined) {
    return index
  }

  let response = await fetch(
    `${process.env.__NEXT_ROUTER_BASEPATH}/docs/index.json`,
    {
      // make a conditional request if the index is in the cache or make
      // a normal request and put it into the cache
      cache: "no-cache",
    },
  )
  let json: { slug: string; body: string }[] = await response.json()

  let documents = json.map(entry => {
    let slug = entry.slug
    if (slug === "") {
      slug = "get-started"
    }
    return {
      id: slug,
      title: Index[entry.slug].title,
      body: entry.body,
    }
  })

  index = new MiniSearch({
    fields: ["id", "title", "body"],
    storeFields: ["body"],
    searchOptions: {
      boost: {
        title: 10,
        id: 100,
      },
      fuzzy: 0.2,
      prefix: true,
    },
  })
  index.addAll(documents)

  return index
}

// find the first line that contains a match
function firstLine(
  str: string,
  positions: [number, number][],
): [number, number] {
  let start = 0
  while (start < str.length) {
    let end = str.indexOf("\n", start)
    if (end === -1) {
      end = str.length
    }
    if (positions.some(p => p[0] >= start && p[1] <= end)) {
      return [start, end]
    }
    start = end + 1
  }
  return [0, str.length]
}

// find the longest line in the given string
function longestLine(str: string) {
  let start = 0
  let longestStart = 0
  let longestEnd = 0
  while (start < str.length) {
    let end = str.indexOf("\n", start)
    if (end === -1) {
      end = str.length
    }
    if (end - start > longestEnd - longestStart) {
      longestStart = start
      longestEnd = end
    }
    start = end + 1
  }
  return str.substring(longestStart, longestEnd)
}

// check if the character at position i is a letter
function isLetter(str: string, i: number): boolean {
  return !!str.substring(i, i + 1).match(/[a-z]/i)
}

// create an excerpt from str with a maximum length of maxlen around the
// given word positions
function excerpt(
  str: string,
  positions: [number, number][],
  maxlen: number,
): [number, number] {
  if (str.length <= maxlen) {
    return [0, str.length]
  }

  // find longest range that does not exceed maxlen
  let start = positions[0][0]
  let i = positions.length
  while (i > 0) {
    --i
    if (positions[i][1] - start <= maxlen) {
      break
    }
  }
  let end = positions[i][1]

  if (end - start >= maxlen) {
    return [start, end]
  }

  // skip forward and backward
  let rest = maxlen - (end - start)
  let newstart = start - Math.ceil(rest / 2)
  let newend = end + Math.floor(rest / 2)
  if (newstart < 0) {
    newstart = 0
    newend = maxlen
  } else if (newend > str.length) {
    newend = str.length
    newstart = str.length - maxlen
  }
  newstart = Math.max(0, newstart)
  newend = Math.min(str.length, newend)

  // trim right word
  if (newend < str.length) {
    while (newend > end && isLetter(str, newend)) {
      --newend
      if (newstart > 0) {
        --newstart
      }
    }
  }

  // trim left word
  if (newstart > 0) {
    while (newstart < start && isLetter(str, newstart - 1)) {
      ++newstart
    }
  }

  return [newstart, newend]
}

// create a React element from the given string and insert <mark> elements
// that highlight the words at the given positions
function highlight(
  str: string,
  positions: [number, number][],
): React.ReactElement<any> {
  let lastend = 0
  let tokens = []
  for (let i in positions) {
    let p = positions[i]
    if (p[0] > lastend) {
      tokens.push(str.substring(lastend, p[0]))
    }
    let mark = str.substring(p[0], p[1])
    if (mark.length > 0) {
      tokens.push(
        <mark
          key={i}
          className="border-b-2 border-primary bg-bg/0 font-normal text-primary group-[.active]:border-bg group-[.active]:text-bg dark:border-primary-hover dark:text-primary-hover dark:group-[.active]:border-gray-900 dark:group-[.active]:text-gray-900"
        >
          {mark}
        </mark>,
      )
    }
    lastend = p[1]
  }
  if (lastend < str.length) {
    tokens.push(str.substring(lastend, str.length))
  }
  return <>{tokens}</>
}

// extract all matched terms for a given field from the given search result
function extractMatchedTerms(
  searchResult: MiniSearchResult,
  field: string,
): string[] {
  let result: string[] = []
  for (let term of Object.keys(searchResult.match)) {
    let locations = searchResult.match[term]
    if (locations.indexOf(field) !== -1) {
      result.push(term)
    }
  }
  return result
}

// search for the given terms in the given string and return their locations
function termsToPositions(str: string, terms: string[]): [number, number][] {
  let result: [number, number][] = []
  for (let term of terms) {
    let i = str.toLowerCase().indexOf(term)
    if (i >= 0) {
      result.push([i, i + term.length])
    }
  }
  return result
}

function extractPositions(
  str: string,
  searchResult: MiniSearchResult,
  field: string,
): [number, number][] {
  return termsToPositions(str, extractMatchedTerms(searchResult, field))
}

// coalesce the given positions (i.e. merge overlapping ranges)
function coalesceAndSortPositions(
  positions: [number, number][],
): [number, number][] {
  positions = sortPositions(positions)

  let last = 0
  for (let i = 1; i < positions.length; ++i) {
    if (positions[last][1] >= positions[i][0]) {
      positions[last][1] = Math.max(positions[last][1], positions[i][1])
    } else {
      last++
      positions[last] = positions[i]
    }
  }

  return positions.slice(0, last + 1)
}

// sort the given positions according to their start
function sortPositions(positions: [number, number][]): [number, number][] {
  let r = [...positions]
  r.sort((a, b) => a[0] - b[0])
  return r
}

function convertMatches(matches: MiniSearchResult[]): SearchResult[] {
  // iterate through all matches and convert them to results we can display
  let results: SearchResult[] = []
  for (let r of matches.slice(0, MAX_SEARCH_RESULTS)) {
    let slug = r.id
    if (slug === "get-started") {
      slug = ""
    }
    let title = Index[slug].title
    let body = r.body

    // highlight matched token in the title
    let titlePositions = coalesceAndSortPositions(
      extractPositions(title, r, "title"),
    )
    let titleElement: React.ReactNode
    if (titlePositions.length > 0) {
      titleElement = highlight(title, titlePositions)
    } else {
      titleElement = title
    }

    // create an excerpt from the matched section contents and highlight
    // matched tokens
    let result: React.ReactNode
    let bodyPositions = coalesceAndSortPositions(
      extractPositions(body, r, "body"),
    )
    if (bodyPositions.length > 0) {
      // only keep first line with a match
      let [start1, end1] = firstLine(body, bodyPositions)
      let subbody1 = body.substring(start1, end1)
      if (start1 > 0) {
        for (let p of bodyPositions) {
          p[0] -= start1
          p[1] -= start1
        }
      }

      // create excerpt
      let [start2, end2] = excerpt(subbody1, bodyPositions, MAX_EXCERPT_LENGTH)
      let subbody2 = subbody1.substring(start2, end2)
      if (start2 > 0) {
        for (let p of bodyPositions) {
          p[0] -= start2
          p[1] -= start2
        }
      }

      // remove invalid positions
      bodyPositions = bodyPositions.filter(
        bp =>
          bp[0] >= 0 &&
          bp[1] > 0 &&
          bp[0] < subbody2.length &&
          bp[1] <= subbody2.length,
      )

      if (start2 > 0) {
        subbody2 = "… " + subbody2
        for (let p of bodyPositions) {
          p[0] += 2
          p[1] += 2
        }
      }
      if (end2 < subbody1.length) {
        subbody2 += " …"
      }

      // highlight matched tokens
      result = highlight(subbody2, bodyPositions)
    } else {
      // there were no matches in the body ...

      // find the longest line
      let body2 = longestLine(body)

      // create excerpt
      let positions: [number, number][] = [
        [0, Math.min(MAX_EXCERPT_LENGTH, body2.length)],
      ]
      let [start, end] = excerpt(body2, positions, MAX_EXCERPT_LENGTH)
      let sr = body2.substring(start, end)
      if (start > 0) {
        sr = "… " + sr
      }
      if (end < body2.length) {
        sr += " …"
      }
      result = sr
    }

    results.push({
      slug,
      title: titleElement,
      body: result,
    })
  }

  return results
}

interface SearchDialogContentProps {
  onClose: () => void
}

const SearchDialogContent = ({ onClose }: SearchDialogContentProps) => {
  const [searchInput, setSearchInput] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>(favorites)
  const [selectedItem, setSelectedItem] = useState(-1)
  const searchResultListRef = useRef<SearchResultListRef | null>(null)

  const onUp = useCallback(() => {
    setSelectedItem(prevSelectedItem => {
      prevSelectedItem--
      if (prevSelectedItem < 0) {
        prevSelectedItem = searchResults.length - 1
      }
      return prevSelectedItem
    })
  }, [searchResults])

  const onDown = useCallback(() => {
    setSelectedItem(prevSelectedItem => {
      return (prevSelectedItem + 1) % searchResults.length
    })
  }, [searchResults])

  useEffect(() => {
    // initialize index in advance
    ensureIndex().catch(console.error)
  }, [])

  const onChangeSearchInput = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let v = event.target.value
      setSearchInput(v)

      if (v === "") {
        setSelectedItem(-1)
        setSearchResults(favorites)
        return
      }

      ensureIndex().then(index => {
        let matches = index.search(v)
        let results = convertMatches(matches)
        if (results.length > 0) {
          setSelectedItem(0)
        }
        setSearchResults(results)
      })
    },
    10,
  )

  return (
    <>
      <SearchInputBar
        onChangeSearchInput={onChangeSearchInput}
        onClose={onClose}
        onUp={onUp}
        onDown={onDown}
        onSubmit={() => searchResultListRef.current?.click()}
      />
      <hr className="border-gray-200" />
      <SearchResultList
        searchResults={searchResults}
        searchInput={searchInput}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        isFavorites={searchResults === favorites}
        onClose={onClose}
        ref={searchResultListRef}
      />
    </>
  )
}

export default SearchDialogContent

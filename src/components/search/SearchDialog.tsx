"use client"

import React, { Fragment, useEffect, useState } from "react"
import { Index } from "../docs/Toc"
import MiniSearch, { SearchResult } from "minisearch"
import { Dialog, Transition } from "@headlessui/react"
import debounce from "lodash/debounce"

const MAX_EXCERPT_LENGTH = 70
const MAX_SEARCH_RESULTS = 25

let index: MiniSearch | undefined

interface Result {
  slug: string
  title: React.ReactNode
  body: React.ReactNode
}

async function ensureIndex(): Promise<MiniSearch> {
  if (index !== undefined) {
    return index
  }

  let response = await fetch(`${process.env.basePath}/docs/index.json`, {
    // make a conditional request if the index is in the cache or make
    // a normal request and put it into the cache
    cache: "no-cache",
  })
  let json: { slug: string; body: string }[] = await response.json()

  let documents = json.map(entry => {
    let slug = entry.slug
    if (slug === "") {
      slug = "get-started"
    }
    return {
      id: entry.slug,
      title: Index[entry.slug].title,
      body: entry.body,
    }
  })

  index = new MiniSearch({
    fields: ["title", "body"],
    storeFields: ["body"],
    searchOptions: {
      boost: {
        title: 10,
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
): React.ReactElement {
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
          className="border-b-2 border-primary bg-bg/0 font-normal text-primary dark:border-primary-hover dark:text-primary-hover"
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
  searchResult: SearchResult,
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
  searchResult: SearchResult,
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

function convertMatches(matches: SearchResult[]): Result[] {
  // iterate through all matches and convert them to results we can display
  let results: Result[] = []
  for (let r of matches.slice(0, MAX_SEARCH_RESULTS)) {
    let slug = r.id
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
    let result: React.ReactElement
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
      // There were no matches in the body. Just create the excerpt.
      let positions: [number, number][] = [
        [0, Math.min(MAX_EXCERPT_LENGTH, body.length)],
      ]
      let [start, end] = excerpt(body, positions, MAX_EXCERPT_LENGTH)
      result = body.substring(start, end)
    }

    results.push({
      slug,
      title: titleElement,
      body: result,
    })
  }

  return results
}

interface ResultItemProps {
  item: Result
}

const ResultItem = ({ item }: ResultItemProps) => {
  return (
    <div className="rounded-md bg-gray-100 px-4 py-4 dark:bg-gray-200">
      <div className="mb-2 font-normal">{item.title}</div>
      <div className="text-xs">{item.body}</div>
    </div>
  )
}

interface SearchDialogProps {
  open: boolean
  onClose: () => void
}

const SearchDialog = ({ open, onClose }: SearchDialogProps) => {
  const [searchInput, setSearchInput] = useState("")
  const [searchResults, setSearchResults] = useState<Result[]>([])

  useEffect(() => {
    // initialize index in advance
    ensureIndex().catch(console.error)
  }, [])

  const onChangeSearchInput = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(event.target.value)
    },
    10,
  )

  useEffect(() => {
    if (searchInput === "") {
      return
    }

    ensureIndex().then(index => {
      let matches = index.search(searchInput)
      let results = convertMatches(matches)
      setSearchResults(results)
    })
  }, [searchInput])

  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50 text-sm">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            aria-hidden="true"
          />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="h-3/4 w-[40rem] max-w-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex max-h-full w-full flex-col rounded-lg bg-bg shadow-[rgba(0,0,0,0.2)_0px_10px_50px] dark:bg-gray-100">
                <div className="flex flex-row gap-4">
                  <input
                    type="text"
                    className="flex-1 rounded-lg bg-bg py-4 pl-6 outline-none dark:bg-gray-100"
                    placeholder="Search documentation"
                    onChange={onChangeSearchInput}
                  />
                  <div className="flex items-center justify-center pr-5">
                    <button
                      className="flex h-5 items-center rounded border border-gray-200 px-1 text-xs text-gray-600 hover:border-gray-400"
                      onClick={() => onClose()}
                    >
                      Esc
                    </button>
                  </div>
                </div>
                <hr className="border-gray-200" />
                <div className="flex flex-1 flex-col gap-4 overflow-y-scroll p-4">
                  {searchResults.length === 0 ? (
                    <div className="flex h-8 items-center justify-center">
                      <div>
                        No results for{" "}
                        <span className="font-normal">“{searchInput}”</span>
                      </div>
                    </div>
                  ) : (
                    searchResults.map((result, i) => (
                      <ResultItem item={result} key={i} />
                    ))
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default SearchDialog

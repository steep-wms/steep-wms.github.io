import ScrollTopWorkaround from "@/components/ScrollTopWorkaround"
import { Index, Toc } from "@/components/docs/Toc"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Metadata, ResolvingMetadata } from "next"
import Link from "next/link"

interface DocsPageProps {
  params: { slug: string[] }
}

export async function generateMetadata(
  { params }: DocsPageProps,
  _: ResolvingMetadata,
): Promise<Metadata> {
  let slug = undefined
  if (params.slug !== undefined) {
    slug = params.slug.join("/")
  } else {
    slug = ""
  }

  let entry = Index[slug]

  return {
    title: entry.title,
  }
}

function findNeighbors(slug: string): [string | undefined, string | undefined] {
  let last: string | undefined
  let prev: string | undefined
  let hasPrev = false
  for (let c of Toc) {
    for (let p of c.pages) {
      if (hasPrev) {
        return [prev, p.slug]
      }
      if (p.slug === slug) {
        hasPrev = true
        prev = last
      }
      last = p.slug
    }
  }
  return [prev, undefined]
}

export async function generateStaticParams() {
  let params = Toc.flatMap(c =>
    c.pages.flatMap(p => ({
      slug: [p.slug],
    })),
  )
  return params
}

const DocsPage = ({ params }: DocsPageProps) => {
  let slug = undefined
  if (params.slug !== undefined) {
    slug = params.slug.join("/")
  } else {
    slug = ""
  }

  let entry = Index[slug]

  let moduleFilename = slug
  if (moduleFilename === "") {
    moduleFilename = "get-started"
  }
  let Content =
    require(`../../../../content/docs/${moduleFilename}.mdx`).default

  let parentChapter = undefined
  let sections = undefined
  if (entry.type === "page") {
    parentChapter = Index[entry.chapter]
    sections = entry.sections?.map(s => {
      let SectionContents =
        require(`../../../../content/docs/${s.slug}.mdx`).default

      let subsections = s.subsections?.map(ss => {
        let SubsectionContents =
          require(`../../../../content/docs/${ss.slug}.mdx`).default

        return (
          <section key={ss.slug} data-slug={ss.slug}>
            <h3 id={ss.slug}>{ss.title}</h3>
            <SubsectionContents />
          </section>
        )
      })

      return (
        <section key={s.slug} data-slug={s.slug}>
          <h2 id={s.slug}>{s.title}</h2>
          <SectionContents />
          {subsections}
        </section>
      )
    })
  }

  let [prev, next] = findNeighbors(slug)

  let Main = (
    <>
      {parentChapter !== undefined ? (
        <div className="text-sm font-normal text-primary">
          {parentChapter.title}
        </div>
      ) : undefined}
      <h1 className="mt-2" id={slug}>
        {entry.title}
      </h1>
      <Content />
      {sections}
      <div className="flex mt-14 mb-8 justify-between text-sm not-prose gap-4">
        <div>
          {prev !== undefined ? (
            <Link
              href={`/docs/${prev}`}
              className="font-normal text-gray-800 hover:text-primary group flex gap-1"
            >
              <div className="text-gray-500 group-hover:text-primary">
                <ChevronLeft size="1em" />
              </div>
              <div>{Index[prev].title}</div>
            </Link>
          ) : undefined}
        </div>
        <div>
          {next !== undefined ? (
            <Link
              href={`/docs/${next}`}
              className="font-normal text-gray-800 hover:text-primary group flex gap-1 text-right"
            >
              <div>{Index[next].title}</div>
              <div className="text-gray-500 group-hover:text-primary">
                <ChevronRight size="1em" />
              </div>
            </Link>
          ) : undefined}
        </div>
      </div>
    </>
  )

  return (
    <>
      <ScrollTopWorkaround />
      <main className="prose mt-40 lg:mt-24">{Main}</main>
    </>
  )
}

export default DocsPage

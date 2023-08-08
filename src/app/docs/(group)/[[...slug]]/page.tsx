import { Toc, Index } from "@/components/docs/Toc"

export async function generateStaticParams() {
  let params = Toc.flatMap(c =>
    c.pages.flatMap(p => ({
      slug: [p.slug],
    })),
  )
  return params
}

const DocsPage = ({ params }: { params: { slug: string[] } }) => {
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
            <h4 id={ss.slug}>{ss.title}</h4>
            <SubsectionContents />
          </section>
        )
      })

      return (
        <section key={s.slug} data-slug={s.slug}>
          <h3 id={s.slug}>{s.title}</h3>
          <SectionContents />
          {subsections}
        </section>
      )
    })
  }

  let Main = (
    <>
      {parentChapter !== undefined ? (
        <div className="text-sm font-normal text-primary">
          {parentChapter.title}
        </div>
      ) : undefined}
      <h2 className="mt-2" id={slug}>
        {entry.title}
      </h2>
      <Content />
      {sections}
    </>
  )

  return <main className="prose mt-24">{Main}</main>
}

export default DocsPage

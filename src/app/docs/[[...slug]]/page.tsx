import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import DocsContent from "@/components/docs/DocsContent"
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
  let Content = require(`../../../content/docs/${moduleFilename}.mdx`).default

  let parentChapter = undefined
  let sections = undefined
  if (entry.type === "page") {
    parentChapter = Index[entry.chapter]
    sections = entry.sections?.map(s => {
      let SectionContents =
        require(`../../../content/docs/${s.slug}.mdx`).default
      return (
        <section key={s.slug} data-slug={s.slug}>
          <h3 id={s.slug}>{s.title}</h3>
          <SectionContents />
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

  return (
    <>
      <NavBar />
      <DocsContent slug={slug}>{Main}</DocsContent>
      <Footer />
    </>
  )
}

export default DocsPage

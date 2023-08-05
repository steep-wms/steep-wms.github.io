import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import DocsContent from "@/components/docs/DocsContent"
import { Index } from "@/components/docs/Toc"

export async function generateStaticParams() {
  return [
    {
      slug: [],
    },
  ]
}

const DocsPage = ({ params }: { params: { slug: string[] } }) => {
  let slug = undefined
  let Main = undefined
  if (
    params.slug !== undefined &&
    params.slug.length > 0 &&
    params.slug[0] !== ""
  ) {
    slug = params.slug.join("/")
    let entry = Index[slug]

    let Content = require(`../../../content/docs/${slug}.mdx`).default

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

    Main = (
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
  }

  return (
    <>
      <NavBar />
      <DocsContent slug={slug}>{Main}</DocsContent>
      <Footer />
    </>
  )
}

export default DocsPage

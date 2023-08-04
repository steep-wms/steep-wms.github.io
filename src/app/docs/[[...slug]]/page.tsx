import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import DocsContent from "@/components/docs/DocsContent"
import { Index } from "@/components/docs/Toc"
import GithubSlugger from "github-slugger"

export async function generateStaticParams() {
  return [
    {
      slug: [],
    },
  ]
}

const DocsPage = ({ params }: { params: { slug: string[] } }) => {
  let slugger = new GithubSlugger()

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

    let sections = undefined
    if ("sections" in entry) {
      sections = entry.sections?.map(s => {
        let sectionSlug = slugger.slug(s)
        let SectionContents =
          require(`../../../content/docs/${sectionSlug}.mdx`).default
        return (
          <section key={sectionSlug} data-slug={sectionSlug}>
            <h3 id={sectionSlug}>{s}</h3>
            <SectionContents />
          </section>
        )
      })
    }

    Main = (
      <>
        <h2 id={slug}>{entry.title}</h2>
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

import Container from "@/components/Container"
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import SidebarLeft from "@/components/docs/SidebarLeft"
import SidebarRight from "@/components/docs/SidebarRight"
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
        let Section =
          require(`../../../content/docs/${sectionSlug}.mdx`).default
        return (
          <>
            <h3 id={sectionSlug}>{s}</h3>
            <Section key={sectionSlug} />
          </>
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
      <Container
        type="2xl"
        className="mb-10 grid gap-10 px-2 [grid-template-columns:16rem_1fr_16rem]"
      >
        <SidebarLeft />
        <main className="prose mt-24">{Main}</main>
        {slug !== undefined ? <SidebarRight slug={slug} /> : undefined}
      </Container>
      <Footer />
    </>
  )
}

export default DocsPage

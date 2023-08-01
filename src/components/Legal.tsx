import Container from "@/components/Container"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { rehype } from "rehype"
import { visit } from "unist-util-visit"

function fixAnchors() {
  return (tree: any) => {
    visit(tree, "element", node => {
      if (
        node.tagName === "a" &&
        node.properties.href === undefined &&
        node.properties.name !== undefined
      ) {
        node.properties.id = node.properties.name
        delete node.properties.name
        node.tagName = "span"
      }
    })
  }
}

function removeFirstH2() {
  let removed = false
  return (tree: any) => {
    visit(tree, "element", node => {
      if (node.children !== undefined) {
        for (let i = 0; i < node.children.length; ++i) {
          if (node.children[i].tagName === "h2") {
            if (!removed) {
              node.children.splice(i, 1)
              removed = true
              break
            }
          }
        }
      }
    })
  }
}

interface LegalProps {
  url: string
  title: string
}

const Legal = async ({ url, title }: LegalProps) => {
  let dsiResponse = await fetch(url)
  let dsi = await dsiResponse.text()

  const processedDsi = String(
    await rehype().use([fixAnchors, removeFirstH2]).process(dsi),
  )

  return (
    <>
      <NavBar />
      <h1 className="mb-20 mt-40 text-center text-5xl font-bold text-gray-900">
        {title}
      </h1>
      <Container type="md">
        <section
          className="prose mb-32"
          dangerouslySetInnerHTML={{ __html: processedDsi }}
        ></section>
      </Container>
      <Footer />
    </>
  )
}

export default Legal

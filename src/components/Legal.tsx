import Container from "@/components/Container"
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import { robotoBold } from "@/components/lib/roboto-bold"
import clsx from "clsx"
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
  let dsiResponse = await fetch(url, { cache: "no-store" })
  let dsi = await dsiResponse.text()

  const processedDsi = String(
    await rehype().use([fixAnchors, removeFirstH2]).process(dsi),
  )

  return (
    <>
      <NavBar />
      <h1
        className={clsx(
          `${robotoBold.variable} mb-20 mt-40 text-center font-bold text-5xl text-gray-900`,
        )}
      >
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

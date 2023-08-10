import fs from "fs/promises"
import recursiveReaddir from "recursive-readdir"
import * as cheerio from "cheerio"
import { convert } from "html-to-text"
import path from "path"

interface Entry {
  slug: string
  body: string
}

function nodeToString($node: cheerio.Cheerio<cheerio.Element>) {
  let text = convert($node.html()!, {
    wordwrap: false,
    selectors: [
      { selector: "a", options: { ignoreHref: true } },
      { selector: "img", format: "skip" },
      { selector: "pre", format: "skip" },
      { selector: "td", format: "block" },
    ],
  })

  // cleanup
  text = text
    .replaceAll(/^\(optional\)$/gm, "")
    .replaceAll(/^\(required\)$/gm, "")
    .replaceAll(/^Example:?$/gim, "")
    .replaceAll(/^(string|boolean|any|object|number|array)$/gm, "")
    .replaceAll(/^(yaml|json|shell|javascript)$/gm, "")
    .replaceAll(/^\n+/gm, "")

  return text
}

async function main() {
  let files = (await recursiveReaddir("../out/docs")).filter(f =>
    f.endsWith(".html"),
  )

  let result: Entry[] = []
  for (let f of files) {
    let content = await fs.readFile(f, "utf8")
    let $ = cheerio.load(content)
    let $main = $("main").first()

    $main.find("h1,h2,h3").remove()

    let $sections = $main.find("section[data-slug!='']")

    // convert sections first
    $sections.each((i, el) => {
      let $n = $(el)
      let s = nodeToString($n)
      result.push({
        slug: $n.attr("data-slug")!,
        body: s,
      })
    })

    // remove all sections
    $sections.remove()

    // now convert page
    let s = nodeToString($main)
    result.push({
      slug: path.dirname(f).substring("../out/docs/".length),
      body: s,
    })
  }

  await fs.mkdir("../public/docs", { recursive: true })
  await fs.writeFile("../public/docs/index.json", JSON.stringify(result))
}

main().catch(console.error)

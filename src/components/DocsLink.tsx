import Link from "./LinkFix"
import { Index } from "./docs/Toc"
import { AnchorHTMLAttributes } from "react"

const DocsLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  let href = props.href!
  if (href.startsWith("#")) {
    let entry = Index[href.slice(1)]
    if (entry === undefined) {
      throw new Error(`No entry in table of contents for ${href}`)
    }
    if (entry.type === "chapter") {
      throw new Error(`You cannot link to a chapter ${href}`)
    }

    if (entry.type === "page") {
      href = `/docs/${entry.slug}`
    } else {
      href = `/docs/${entry.page}#${entry.slug}`
    }
  }

  if (href !== props.href) {
    props = { ...props, href }
  }

  return <Link href={props.href!} {...props} />
}

export default DocsLink

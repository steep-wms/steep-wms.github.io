import Link from "next/link"
import { AnchorHTMLAttributes } from "react"

const DocsLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <Link href={props.href!} {...props} />
}

export default DocsLink

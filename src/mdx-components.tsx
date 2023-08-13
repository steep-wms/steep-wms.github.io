// import Balancer from "react-wrap-balancer"
import { createElement } from "react"
import Link from "./components/LinkFix"
import CodeContainer, { CodeContainerProps } from "./components/CodeContainer"
import DocsLink from "./components/DocsLink"

// const balanceHeadings =
//   (type: string) => (props: React.HTMLAttributes<HTMLHeadingElement>) => {
//     let newProps = { ...props }
//     newProps.children = <Balancer>{props.children}</Balancer>
//     return createElement(type, newProps)
//   }

// this file is required to make MDX custom compontents work with SSR
export function useMDXComponents(components: {
  component: Record<string, React.ComponentType>
}) {
  return {
    // replace markdown links with "next/link"
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) =>
      props.href !== undefined ? (
        <Link href={props.href} {...props} />
      ) : (
        <a {...props} />
      ),

    // balance headings
    // h2: balanceHeadings("h2"),
    // h3: balanceHeadings("h3"),
    // h4: balanceHeadings("h4"),

    CodeContainer: (props: CodeContainerProps) => <CodeContainer {...props} />,
    DocsLink: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <DocsLink {...props} />
    ),

    ...components,
  }
}

import classNames from "classnames"
import getScrollTop from "./lib/get-scroll-top"
import AutoScrollingContext from "./lib/AutoScrollingContext"
import CodeLanguageContext from "./lib/CodeLanguageContext"
import styles from "./CodeExample.scss"
import { Children, useContext, useRef } from "react"

function findCode(node, pres) {
  if (node.props.mdxType === "pre") {
    pres.push(node)
  } else {
    findCodeInChildren(node.props.children, pres)
  }
}

function findCodeInChildren(children, pres) {
  Children.forEach(children, n => findCode(n, pres))
}

function getLanguage(pre) {
  let arr = Children.toArray(pre.props.children)
  return arr[0].props.className.match(/language-(.+)/)[1]
}

const CodeExample = ({ children, title }) => {
  const setAutoScrolling = useContext(AutoScrollingContext.Dispatch)
  const setActive = useContext(CodeLanguageContext.Dispatch)
  const active = useContext(CodeLanguageContext.State)

  const ref = useRef()

  let newChildren = []
  findCodeInChildren(children, newChildren)

  const onClick = (lang) => {
    if (active === lang) {
      return
    }

    // keep scroll position
    const lastDiff = ref.current.offsetTop - getScrollTop()
    const observer = new MutationObserver((mutations) => {
      document.body.scrollTop = document.documentElement.scrollTop =
          ref.current.offsetTop - lastDiff

      for (let mutation of mutations) {
        if (mutation.target.parentNode === ref.current) {
          observer.disconnect()
          setAutoScrolling(false)
        }
      }
    })
    observer.observe(document, {
      attributes: true,
      attributeFilter: ["class"],
      subtree: true
    })

    // prevent navbar from hiding
    setAutoScrolling(true)

    // change language for all code examples
    setActive(lang)
  }

  let titles = []
  let pages = []
  newChildren.forEach(c => {
    let lang = getLanguage(c)

    let activeClassName = { "active": active === lang }
    let titleClassName = classNames("code-example-title", activeClassName)
    let title = (
      <div className={titleClassName} onClick={() => onClick(lang)} key={`title-${lang}`}>
        {lang.toUpperCase()}
        <style jsx>{styles}</style>
      </div>
    )
    titles.push(title)

    let pageClassName = classNames("code-example-page", activeClassName)
    let page = (
      <div className={pageClassName} key={`page-${lang}`}>
        {c}
        <style jsx>{styles}</style>
      </div>
    )
    pages.push(page)
  })

  return (<>
    {title && <h6>{title}</h6>}
    <div className="code-example" ref={ref}>{titles}{pages}</div>
    <style jsx>{styles}</style>
  </>)
}

export default CodeExample

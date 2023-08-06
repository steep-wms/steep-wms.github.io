"use client"

import { Children, isValidElement, ReactElement, ReactNode } from "react"
import LanguageSelect from "./LanguageSelect"
import { useState } from "react"

function findCode(node: ReactNode, pres: ReactElement[]) {
  if (!isValidElement(node)) {
    return
  }
  if (node.type === "pre") {
    pres.push(node)
  } else {
    findCodeInChildren(node.props.children, pres)
  }
}

function findCodeInChildren(children: ReactNode, pres: ReactElement[]) {
  Children.forEach(children, n => findCode(n, pres))
}

export interface CodeContainerProps {
  title?: string
  children: ReactNode
}

const CodeContainer = ({ title, children }: CodeContainerProps) => {
  let pres: ReactElement[] = []
  findCodeInChildren(children, pres)

  let languages = []
  let pages: Record<string, React.ReactElement> = {}
  let unrecognizedChildren = []
  for (let pre of pres) {
    let lang = pre.props?.["data-language"]
    if (lang === undefined) {
      unrecognizedChildren.push(pre)
      continue
    }

    languages.push(lang)

    pages[lang] = (
      <div data-rehype-pretty-code-fragment key={`page-${lang}`}>
        {pre}
      </div>
    )
  }

  const [currentLanguage, setCurrentLanguage] = useState(languages[0])

  return (
    <>
      <div className="my-5 rounded-md bg-bg-code text-code-container-header">
        <div className="flex justify-between gap-2 border-b border-gray-600 px-4 py-1 text-sm dark:border-gray-300">
          <div className="py-1">{title}</div>
          <LanguageSelect
            languages={languages}
            current={currentLanguage}
            onChange={setCurrentLanguage}
          />
        </div>
        <div>{pages[currentLanguage]}</div>
      </div>
      {unrecognizedChildren}
    </>
  )
}

export default CodeContainer

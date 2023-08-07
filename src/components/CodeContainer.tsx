"use client"

import { Children, isValidElement, ReactElement, ReactNode } from "react"
import LanguageSelect from "./LanguageSelect"
import { useRef, useState } from "react"
import { Copy } from "lucide-react"
import { Tooltip } from "./Tooltip"

const COPY = "Copy to clipboard"
const COPIED = "Copied!"

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
  const currentPageRef = useRef<HTMLDivElement>(null)
  const [copyTooltipVisible, setCopyTooltipVisible] = useState(false)
  const [copyTooltipTitle, setCopyTooltipTitle] = useState(COPY)

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

  function onCopy() {
    if (currentPageRef.current === null) {
      return
    }

    let code = currentPageRef.current.innerText
    navigator.clipboard.writeText(code).then(() => {
      setCopyTooltipVisible(true)
      setCopyTooltipTitle(COPIED)
    })
  }

  function onCopyTooltipOpenChange(open: boolean) {
    if (open) {
      setCopyTooltipTitle(COPY)
    }
    setCopyTooltipVisible(open)
  }

  return (
    <>
      {languages.length > 0 ? (
        <div className="my-5 rounded-md bg-bg-code text-code-container-header">
          <div className="flex justify-between gap-2 border-b border-gray-600 px-4 py-1 text-sm dark:border-gray-300">
            <div className="py-1">{title}</div>
            <div className="flex items-center gap-2">
              {languages.length > 1 ? (
                <LanguageSelect
                  languages={languages}
                  current={currentLanguage}
                  onChange={setCurrentLanguage}
                />
              ) : (
                <div className="mr-2 uppercase opacity-60">{languages[0]}</div>
              )}
              <Tooltip
                content={copyTooltipTitle}
                open={copyTooltipVisible}
                onOpenChange={onCopyTooltipOpenChange}
              >
                <div
                  className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm hover:bg-gray-700 dark:hover:bg-gray-200"
                  onClick={() => onCopy()}
                >
                  <Copy size="1em" />
                  &#8203;
                </div>
              </Tooltip>
            </div>
          </div>
          <div ref={currentPageRef}>{pages[currentLanguage]}</div>
        </div>
      ) : undefined}
      {unrecognizedChildren}
    </>
  )
}

export default CodeContainer

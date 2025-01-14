"use client"

import LanguageSelect from "./LanguageSelect"
import ScrollArea from "./ScrollArea"
import { Tooltip } from "./Tooltip"
import {
  makeLanguageStoreId,
  usePreferredLanguage,
} from "./hooks/usePreferredLanguage"
import { Copy } from "lucide-react"
import {
  Children,
  ReactElement,
  ReactNode,
  isValidElement,
  useEffect,
} from "react"
import { useMemo, useRef, useState } from "react"

const COPY = "Copy to clipboard"
const COPIED = "Copied!"

function findCode(node: ReactNode, pres: ReactElement<any>[]) {
  if (!isValidElement(node)) {
    return
  }
  if (node.type === "pre") {
    pres.push(node)
  } else {
    findCodeInChildren((node as ReactElement<any>).props.children, pres)
  }
}

function findCodeInChildren(children: ReactNode, pres: ReactElement<any>[]) {
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

  let { languages, pages, unrecognizedChildren } = useMemo(() => {
    let languages: string[] = []

    let pres: ReactElement<any>[] = []
    findCodeInChildren(children, pres)

    let pages: Record<string, React.ReactElement<any>> = {}
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
          <ScrollArea nonAppleType="always" forceDark={true}>
            {pre}
          </ScrollArea>
        </div>
      )
    }

    return { languages, pages, unrecognizedChildren }
  }, [children])

  let languageStoreId = makeLanguageStoreId(languages)
  const preferredLanguage: string | undefined = usePreferredLanguage(
    state => state.preferredLanguages[languageStoreId],
  )
  const setPreferredLanguage = usePreferredLanguage(
    state => state.setPreferredLanguage,
  )
  const [currentLanguage, setCurrentLanguage] = useState(languages[0])

  useEffect(() => {
    if (
      languages.length > 0 &&
      preferredLanguage !== undefined &&
      languages.includes(preferredLanguage)
    ) {
      setCurrentLanguage(preferredLanguage)
    }
  }, [preferredLanguage, languages])

  function onChangeCurrentLanguage(lang: string) {
    setCurrentLanguage(lang)
    setPreferredLanguage(languageStoreId, lang)
  }

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
                  onChange={onChangeCurrentLanguage}
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

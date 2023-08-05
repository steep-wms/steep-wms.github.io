import Link from "next/link"
import { Toc } from "@/components/docs/Toc"
import Sidebar from "./Sidebar"
import { useEffect, useRef } from "react"
import clsx from "clsx"

function createToc(activeSlug?: string) {
  let result = []
  for (let chapter of Toc) {
    let titleSlug = chapter.slug
    result.push(
      <li key={titleSlug}>
        <div className="mb-2 font-normal">{chapter.title}</div>
        <ul className="flex flex-col gap-2 border-l border-gray-200 pl-3">
          {chapter.pages.map(p => {
            return (
              <li
                key={p.slug}
                className={clsx({
                  "text-gray-700": p.slug !== activeSlug,
                  "font-normal text-primary": p.slug === activeSlug,
                })}
              >
                <Link
                  href={`/docs/${p.slug}`}
                  data-sidebar-page-slug={p.slug}
                  className="hover:text-primary-hover"
                >
                  {p.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </li>,
    )
  }
  return result
}

interface SidebarLeftProps {
  activeSlug?: string
}

const SidebarLeft = ({ activeSlug }: SidebarLeftProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLUListElement>(null)

  let toc = createToc(activeSlug)

  useEffect(() => {
    if (sectionsRef.current === null || sidebarRef.current === null) {
      return
    }
    let element = sectionsRef.current.querySelector(
      `[data-sidebar-page-slug="${activeSlug}"]`,
    )
    if (element !== null) {
      let erect = element.getBoundingClientRect()
      let srect = sectionsRef.current.getBoundingClientRect()
      let parent = sectionsRef.current.parentElement!
      let prect = parent.getBoundingClientRect()

      if (erect.bottom > prect.bottom || erect.top < prect.top) {
        let top = erect.top - srect.top
        sidebarRef.current.scrollTo({ top })
      }
    }
  }, [activeSlug])

  return (
    <Sidebar ref={sidebarRef}>
      <ul className="flex flex-col gap-6" ref={sectionsRef}>
        {toc}
      </ul>
    </Sidebar>
  )
}

export default SidebarLeft

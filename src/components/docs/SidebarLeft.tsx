import Link from "@/components/LinkFix"
import { Toc } from "@/components/docs/Toc"
import Sidebar from "./Sidebar"
import { useEffect, useRef } from "react"
import { useSelectedLayoutSegment } from "next/navigation"
import clsx from "clsx"
import scrollparent from "scrollparent"

function createToc(activeSlug: string) {
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

const SidebarLeft = () => {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLUListElement>(null)
  const segment = useSelectedLayoutSegment()

  let activeSlug = segment ?? ""
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
      let parent = scrollparent(sectionsRef.current)!
      let prect = parent.getBoundingClientRect()

      // center active item in view if necessary
      if (erect.bottom > prect.bottom || erect.top < prect.top) {
        let top = erect.top - srect.top
        sidebarRef.current.scrollTop = top - prect.height / 2 + erect.height / 2
      }
    }
  }, [activeSlug])

  return (
    <Sidebar ref={sidebarRef}>
      <ul className="flex flex-col gap-6 mb-4" ref={sectionsRef}>
        {toc}
      </ul>
    </Sidebar>
  )
}

export default SidebarLeft

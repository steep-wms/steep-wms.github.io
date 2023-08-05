import Link from "next/link"
import { Toc } from "@/components/docs/Toc"
import Sidebar from "./Sidebar"
import { useEffect, useRef } from "react"
import clsx from "clsx"
import { create } from "zustand"

const useScrollStore = create(() => ({ top: 0 }))

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
    if (sidebarRef.current === null) {
      return
    }
    let sidebar = sidebarRef.current

    // restore scroll position from last time the component was mounted
    sidebar.scrollTop = useScrollStore.getState().top

    function onScroll() {
      useScrollStore.setState({ top: sidebar.scrollTop })
    }

    sidebar.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      sidebar.removeEventListener("scroll", onScroll)
    }
  }, [])

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

      // center active item in view if necessary
      if (erect.bottom > prect.bottom || erect.top < prect.top) {
        let top = erect.top - srect.top
        sidebarRef.current.scrollTop = top - prect.height / 2 + erect.height / 2
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

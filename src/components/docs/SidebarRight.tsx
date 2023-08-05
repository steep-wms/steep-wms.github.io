import Link from "next/link"
import Sidebar from "./Sidebar"
import { Index } from "@/components/docs/Toc"
import { ExternalLink } from "lucide-react"
import { useEffect, useRef } from "react"
import clsx from "clsx"

interface SidebarRightProps {
  slug: string
  activeSection?: string
}

const SidebarRight = ({ slug, activeSection }: SidebarRightProps) => {
  const firstScroll = useRef<boolean>(true)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLUListElement>(null)

  let entry = Index[slug]
  let sections = undefined
  if (entry.type === "page") {
    sections = entry.sections?.map(s => {
      return (
        <li key={s.slug}>
          <Link
            href={`#${s.slug}`}
            data-sidebar-section-slug={s.slug}
            className={clsx("hover:text-primary-hover", {
              "text-gray-700": activeSection !== s.slug,
              "font-normal text-primary": activeSection === s.slug,
            })}
          >
            {s.title}
          </Link>
        </li>
      )
    })
  }

  useEffect(() => {
    if (sectionsRef.current === null || sidebarRef.current === null) {
      return
    }
    let element = sectionsRef.current.querySelector(
      `[data-sidebar-section-slug="${activeSection}"]`,
    )
    if (element !== null) {
      let erect = element.getBoundingClientRect()
      let srect = sectionsRef.current.getBoundingClientRect()
      let parent = sectionsRef.current.parentElement!
      let prect = parent.getBoundingClientRect()

      if (erect.bottom > prect.bottom || erect.top < prect.top) {
        let top = erect.top - srect.top
        sidebarRef.current.scrollTo({
          top,
          behavior: firstScroll.current ? "instant" : "smooth",
        })
      }

      firstScroll.current = false
    }
  }, [activeSection])

  let githubFilename = slug
  if (slug === "") {
    githubFilename = "get-started"
  }

  return (
    <Sidebar ref={sidebarRef}>
      {sections !== undefined ? (
        <>
          <div className="mb-4 font-normal">On this page</div>
          <ul
            className="mb-4 flex flex-col gap-2 border-b border-gray-200 pb-4"
            ref={sectionsRef}
          >
            {sections}
          </ul>
        </>
      ) : undefined}
      <Link
        href={`https://github.com/steep-wms/steep-wms.github.io/blob/master/src/content/docs/${githubFilename}.mdx`}
        className="text-gray-600 hover:text-primary-hover"
      >
        Edit this page on GitHub{" "}
        <ExternalLink size="0.9em" className="mb-[3px] inline-flex" />
      </Link>
    </Sidebar>
  )
}

export default SidebarRight

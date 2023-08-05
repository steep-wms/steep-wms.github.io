import Link from "next/link"
import { Toc } from "@/components/docs/Toc"
import Sidebar from "./Sidebar"
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
  let toc = createToc(activeSlug)

  return (
    <Sidebar>
      <ul className="flex flex-col gap-6">{toc}</ul>
    </Sidebar>
  )
}

export default SidebarLeft

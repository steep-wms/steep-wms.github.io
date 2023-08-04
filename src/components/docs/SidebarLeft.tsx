import GithubSlugger from "github-slugger"
import Link from "next/link"
import { Toc } from "@/components/docs/Toc"
import Sidebar from "./Sidebar"
import clsx from "clsx"

function createToc(activeSlug?: string) {
  let slugger = new GithubSlugger()

  let result = []
  for (let group of Toc) {
    let titleSlug = slugger.slug(group.title)
    result.push(
      <li key={titleSlug}>
        <div className="mb-2 font-normal">{group.title}</div>
        <ul className="flex flex-col gap-2 border-l border-gray-200 pl-3">
          {group.pages.map(p => {
            let ps = slugger.slug(p.title)
            return (
              <li
                key={ps}
                className={clsx({
                  "font-normal text-primary": ps === activeSlug,
                })}
              >
                <Link href={`/docs/${ps}`} className="hover:text-primary-hover">
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

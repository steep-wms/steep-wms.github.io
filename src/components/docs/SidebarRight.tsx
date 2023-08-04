import Link from "next/link"
import Sidebar from "./Sidebar"
import { Index } from "@/components/docs/Toc"
import GithubSlugger from "github-slugger"
import { ExternalLink } from "lucide-react"
import clsx from "clsx"

interface SidebarRightProps {
  slug: string
  activeSection?: string
}

const SidebarRight = ({ slug, activeSection }: SidebarRightProps) => {
  let slugger = new GithubSlugger()
  let entry = Index[slug]
  let sections = undefined
  if ("sections" in entry) {
    sections = entry.sections?.map(s => {
      let sectionSlug = slugger.slug(s)
      return (
        <li key={sectionSlug}>
          <Link
            href={`#${sectionSlug}`}
            className={clsx("hover:text-primary-hover", {
              "text-primary": activeSection === sectionSlug,
            })}
          >
            {s}
          </Link>
        </li>
      )
    })
  }

  return (
    <Sidebar>
      {sections !== undefined ? (
        <>
          <div className="mb-4 font-normal">On this page</div>
          <ul className="mb-4 flex flex-col gap-2 border-b border-gray-200 pb-4">
            {sections}
          </ul>
        </>
      ) : undefined}
      <Link
        href={`https://github.com/steep-wms/steep-wms.github.io/blob/master/src/content/docs/${slug}.mdx`}
        className="hover:text-primary-hover"
      >
        Edit this page on GitHub{" "}
        <ExternalLink size="0.9em" className="mb-[3px] inline-flex" />
      </Link>
    </Sidebar>
  )
}

export default SidebarRight

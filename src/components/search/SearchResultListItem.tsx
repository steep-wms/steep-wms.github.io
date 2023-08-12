import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import clsx from "clsx"
import type { SearchResult } from "./SearchResult"
import { Index } from "../docs/Toc"
import { forwardRef } from "react"

interface SearchResultListItemProps {
  item: SearchResult
  active: boolean
  onFocus: () => void
  onClose: () => void
  onMouseMove: () => void
}

const SearchResultListItem = forwardRef<
  HTMLAnchorElement,
  SearchResultListItemProps
>(({ item, active, onFocus, onClose, onMouseMove }, ref) => {
  let slug = item.slug
  if (slug === "get-started") {
    slug = ""
  }

  let context
  let idxentry = Index[slug]
  if (idxentry.type === "page") {
    context = idxentry.chapter
  } else if (idxentry.type === "section" || idxentry.type === "subsection") {
    context = idxentry.page
  }
  let contextTitle
  if (context !== undefined) {
    contextTitle = Index[context].title
  }

  return (
    <Link
      href={`/docs/${slug}`}
      ref={ref}
      onFocus={onFocus}
      onClick={() => onClose()}
      onMouseMove={onMouseMove}
    >
      <div
        className={clsx("rounded-md px-4 py-4", {
          "active group bg-primary text-bg dark:bg-primary/60 dark:text-gray-900":
            active,
          "bg-gray-100 dark:bg-gray-200": !active,
        })}
      >
        <div className="mb-2">
          <span className="font-normal">{item.title}</span>
          {contextTitle !== undefined ? (
            <>
              {" "}
              <span className="whitespace-nowrap text-xs text-gray-600 group-[.active]:text-gray-400">
                <ChevronLeft size=".8em" /> {contextTitle}
              </span>
            </>
          ) : undefined}
        </div>
        <div className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-relaxed">
          {item.body}
        </div>
      </div>
    </Link>
  )
})

export default SearchResultListItem

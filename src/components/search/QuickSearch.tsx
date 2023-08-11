import { useHotkeys } from "react-hotkeys-hook"
import { useLayoutEffect, useState } from "react"
import dynamic from "next/dynamic"

const SearchDialog = dynamic(() => import("./SearchDialog"))

const QuickSearch = () => {
  const [modKey, setModKey] = useState<string | undefined>(undefined)
  const [searchDialogOpen, setSearchDialogOpen] = useState(false)

  useHotkeys("mod+k", () => {
    setSearchDialogOpen(true)
  })

  useLayoutEffect(() => {
    if (typeof navigator !== "undefined" && navigator.platform !== undefined) {
      let p = navigator.platform.toLowerCase()
      if (p.includes("mac") || p.includes("iphone") || p.includes("ipad")) {
        setModKey("⌘")
      } else {
        setModKey("Ctrl+")
      }
    }
  }, [])

  return (
    <>
      <button
        className="flex h-8 w-56 cursor-pointer select-none items-center justify-between rounded border border-gray-200/0 bg-gray-200/60 pl-3 pr-2 text-sm text-gray-600 transition-colors hover:border-gray-400"
        onClick={() => setSearchDialogOpen(true)}
      >
        Search docs ...
        {modKey !== undefined ? (
          <div className="flex h-5 items-center rounded border border-gray-200 px-1 text-xs text-gray-600">
            {modKey}K
          </div>
        ) : undefined}
      </button>
      <SearchDialog
        open={searchDialogOpen}
        onClose={() => setSearchDialogOpen(false)}
      />
    </>
  )
}

export default QuickSearch

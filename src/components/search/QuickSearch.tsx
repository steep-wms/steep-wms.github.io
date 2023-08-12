import { useHotkeys } from "react-hotkeys-hook"
import { useState } from "react"
import dynamic from "next/dynamic"
import { Search } from "lucide-react"
import { useIsApple } from "../hooks/useIsApple"

const SearchDialog = dynamic(() => import("./SearchDialog"))

interface QuickSearchProps {
  onClick?: () => void
}

const QuickSearch = ({ onClick }: QuickSearchProps) => {
  const isApple = useIsApple()
  const [searchDialogOpen, setSearchDialogOpen] = useState(false)

  useHotkeys(
    "mod+k",
    () => {
      setSearchDialogOpen(true)
    },
    {
      preventDefault: true,
    },
  )

  return (
    <>
      <button
        className="lg:hidden"
        onClick={() => {
          onClick?.()
          setSearchDialogOpen(true)
        }}
      >
        <Search size="1.75rem" />
      </button>
      <button
        className="hidden h-8 w-56 cursor-pointer select-none items-center justify-between rounded border border-gray-200/0 bg-gray-200/60 pl-3 pr-2 text-sm text-gray-600 transition-colors hover:border-gray-400 lg:flex"
        onClick={() => setSearchDialogOpen(true)}
      >
        Search docs ...
        {isApple !== undefined ? (
          <div className="flex h-5 items-center rounded border border-gray-200 px-1 text-xs text-gray-600">
            {isApple ? "⌘" : "Ctrl+"}K
          </div>
        ) : undefined}
      </button>
      <SearchDialog
        open={searchDialogOpen}
        onClose={() => {
          onClick?.()
          setSearchDialogOpen(false)
        }}
      />
    </>
  )
}

export default QuickSearch

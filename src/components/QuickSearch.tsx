const QuickSearch = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="h-8 w-56 rounded bg-gray-200 bg-opacity-60 pl-2 pr-10 text-sm placeholder-gray-600"
        placeholder="Search docs ..."
      />
      <div className="absolute right-1 top-0 flex h-full items-center">
        <div className="flex h-6 items-center rounded border border-gray-400 px-1 text-sm text-gray-600">
          ⌘K
        </div>
      </div>
    </div>
  )
}

export default QuickSearch

import { forwardRef } from "react"

interface SidebarProps {
  children: React.ReactNode
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ children }, ref) => {
    return (
      <div className="sticky top-0 flex max-h-screen w-full pt-24">
        <div
          className="max-h-full w-full overflow-y-auto pb-4 text-sm"
          ref={ref}
        >
          {children}
        </div>
      </div>
    )
  },
)

export default Sidebar

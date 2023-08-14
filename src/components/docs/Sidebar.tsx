import { forwardRef } from "react"
import ScrollArea from "../ScrollArea"

interface SidebarProps {
  children: React.ReactNode
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ children }, ref) => {
    return (
      <div className="sticky top-0 flex max-h-screen w-full pt-24">
        <ScrollArea ref={ref} className="max-h-full w-full text-sm">
          {children}
        </ScrollArea>
      </div>
    )
  },
)

export default Sidebar

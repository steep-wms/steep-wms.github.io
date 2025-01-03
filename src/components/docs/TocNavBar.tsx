import { Index, type Page } from "@/components/docs/Toc"
import { Cross as Hamburger } from "hamburger-react"
import { ChevronRight } from "lucide-react"
import { useSelectedLayoutSegment } from "next/navigation"
import { Dispatch, SetStateAction } from "react"

interface TocNavBarProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const TocNavBar = ({ isOpen, setIsOpen }: TocNavBarProps) => {
  const segment = useSelectedLayoutSegment()
  return (
    <nav className="fixed left-0 right-0 top-16 z-50 flex h-16 items-center gap-2 border-b border-gray-200 bg-bg bg-opacity-80 pl-0.5 pr-2 backdrop-blur-sm sm:pl-2.5 lg:hidden">
      <div>
        <Hamburger
          label="Show table of contents"
          toggled={isOpen}
          toggle={setIsOpen}
        />
      </div>
      <div className="max-w-min whitespace-nowrap text-gray-600">
        {Index[(Index[segment ?? ""] as Page).chapter].title}
      </div>
      <ChevronRight size="1em" />
      <div className="overflow-hidden text-ellipsis whitespace-nowrap font-normal">
        {Index[segment ?? ""].title}
      </div>
    </nav>
  )
}

export default TocNavBar

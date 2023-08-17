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
    <nav className="flex fixed left-0 right-0 top-16 h-16 z-50 lg:hidden bg-bg bg-opacity-80 backdrop-blur-sm items-center pl-0.5 pr-2 gap-2 border-b border-gray-200">
      <div>
        <Hamburger
          label="Show table of contents"
          toggled={isOpen}
          toggle={setIsOpen}
        />
      </div>
      <div className="text-gray-600 whitespace-nowrap max-w-min">
        {Index[(Index[segment ?? ""] as Page).chapter].title}
      </div>
      <ChevronRight size="1em" />
      <div className="font-normal text-ellipsis whitespace-nowrap overflow-hidden">
        {Index[segment ?? ""].title}
      </div>
    </nav>
  )
}

export default TocNavBar

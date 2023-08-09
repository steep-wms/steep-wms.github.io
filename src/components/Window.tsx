import clsx from "clsx"

interface WindowProps {
  children: React.ReactNode
  title?: string
  className?: string
}

const Window = ({ children, title, className }: WindowProps) => {
  return (
    <div className={clsx("overflow-hidden rounded", className)}>
      <div className="flex items-center gap-[0.4rem] border-b border-gray-200 px-4 py-[0.6rem]">
        <div className="h-[0.68rem] w-[0.68rem] rounded-full bg-[#ff5f55]"></div>
        <div className="h-[0.68rem] w-[0.68rem] rounded-full bg-[#ffbe2d]"></div>
        <div className="h-[0.68rem] w-[0.68rem] rounded-full bg-[#25c93f]"></div>
        {title !== undefined ? (
          <div className="my-0 mr-8 flex flex-1 justify-center text-xs leading-[0]">
            {title}
          </div>
        ) : undefined}
      </div>
      {children}
    </div>
  )
}

export default Window

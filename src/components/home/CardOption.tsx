import clsx from "clsx"
import Card from "../Card"

interface CardOptionProps {
  title?: string
  children?: React.ReactNode
  active: boolean
  onActivate?: () => void
}

const CardOption = ({
  title,
  children,
  active,
  onActivate,
}: CardOptionProps) => {
  return (
    <div className="relative">
      <Card
        title={title}
        className={clsx(
          "cursor-pointer select-none transition-colors hover:bg-bg",
          {
            "bg-bg shadow-sm": active,
          },
        )}
        onClick={onActivate}
      >
        {children}
      </Card>
      {active ? (
        <hr className="absolute -right-8 top-1/2 m-0 hidden w-8 border-gray-500 lg:block" />
      ) : undefined}
    </div>
  )
}

export default CardOption

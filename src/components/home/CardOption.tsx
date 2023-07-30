import clsx from "clsx"
import Card from "../Card"

interface CardOptionProps {
  title?: string
  children?: React.ReactNode
  active: boolean
  placement: "left" | "right"
  onActivate?: () => void
}

const CardOption = ({
  title,
  children,
  active,
  placement,
  onActivate,
}: CardOptionProps) => {
  return (
    <div className="relative">
      <Card
        title={title}
        className={clsx(
          "cursor-pointer select-none transition-colors hover:bg-bg",
          {
            "opacity-80 hover:opacity-100": !active,
            "bg-bg opacity-100 shadow": active,
          },
        )}
        onClick={onActivate}
      >
        {children}
      </Card>
      {active ? (
        <hr
          className={clsx(
            "absolute top-1/2 m-0 hidden w-8 border-gray-500 lg:block",
            {
              "-right-8": placement === "left",
              "-left-8": placement === "right",
            },
          )}
        />
      ) : undefined}
    </div>
  )
}

export default CardOption

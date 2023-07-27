import clsx from "clsx"

interface CardProps {
  title?: string
  children?: React.ReactNode
  className?: string
}

const Card = ({
  title,
  children,
  className,
  ...props
}: CardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx(
        "rounded-md border border-gray-300 px-4 py-3 [&_p:last-child]:mb-2",
        className,
      )}
      {...props}
    >
      {title !== undefined ? <h4 className="mt-0">{title}</h4> : undefined}
      {children}
    </div>
  )
}

export default Card

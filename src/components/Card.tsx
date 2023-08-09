import clsx from "clsx"

interface CardProps {
  title?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

const Card = ({
  title,
  children,
  className,
  ...props
}: CardProps & Omit<React.HTMLAttributes<HTMLDivElement>, "title">) => {
  return (
    <div
      className={clsx(
        "rounded-md border border-gray-300 px-4 py-3 [&_p:last-child]:mb-2",
        className,
      )}
      {...props}
    >
      {title !== undefined ? <h3 className="mt-0">{title}</h3> : undefined}
      {children}
    </div>
  )
}

export default Card

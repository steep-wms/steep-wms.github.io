import clsx from "clsx"
import { ReactNode } from "react"

interface ContainerProps {
  id?: string
  className?: string
  children: ReactNode
  type?: "2xl" | "xl" | "lg" | "md" | "sm"
}

const Container = ({
  id = undefined,
  className = undefined,
  children,
  type = "2xl",
}: ContainerProps) => {
  return (
    <section
      id={id}
      className={clsx(
        "mx-auto flex flex-col px-2",
        {
          "max-w-screen-2xl": type === "2xl",
          "max-w-screen-xl": type === "xl",
          "max-w-screen-lg": type === "lg",
          "max-w-screen-md": type === "md",
          "max-w-screen-sm": type === "sm",
        },
        className,
      )}
    >
      {children}
    </section>
  )
}

export default Container

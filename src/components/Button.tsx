import { MouseEventHandler } from "react"
import clsx from "clsx"

interface BaseButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
  className?: string | undefined
}

const BaseButton = ({
  children,
  onClick = undefined,
  className,
}: BaseButtonProps) => {
  return (
    <button
      className={clsx(
        "inline-flex select-none items-center justify-center rounded-lg px-6 py-2 font-normal transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-hover focus-visible:ring-offset-2",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
  className?: string
}

const Button = ({ onClick = undefined, children, className }: ButtonProps) => {
  return (
    <BaseButton
      className={clsx(
        "bg-primary text-white hover:bg-primary-hover dark:border-2 dark:border-primary dark:bg-bg dark:bg-opacity-0 dark:text-primary dark:hover:border-primary-hover dark:hover:text-primary-hover",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </BaseButton>
  )
}

interface TransparentButtonProps extends ButtonProps {
  darkMode?: "auto" | "force-dark" | "force-light"
}

const TransparentButton = ({
  onClick = undefined,
  darkMode = "auto",
  children,
}: TransparentButtonProps) => {
  return (
    <BaseButton
      className={clsx({
        "border-2 border-gray-200 text-gray-200 mix-blend-lighten hover:bg-gray-200 hover:text-black dark:mix-blend-darken dark:hover:text-white":
          darkMode === "auto",
        "border-2 border-gray-200 text-gray-200 mix-blend-lighten hover:bg-gray-200 hover:text-black dark:border-gray-700 dark:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-black":
          darkMode === "force-dark",
        "border-2 border-gray-700 text-gray-700 mix-blend-darken hover:bg-gray-700 hover:text-white dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-white":
          darkMode === "force-light",
      })}
      onClick={onClick}
    >
      {children}
    </BaseButton>
  )
}

export { Button, TransparentButton }

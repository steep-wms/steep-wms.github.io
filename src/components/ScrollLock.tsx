import { useEffect } from "react"
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock"

interface ScrollLockProps {
  locked: boolean
  target: HTMLDivElement | null
}

const ScrollLock = ({ locked, target }: ScrollLockProps) => {
  useEffect(() => {
    if (target !== null && locked) {
      disableBodyScroll(target)
    } else {
      clearAllBodyScrollLocks()
    }
  }, [target, locked])

  return <></>
}

export default ScrollLock

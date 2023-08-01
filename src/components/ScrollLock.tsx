import { useEffect } from "react"
import { lock, clearBodyLocks } from "tua-body-scroll-lock"

interface ScrollLockProps {
  locked: boolean
  target: HTMLDivElement | null
}

const ScrollLock = ({ locked, target }: ScrollLockProps) => {
  useEffect(() => {
    if (target !== null && locked) {
      lock(target)
    } else {
      clearBodyLocks()
    }
  }, [target, locked])

  return <></>
}

export default ScrollLock

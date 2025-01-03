import { RefObject, useEffect, useState } from "react"

function useInViewEx(
  ref: RefObject<Element | null>,
  enterThreshold: number,
  leaveThreshold: number,
): boolean {
  const [inViewCombined, setInViewCombined] = useState(false)

  useEffect(() => {
    if (!ref.current) {
      return
    }

    function onIntersectionChange(entries: IntersectionObserverEntry[]) {
      for (let entry of entries) {
        setInViewCombined(state => {
          if (
            !state &&
            entry.isIntersecting &&
            entry.intersectionRatio >= enterThreshold
          ) {
            return true
          }
          if (
            state &&
            (!entry.isIntersecting || entry.intersectionRatio <= leaveThreshold)
          ) {
            return false
          }
          return state
        })
      }
    }

    const observer = new IntersectionObserver(onIntersectionChange, {
      threshold: [leaveThreshold, enterThreshold],
    })

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref, enterThreshold, leaveThreshold])

  return inViewCombined
}

export default useInViewEx

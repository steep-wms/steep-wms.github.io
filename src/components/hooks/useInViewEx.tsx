import { useInView } from "framer-motion"
import { RefObject, useEffect, useState } from "react"

interface UseInViewOptions {
  root?: RefObject<Element>
  margin?: string
  once?: boolean
  amount?: "some" | "all" | number
}

function useInViewEx(
  ref: RefObject<Element>,
  optionsEnter: UseInViewOptions,
  optionsLeave: UseInViewOptions,
): boolean {
  const inViewEnter = useInView(ref, optionsEnter)
  const inViewLeave = useInView(ref, optionsLeave)
  const [inViewCombined, setInViewCombined] = useState(false)

  useEffect(() => {
    setInViewCombined(state => {
      if (!state && inViewEnter) {
        return true
      } else if (state && !inViewLeave) {
        return false
      }
      return state
    })
  }, [inViewEnter, inViewLeave])

  return inViewCombined
}

export default useInViewEx

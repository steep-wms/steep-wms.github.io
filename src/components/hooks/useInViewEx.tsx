import { inView } from "framer-motion"
import { RefObject, useEffect, useState } from "react"

interface UseInViewOptions {
  root?: RefObject<Element>
  margin?: string
  amount?: "some" | "all" | number
}

function useInViewEx(
  ref: RefObject<Element>,
  optionsEnter: UseInViewOptions,
  optionsLeave: UseInViewOptions,
): boolean {
  const [inViewCombined, setInViewCombined] = useState(false)

  function convertOptions(o: UseInViewOptions) {
    return {
      root: (o.root && o.root.current) || undefined,
      margin: o.margin,
      amount: o.amount,
    }
  }

  useEffect(() => {
    if (!ref.current) {
      return
    }

    function onEnterChange() {
      setInViewCombined(true)

      return () => {
        // nothing to do here but this callback is necessary to be notified
        // again when the element re-enters the viewport
      }
    }

    function onLeaveChange() {
      // nothing to do on enter

      return () => {
        setInViewCombined(false)
      }
    }

    let oe = convertOptions(optionsEnter)
    let ol = convertOptions(optionsLeave)

    let enterCleanup = inView(ref.current, onEnterChange, oe)
    let leaveCleanup = inView(ref.current, onLeaveChange, ol)

    return () => {
      enterCleanup()
      leaveCleanup()
    }
  }, [ref, optionsEnter, optionsLeave])

  return inViewCombined
}

export default useInViewEx

"use client"

import GenerateProcessChains from "../../../assets/generate-process-chains.svg?drawio"
import clsx from "clsx"
import { AnimationSequence, useAnimate } from "framer-motion"
import { useEffect } from "react"

interface GenerateProcessChainsExampleProps {
  animated?: boolean
}

const GenerateProcessChainsExample = ({
  animated = false,
}: GenerateProcessChainsExampleProps) => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("[data-animation-id=red]", { opacity: 0 }, { duration: 0 })
    animate("[data-animation-id=blue1]", { opacity: 0 }, { duration: 0 })
    animate("[data-animation-id=blue2]", { opacity: 0 }, { duration: 0 })
    animate("[data-animation-id=green]", { opacity: 0 }, { duration: 0 })

    if (animated) {
      let sequence: AnimationSequence = [
        ["[data-animation-id=red]", { opacity: 1 }, { at: 1 }],
        ["[data-animation-id=blue1]", { opacity: 1 }, { at: 2 }],
        ["[data-animation-id=blue2]", { opacity: 1 }, { at: 2 }],
        ["[data-animation-id=green]", { opacity: 1 }, { at: 3 }],
        ["[data-animation-id=red]", { opacity: 0 }, { at: 4.5 }],
        ["[data-animation-id=blue1]", { opacity: 0 }, { at: 4.5 }],
        ["[data-animation-id=blue2]", { opacity: 0 }, { at: 4.5 }],
        ["[data-animation-id=green]", { opacity: 0 }, { at: 4.5 }],
      ]
      animate(sequence, { repeat: Infinity })
    }
  }, [animated, animate])

  return (
    <div
      className={clsx("font-normal mx-auto my-6 max-w-[11rem]", {
        "[&_[data-animation-id]]:hidden": !animated,
      })}
      ref={scope}
    >
      <GenerateProcessChains />
    </div>
  )
}

export default GenerateProcessChainsExample

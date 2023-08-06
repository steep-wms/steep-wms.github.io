"use client"

import GenerateProcessChains from "../../../assets/generate-process-chains.svg?source"
import { useEffect } from "react"
import { AnimationSequence, useAnimate } from "framer-motion"
import clsx from "clsx"

interface GenerateProcessChainsExampleProps {
  animated?: boolean
}

const GenerateProcessChainsExample = ({
  animated = false,
}: GenerateProcessChainsExampleProps) => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      "#docs-image-generate-process-chains-box1",
      { opacity: 0 },
      { duration: 0 },
    )
    animate(
      "#docs-image-generate-process-chains-box2",
      { opacity: 0 },
      { duration: 0 },
    )
    animate(
      "#docs-image-generate-process-chains-box3",
      { opacity: 0 },
      { duration: 0 },
    )
    animate(
      "#docs-image-generate-process-chains-box4",
      { opacity: 0 },
      { duration: 0 },
    )

    if (animated) {
      let sequence: AnimationSequence = [
        ["#docs-image-generate-process-chains-box1", { opacity: 1 }, { at: 1 }],
        ["#docs-image-generate-process-chains-box2", { opacity: 1 }, { at: 2 }],
        ["#docs-image-generate-process-chains-box3", { opacity: 1 }, { at: 2 }],
        ["#docs-image-generate-process-chains-box4", { opacity: 1 }, { at: 3 }],
        [
          "#docs-image-generate-process-chains-box1",
          { opacity: 0 },
          { at: 4.5 },
        ],
        [
          "#docs-image-generate-process-chains-box2",
          { opacity: 0 },
          { at: 4.5 },
        ],
        [
          "#docs-image-generate-process-chains-box3",
          { opacity: 0 },
          { at: 4.5 },
        ],
        [
          "#docs-image-generate-process-chains-box4",
          { opacity: 0 },
          { at: 4.5 },
        ],
      ]
      animate(sequence, { repeat: Infinity })
    }
  }, [animated, animate])

  return (
    <div
      className={clsx("mx-auto max-w-[10rem]", {
        "[&_#docs-image-generate-process-chains-box1]:hidden [&_#docs-image-generate-process-chains-box2]:hidden [&_#docs-image-generate-process-chains-box3]:hidden [&_#docs-image-generate-process-chains-box4]:hidden":
          !animated,
      })}
      ref={scope}
      dangerouslySetInnerHTML={{ __html: GenerateProcessChains }}
    />
  )
}

export default GenerateProcessChainsExample

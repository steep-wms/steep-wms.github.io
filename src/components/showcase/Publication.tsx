"use client"

import Link from "../LinkFix"
import { AnimationPlaybackControls, useAnimate } from "framer-motion"
import { useCallback, useRef } from "react"

interface PublicationProps {
  previewImages: string[]
  previewImageWidth?: number
  previewImageHeight: number
  authors: string
  year: string
  title: string
  citation: React.ReactNode
  pdf: string
}

const Publication = ({
  previewImages,
  previewImageWidth = 450,
  previewImageHeight,
  authors,
  year,
  title,
  citation,
  pdf,
}: PublicationProps) => {
  const [scope, animate] = useAnimate()
  const animationControls = useRef<AnimationPlaybackControls | undefined>(
    undefined,
  )

  const onMouseEnter = useCallback(() => {
    if (animationControls.current !== undefined) {
      animationControls.current.stop()
    }
    animationControls.current = animate(
      "div",
      { y: ["0%", "-100%", "-100%", "-200%"] },
      {
        duration: 1.5,
        ease: "circOut",
        times: [0, 0.4, 0.6, 1],
      },
    )
  }, [animate])

  const onMouseLeave = useCallback(() => {
    if (animationControls.current !== undefined) {
      animationControls.current.stop()
    }
    animationControls.current = animate(
      "div:first-child",
      { opacity: [0, 1], y: [0, 0] },
      { duration: 0.3, ease: "easeOut", times: [0, 1] },
    )
  }, [animate])

  return (
    <div className="bg-gray-100 rounded-lg pt-8 pb-8 pr-6 pl-[8.75rem] relative overflow-hidden">
      <div className="flex h-full flex-col">
        <div className="flex flex-row text-sm text-gray-700 mb-2 gap-1">
          <div className="whitespace-nowrap overflow-hidden text-ellipsis">
            {authors}
          </div>
          <div>({year})</div>
        </div>
        <h3 className="text-lg mt-0">{title}</h3>
        <div className="text-xs text-gray-600">{citation}</div>
        <div className="mt-2 text-gray-700"></div>
      </div>
      <div className="not-prose absolute top-14 -left-20 w-48">
        <Link
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
        >
          <div
            ref={scope}
            className="drop-shadow-lg after:absolute after:inset-0 after:bg-[linear-gradient(0.18turn,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0)_100%)] overflow-hidden relative bg-white"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {previewImages.map((pi, i) => (
              <div key={pi} className="relative" style={{ zIndex: -i }}>
                <picture>
                  <source
                    srcSet={`${process.env.basePath}/images/showcase/publications/${pi}.avif`}
                    type="image/avif"
                    width={previewImageWidth}
                    height={previewImageHeight}
                  />
                  <img
                    alt="title"
                    src={`${process.env.basePath}/images/showcase/publications/${pi}.jpg`}
                    width={previewImageWidth}
                    height={previewImageHeight}
                    loading="lazy"
                  />
                </picture>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Publication

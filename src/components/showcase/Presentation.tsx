"use client"

import { useAnimate, useInView } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef } from "react"

interface PresentationProps {
  imageBaseName: string
  nSlides: number
  title: string
  speaker: string
  link: string
  children: React.ReactNode
}

const Presentation = ({
  imageBaseName,
  nSlides,
  title,
  speaker,
  link,
  children,
}: PresentationProps) => {
  const currentImage = useRef(0)
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  let images = []
  for (let i = 1; i <= nSlides; ++i) {
    let s = `${i}`
    if (s.length < 2) {
      s = `0${s}`
    }
    images.push(`${imageBaseName}-${s}`)
  }
  images.push(`${imageBaseName}-01`)

  useEffect(() => {
    if (!isInView) {
      return
    }

    let timerId: number | undefined = undefined
    let aborted = false

    function onTimer() {
      if (scope.current === null) {
        return
      }

      let nextImage = (currentImage.current + 1) % (nSlides + 1)
      let divs = scope.current.querySelectorAll("div")
      let div = divs[nextImage]
      let source: HTMLSourceElement = div.querySelector("source")
      let img: HTMLImageElement = div.querySelector("img")

      source.srcset = source.dataset.srcset!
      let loadingPromises: Promise<void>[] = []
      if (
        img.src === null ||
        img.src === undefined ||
        img.src === "" ||
        !img.complete
      ) {
        img.src = img.dataset.src!
        img.loading = "eager"
        loadingPromises.push(
          new Promise<void>(resolve => {
            img.onload = () => {
              resolve()
            }
          }),
        )
      }

      Promise.all(loadingPromises).then(() => {
        let controls = animate(
          "div",
          { x: `-${100 * nextImage}%` },
          {
            duration: nextImage === 0 ? 0 : 1,
            ease: "easeInOut",
          },
        )
        controls.then(() => {
          currentImage.current = nextImage
          if (!aborted) {
            schedule(nextImage)
          }
        })
      })
    }

    function schedule(nextImage: number, first: boolean = false) {
      if (timerId !== undefined) {
        clearTimeout(timerId)
      }
      let delay
      if (nextImage === 0) {
        delay = 0
      } else {
        if (first) {
          delay = 1000 + Math.random() * 1000
        } else {
          delay = 4000 + Math.random() * 7000
        }
      }
      timerId = window.setTimeout(onTimer, delay)
    }

    schedule(1, true)

    return () => {
      if (timerId !== undefined) {
        clearTimeout(timerId)
      }
      aborted = true
    }
  }, [animate, scope, nSlides, isInView])

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 py-12 border-t border-gray-300 [&:first-child]:pt-0 [&:first-child]:border-none [&:last-child]:pb-0">
      <div className="flex items-start md:col-span-2">
        <Link
          href={link}
          className="mx-auto max-w-full xs:max-w-sm md:max-w-full border border-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex overflow-hidden" ref={scope}>
            {images.map((image, i) => (
              <div key={i} className="min-w-full">
                <picture className="m-0">
                  <source
                    srcSet={
                      i > 0
                        ? undefined
                        : `${process.env.__NEXT_ROUTER_BASEPATH}/images/showcase/presentations/${image}.avif`
                    }
                    data-srcset={`${process.env.__NEXT_ROUTER_BASEPATH}/images/showcase/presentations/${image}.avif`}
                    type="image/avif"
                    width={720}
                    height={405}
                  />
                  <img
                    src={
                      i > 0
                        ? undefined
                        : `${process.env.__NEXT_ROUTER_BASEPATH}/images/showcase/presentations/${image}.jpg`
                    }
                    data-src={`${process.env.__NEXT_ROUTER_BASEPATH}/images/showcase/presentations/${image}.jpg`}
                    alt="Slides"
                    width={720}
                    height={405}
                    loading="lazy"
                  />
                </picture>
              </div>
            ))}
          </div>
        </Link>
      </div>
      <div className="prose md:col-span-3">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <h3 className="text-lg mt-0 mb-1">{title}</h3>
        </Link>
        <div className="text-gray-600 mb-4">{speaker}</div>
        <div className="text-sm">{children}</div>
        <div className="mt-6 gap-1 text-sm">
          <Link href={link} target="_blank" rel="noopener noreferrer">
            See slides ...
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Presentation

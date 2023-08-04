"use client"

import { useEffect, useRef } from "react"
import { throttle } from "lodash"

interface Top {
  slug: string
  top: number
}

interface ScrollObserverProps {
  children: React.ReactNode
  onChangeSlug?: (slug: string) => void
}

const ScrollObserver = ({ children, onChangeSlug }: ScrollObserverProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let sections = ref.current!.querySelectorAll("section")
    let tops: Top[] = []
    let currentSlug: string | undefined = undefined

    let style = window.getComputedStyle(document.documentElement)
    let smt = parseInt(style.getPropertyValue("scroll-padding-top"))

    function onResize() {
      sections.forEach(s => {
        let slug = s.dataset.slug
        if (slug !== undefined) {
          tops.push({
            slug,
            top: s.getBoundingClientRect().top + window.scrollY,
          })
        }
      })
      tops.sort((a, b) => a.top - b.top)
      if (tops.length > 0) {
        tops[0].top = 0
      }
      tops = tops
    }

    let throttledOnResize = throttle(onResize, 100)
    let resizeObserver = new window.ResizeObserver(throttledOnResize)
    resizeObserver.observe(document.body)

    function onScroll() {
      let current: string | undefined = undefined
      for (let i = 0; i < tops.length; i++) {
        if (tops[i].top > window.scrollY + smt + 5) {
          break
        }
        current = tops[i].slug
      }
      if (current !== undefined && current !== currentSlug) {
        currentSlug = current
        onChangeSlug?.(current)
      }
    }

    let throttledOnScroll = throttle(onScroll, 100)
    window.addEventListener("scroll", throttledOnScroll, { passive: true })

    onResize()
    onScroll()

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("scroll", throttledOnScroll)
    }
  }, [onChangeSlug])

  return <div ref={ref}>{children}</div>
}

export default ScrollObserver

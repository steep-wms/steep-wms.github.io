import getScrollTop from "./lib/get-scroll-top"
import AutoScrollingContext from "./lib/AutoScrollingContext"
import NavBarContext from "./lib/NavBarContext"
import { useContext } from "react"

function scrollTop(top) {
  if (typeof window !== "undefined") {
    document.body.scrollTop = document.documentElement.scrollTop = top
  }
}

export default (props) => {
  const setAutoScrolling = useContext(AutoScrollingContext.Dispatch)
  const navBarState = useContext(NavBarContext.State)

  // smooth scroll
  const scrollTo = (endOffset, duration, id) => {
    setAutoScrolling(true)

    if (!requestAnimationFrame) {
      scrollTop(endOffset)
    }

    let startOffset = getScrollTop()
    if (startOffset === endOffset) {
      window.location.hash = id
      setAutoScrolling(false)
      return
    }

    let distance = endOffset - startOffset
    let start = undefined

    let step = timestamp => {
      if (!start) {
        start = timestamp

        // Setting the hash will trigger a scroll event. We should set it only
        // after we set autoscrolling to true to prevent the navbar from unpinning.
        window.location.hash = id
      }

      let elapsed = timestamp - start
      let t = Math.min(1, elapsed / duration)
      let currentOffset = startOffset + distance * (t * (2 - t))
      scrollTop(currentOffset)

      if (t < 1) {
        requestAnimationFrame(step)
      } else {
        setAutoScrolling(false)
      }
    }

    requestAnimationFrame(step)
  }

  const handleClick = (e) => {
    let id = props.href
    if (id.startsWith("/")) {
      id = id.substring(1)
    }
    if (id.startsWith("#")) {
      id = id.substring(1)
    }
    let target = document.getElementById(id)
    if (target) {
      e.preventDefault()
      // leave room for navbar
      let room = Math.max(15, navBarState.pinned ? navBarState.height : 0)

      let padding = Number.parseInt(window.getComputedStyle(target).paddingTop)
      let offset = target.offsetTop + padding - room
      scrollTo(offset, 500, id)
    }
  }

  return <a {...props} onClick={handleClick}></a>
}

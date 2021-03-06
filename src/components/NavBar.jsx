import classNames from "classnames"
import styles from "./NavBar.scss"
import Link from "next/link"
import ScrollLink from "./ScrollLink"
import { GitHub } from "react-feather"
import getScrollTop from "./lib/get-scroll-top"
import AutoScrollingContext from "./lib/AutoScrollingContext"
import NavBarContext from "./lib/NavBarContext"
import { useContext, useEffect, useRef, useState } from "react"

const NavBar = () => {
  const [top, setTop] = useState(true)
  const [leaving, setLeaving] = useState(false)
  const [pinned, setPinned] = useState(false)
  const [collapse, setCollapse] = useState(false)

  const lastThresholdTimestamp = useRef(0)
  const thresholdReached = useRef(0)
  const currentScrollTop = useRef(-1)
  const ref = useRef()

  const autoScrolling = useContext(AutoScrollingContext.State)
  const setNavBarState = useContext(NavBarContext.Dispatch)

  useEffect(() => {
    function onScroll() {
      let newScrollTop = getScrollTop()
      if (currentScrollTop.current === -1) {
        currentScrollTop.current = newScrollTop
      }

      if (autoScrolling) {
        // do not change 'pinned' state of navbar while we are auto-scrolling
        currentScrollTop.current = newScrollTop

        // but toggle 'collapse' state
        if (collapse) {
          setCollapse(false)
        }
        return
      }

      let height = ref.current.clientHeight
      let py = -ref.current.offsetTop

      // If we are 'pinned' and scroll up until we reach the initial position
      // of the navbar, switch from 'pinned' to 'top'. Otherwise, switch from
      // 'top' to 'not-top' when the navbar leaves the screen.
      let isTop = pinned ? newScrollTop <= py : newScrollTop <= height

      if (pinned && isTop) {
        setPinned(false)
        setNavBarState({ pinned: false })
      }

      if (!isTop && top && !leaving) {
        // add .leaving class so there won't be a transition to translateY(-100%)
        setLeaving(true)
        setCollapse(false)
      } else {
        setTop(isTop)
        setLeaving(false)
      }

      if (!isTop) {
        // switch between 'pinned' states only if we're not 'top'
        let diff = newScrollTop - currentScrollTop.current

        let down = pinned && diff > 2
        let up = !pinned && diff < -2
        if (down || up) {
          // require that we are at least two times over threshold so we can
          // ignore quick state changes by browser (e.g. on page refresh)
          thresholdReached.current++
          let timestamp = +new Date()
          if (timestamp - lastThresholdTimestamp.current > 50) {
            thresholdReached.current = 0
          }
          if (thresholdReached.current > 1) {
            if (down) {
              setPinned(false)
              setNavBarState({ pinned: false })
              setCollapse(false)
            } else {
              setPinned(true)
              setNavBarState({ pinned: true })
              thresholdReached.current = 0
            }
            thresholdReached.current = 0
          }
          lastThresholdTimestamp.current = timestamp
        }
      }

      currentScrollTop.current = newScrollTop
    }

    window.addEventListener("scroll", onScroll, { passive: true })

    let height = ref.current.clientHeight
    setNavBarState({ height })

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [top, leaving, pinned, collapse, autoScrolling, setNavBarState])

  return (
    <nav className={classNames("navbar", { top, leaving, pinned, collapse })}
        id="main-navbar" ref={ref}>
      <div className="container">
        <div className="head">
          <Link href="/">
            <a className="navbar-brand">
              <img src="/images/steep-logo.svg" width="200" />
            </a>
          </Link>
          <div className="button" onClick={() => setCollapse(!collapse)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ScrollLink className="nav-item" href="/#key-features">Features</ScrollLink>
        <ScrollLink className="nav-item" href="/#download-and-get-started">Download</ScrollLink>
        <ScrollLink className="nav-item" href="/#documentation">Docs</ScrollLink>
        <ScrollLink className="nav-item" href="/#about">About</ScrollLink>
        <a className="nav-item" href="https://github.com/steep-wms/steep">
          <GitHub className="feather" />
        </a>
      </div>
      <style jsx>{styles}</style>
    </nav>
  )
}

export default NavBar

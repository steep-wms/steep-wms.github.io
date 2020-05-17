import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock"
import classNames from "classnames"
import getScrollTop from "./lib/get-scroll-top"
import { Children, cloneElement, useCallback, useEffect, useRef, useState } from "react"
import { List, X } from "react-feather"
import throttle from "lodash.throttle"
import "./Sidebar.scss"

export default ({ children }) => {
  const ref = useRef()
  const tocRef = useRef()
  const autoHideTimer = useRef(null)
  const [ collapse, setCollapse ] = useState(false)
  const [ visible, setVisible ] = useState(false)

  const cancelAutoHideTimer = useCallback(() => {
    if (autoHideTimer.current) {
      clearTimeout(autoHideTimer.current)
      autoHideTimer.current = null
    }
  }, [])

  const startAutoHideTimer = useCallback(() => {
    cancelAutoHideTimer()
    autoHideTimer.current = setTimeout(() => {
      setCollapse(false)
      autoHideTimer.current = null
    }, 500)
  }, [cancelAutoHideTimer])

  const onToggle = () => {
    if (collapse) {
      enableBodyScroll(tocRef.current)
    } else {
      disableBodyScroll(tocRef.current)
    }
    cancelAutoHideTimer()
    setCollapse(!collapse)
  }

  const onChildClick = () => {
    enableBodyScroll(tocRef.current)
    cancelAutoHideTimer()
    setCollapse(false)
  }

  useEffect(() => {
    function onMouseEnter() {
      cancelAutoHideTimer()
      disableBodyScroll(tocRef.current)
    }

    function onMouseLeave() {
      enableBodyScroll(tocRef.current)
      startAutoHideTimer()
    }

    const onScroll = throttle(() => {
      let docsSection = document.querySelector("section.docs")
      if (docsSection) {
        let scrollTop = getScrollTop()
        let scrollBottom = scrollTop + window.innerHeight
        let docsTop = docsSection.offsetTop
        let docsBottom = docsTop + docsSection.offsetHeight
        let visible = scrollBottom >= (docsTop + 100) && scrollTop <= docsBottom
        setVisible(visible)
      }
    }, 100)

    let rc = ref.current
    rc.addEventListener("mouseenter", onMouseEnter)
    rc.addEventListener("mouseleave", onMouseLeave)
    window.addEventListener("scroll", onScroll, { passive: true })

    // trigger onScroll once so the button appears
    onScroll()

    return () => {
      rc.removeEventListener("mouseenter", onMouseEnter)
      rc.removeEventListener("mouseleave", onMouseLeave)
      window.removeEventListener("scroll", onScroll)
      clearAllBodyScrollLocks()
    }
  }, [startAutoHideTimer, cancelAutoHideTimer])

  const newChildren = Children.map(children, c => {
    return cloneElement(c, {
      onClick: onChildClick
    })
  })

  return (
    <div className={classNames("sidebar", { "visible": visible })} ref={ref}>
      <div className={classNames("table-of-contents", { "collapse": collapse })} ref={tocRef}>
        {newChildren}
      </div>
      <div className="sidebar-button" onClick={onToggle}>
        <div className="sidebar-button-icons">
          <List className={classNames("feather", { "collapse": collapse })}/>
          <X className={classNames("feather", "feather-x", { "collapse": collapse })}/>
        </div>
      </div>
    </div>
  )
}

"use client"

import Link from "next/link"
import QuickSearch from "./QuickSearch"
import { useEffect, useState } from "react"
import { throttle } from "lodash"
import clsx from "clsx"

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 text-xl text-black text-opacity-90 dark:text-white"
    >
      <img src="/images/steep-logo.svg" className="h-8" alt="Logo" />
    </Link>
  )
}

const NavBar = () => {
  const [onTop, setOnTop] = useState(true)

  useEffect(() => {
    function onScroll() {
      setOnTop(window.scrollY < 5)
    }

    onScroll()

    const throttledOnScroll = throttle(onScroll, 100)

    window.addEventListener("scroll", throttledOnScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", throttledOnScroll)
    }
  }, [])

  return (
    <div
      className={clsx(
        "fixed top-0 flex h-14 w-full items-center justify-center border-b border-gray-200 bg-bg bg-opacity-80 backdrop-blur-sm transition-colors",
        onTop ? "border-opacity-0" : "border-opacity-100",
      )}
    >
      <div className="flex max-w-screen-2xl flex-1 items-center justify-between gap-8 px-2">
        <div className="mb-1">
          <Logo />
        </div>
        <div className="mt-1 text-gray-600">
          <ul className="flex gap-6 text-sm">
            <li>Showcases</li>
            <li>Docs</li>
            <li>About</li>
          </ul>
        </div>
        <div className="flex-1"></div>
        <div>
          <QuickSearch />
        </div>
      </div>
    </div>
  )
}

export default NavBar

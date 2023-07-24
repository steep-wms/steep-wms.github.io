"use client"

import Link from "next/link"
import QuickSearch from "./QuickSearch"
import { Spin as Hamburger } from "hamburger-react"
import { useEffect, useRef, useState } from "react"
import { throttle } from "lodash"
import clsx from "clsx"
import { Disclosure, Transition } from "@headlessui/react"
import ScrollLock from "./ScrollLock"

interface ResizeObserverProps {
  onResize: () => void
}

const ResizeObserver = ({ onResize }: ResizeObserverProps) => {
  useEffect(() => {
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [onResize])
  return <></>
}

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
  const panelRef = useRef<HTMLDivElement>(null)

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

  const links = [
    {
      href: "/showcases/",
      label: "Showcases",
    },
    {
      href: "/docs/",
      label: "Docs",
    },
    {
      href: "/about/",
      label: "About",
    },
  ]

  return (
    <Disclosure
      as="nav"
      className="fixed left-0 right-0 top-0 z-50 flex flex-col"
    >
      {({ open, close }) => (
        <>
          <div
            className={clsx(
              "fixed top-0 flex h-14 w-full items-center justify-center border-b border-gray-200 transition-colors",
              !open ? "bg-bg bg-opacity-80 backdrop-blur-sm" : "bg-gray-100",
              open || onTop ? "border-opacity-0" : "border-opacity-100",
            )}
          >
            <div className="flex max-w-screen-2xl flex-1 items-center justify-between px-2">
              <div className="flex flex-1 items-center justify-between md:hidden">
                <div className="mb-1">
                  <Logo />
                </div>
                <Disclosure.Button className="inline-flex items-center justify-center text-gray-800">
                  <Hamburger toggled={open} />
                </Disclosure.Button>
              </div>
              <div className="hidden flex-1 items-center justify-between gap-8 md:flex">
                <div className="mb-1">
                  <Logo />
                </div>
                <div className="mt-1 flex gap-6 text-sm">
                  {links.map(l => (
                    <Link
                      key={l.label}
                      href={l.href}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
                <div className="flex-1"></div>
                <div>
                  <QuickSearch />
                </div>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            enter="transition duration-250 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-100 ease-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Disclosure.Panel
              className="mt-14 h-[calc(100vh-3rem)] overflow-scroll bg-gray-100 md:hidden"
              ref={panelRef}
            >
              <div className="flex flex-col divide-y divide-gray-500 px-2">
                {links.map(l => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className={clsx(
                      "text-gray-800 hover:text-gray-500",
                      "block px-2 py-3",
                    )}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>

          <ScrollLock locked={open} target={panelRef.current} />
          <ResizeObserver onResize={() => close()} />
        </>
      )}
    </Disclosure>
  )
}

export default NavBar

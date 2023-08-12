"use client"

import Link from "next/link"
import QuickSearch from "./search/QuickSearch"
import { Spin as Hamburger } from "hamburger-react"
import { useEffect, useRef, useState } from "react"
import { throttle } from "lodash"
import clsx from "clsx"
import * as Dialog from "@radix-ui/react-dialog"
import { Slot } from "@radix-ui/react-slot"
import SimpleIcon from "./SimpleIcon"
import { siGithub } from "simple-icons"
import DarkModeToggle from "./DarkModeToggle"
import { Tooltip } from "./Tooltip"
import { useTheme } from "./hooks/useTheme"
import { usePathname } from "next/navigation"
import { RemoveScroll } from "react-remove-scroll"

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

interface LogoProps {
  onClick?: () => void
}

const Logo = ({ onClick }: LogoProps) => {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 text-xl text-black text-opacity-90 dark:text-white"
      onClick={() => onClick?.()}
    >
      <img
        src={`${process.env.basePath}/images/steep-logo.svg`}
        className="h-10 w-fit dark:hidden"
        width={1706.4}
        height={532.9}
        alt="Logo"
      />
      <img
        src={`${process.env.basePath}/images/steep-logo-white.svg`}
        className="hidden h-10 w-fit dark:block"
        width={1706.4}
        height={532.9}
        alt="Logo"
      />
    </Link>
  )
}

interface NavBarProps {
  fixed?: boolean
}

const NavBar = ({ fixed = true }: NavBarProps) => {
  const lastScrollY = useRef(-1)
  const [belowThreshold, setBelowThreshold] = useState(true)
  const [needsTransition, setNeedsTransition] = useState(false)
  const [visible, setVisible] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [onTop, setOnTop] = useState(true)
  const { theme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    function onScroll() {
      let diff = window.scrollY - lastScrollY.current

      if (window.scrollY > 100) {
        if (diff <= -15) {
          lastScrollY.current = window.scrollY
          setVisible(true)
        } else if (diff >= 15) {
          lastScrollY.current = window.scrollY
          setVisible(false)
        }
        setBelowThreshold(false)
      } else if (window.scrollY > 80) {
        if (diff <= -15) {
          lastScrollY.current = window.scrollY
          setVisible(true)
        }
      } else if (window.scrollY === 0) {
        lastScrollY.current = window.scrollY
        setVisible(false)
        setBelowThreshold(true)
      }

      setOnTop(window.scrollY < 5)
    }

    if (lastScrollY.current === -1) {
      lastScrollY.current = window.scrollY
    }

    onScroll()

    const throttledOnScroll = throttle(onScroll, 100)

    window.addEventListener("scroll", throttledOnScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", throttledOnScroll)
    }
  }, [])

  useEffect(() => {
    // delay transition a little bit to prevent flickering
    setTimeout(() => {
      setNeedsTransition(!belowThreshold)
    }, 100)
  }, [belowThreshold])

  useEffect(() => {
    // close menu when navigating
    setCollapsed(false)
  }, [pathname])

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
    <>
      {/*
        The following div is necessary so that the browser scrolls to top
        after navigating to a new page. Explanation:

        * Next.js's InnerScrollAndFocusHandler handles scrolling after
          navigation (see https://github.com/vercel/next.js/blob/12e77cae30f61bd94182931b836ec46a1d79a888/packages/next/src/client/components/layout-router.tsx)
        * For this, it receives a ref to the element to scroll to
        * If the element is not `null`, it just scrolls to it
        * But if the element is `null`, it tries to find the first element on
          the page and scrolls to that instead:
          https://github.com/vercel/next.js/blob/12e77cae30f61bd94182931b836ec46a1d79a888/packages/next/src/client/components/layout-router.tsx#L191-L193
        * If the first element is our navbar and it is fixed, it is already
          in view and InnerScrollAndFocusHandler will do nothing!
          https://github.com/vercel/next.js/blob/12e77cae30f61bd94182931b836ec46a1d79a888/packages/next/src/client/components/layout-router.tsx#L231-L234
        * We therefore have to have an artifical element that always comes
          before the navbar in the DOM and that is always at the top of the
          page so InnerScrollAndFocusHandler can find it and correctly scroll
          to it.

        What would happen if we removed this element:
        * Whenever you click on a link that leads to a page with a fixed navbar,
          scrolling will not work correctly. Instead, the scroll position will
          stay the same as before the navigation.
      */}
      <div className="absolute top-0 h-0" id="__top-before-navbar"></div>
      <nav
        className={clsx("left-0 right-0 top-0 z-50 flex flex-col", {
          fixed,
          sticky: !fixed && !belowThreshold,
          relative: !fixed,
          "-translate-y-16": !belowThreshold && !fixed && !visible,
          "translate-y-0": collapsed || belowThreshold || (!fixed && visible),
          "transition-transform": needsTransition,
          "duration-200": needsTransition,
        })}
      >
        <div
          className={clsx(
            "top-0 flex h-16 w-full items-center justify-center border-b border-gray-200 transition-all",
            !collapsed ? "bg-bg bg-opacity-80 backdrop-blur-sm" : "bg-gray-100",
            collapsed || onTop || (!fixed && !visible)
              ? "border-opacity-0 backdrop-blur-none"
              : "border-opacity-100",
          )}
        >
          <div className="flex max-w-screen-2xl flex-1 items-center justify-between px-2">
            <div className="flex flex-1 items-center justify-between lg:hidden">
              <div className="mb-1">
                <Logo onClick={() => setCollapsed(false)} />
              </div>
              <div className="flex items-center gap-4">
                <QuickSearch onClick={() => setCollapsed(false)} />
                <button
                  id="navbar-toggle-menu-button"
                  className="inline-flex select-none items-center justify-center text-gray-800"
                  onClick={() => setCollapsed(!collapsed)}
                >
                  <Hamburger toggled={collapsed} />
                </button>
              </div>
            </div>
            <div className="hidden flex-1 items-center justify-between gap-8 lg:flex">
              <div className="mb-1">
                <Logo onClick={() => setCollapsed(false)} />
              </div>
              <div className="mt-1 flex gap-6">
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
              <div className="flex items-center gap-4">
                <QuickSearch />
                <Tooltip
                  content={theme === "dark" ? "Light mode" : "Dark mode"}
                >
                  <div className="flex">
                    <DarkModeToggle />
                  </div>
                </Tooltip>
                <Tooltip content="GitHub">
                  <Link
                    href="https://github.com/steep-wms/steep"
                    className="group"
                  >
                    <SimpleIcon
                      icon={siGithub}
                      className="fill-gray-600 transition-colors group-hover:fill-gray-800"
                      title=""
                    />
                  </Link>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>

        <Dialog.Root open={collapsed} onOpenChange={setCollapsed} modal={false}>
          <Dialog.Portal>
            <RemoveScroll as={Slot}>
              <Dialog.Content
                className="fixed top-16 z-50 h-[calc(100vh-4rem)] w-screen overflow-scroll bg-gray-100 lg:hidden [&[data-state='closed']]:animate-fade-out [&[data-state='open']]:animate-fade-in"
                onInteractOutside={e => e.preventDefault()}
                onCloseAutoFocus={e => e.preventDefault()}
                onPointerDownOutside={e => e.preventDefault()}
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
                      onClick={() => setCollapsed(false)}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-8 flex items-center justify-end gap-4 px-4">
                  <DarkModeToggle />
                  <Link
                    href="https://github.com/steep-wms/steep"
                    className="group"
                  >
                    <SimpleIcon
                      icon={siGithub}
                      className="fill-gray-600 transition-colors group-hover:fill-gray-800"
                    />
                  </Link>
                </div>
                <ResizeObserver onResize={() => setCollapsed(false)} />
              </Dialog.Content>
            </RemoveScroll>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </>
  )
}

export default NavBar

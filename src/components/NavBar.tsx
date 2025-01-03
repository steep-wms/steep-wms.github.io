"use client"

import DarkModeToggle from "./DarkModeToggle"
import EscapeKeyObserver from "./EscapeKeyObserver"
import ResizeObserver from "./ResizeObserver"
import ScrollTopWorkaround from "./ScrollTopWorkaround"
import SimpleIcon from "./SimpleIcon"
import { Tooltip } from "./Tooltip"
import { useTheme } from "./hooks/useTheme"
import QuickSearch from "./search/QuickSearch"
import clsx from "clsx"
import { Spin as Hamburger } from "hamburger-react"
import { throttle } from "lodash"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Dialog, Modal, ModalOverlay } from "react-aria-components"
import { siGithub } from "simple-icons"

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
        src={`${process.env.__NEXT_ROUTER_BASEPATH}/images/steep-logo.svg`}
        className="h-10 w-fit dark:hidden"
        width={1706.4}
        height={532.9}
        alt="Logo"
      />
      <img
        src={`${process.env.__NEXT_ROUTER_BASEPATH}/images/steep-logo-white.svg`}
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
      href: "/showcase/",
      label: "Showcase",
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
      <ScrollTopWorkaround />
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
          <div className="flex max-w-screen-2xl flex-1 items-center justify-between px-2 sm:px-4 lg:px-6">
            <div className="flex flex-1 items-center justify-between lg:gap-8">
              <div className="mb-1">
                <Logo onClick={() => setCollapsed(false)} />
              </div>
              <div className="mt-1 hidden gap-6 lg:flex">
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
              <div className="hidden flex-1 lg:flex"></div>
              <div className="flex items-center gap-4">
                <div className="lg:border-r lg:border-gray-200 lg:pr-4">
                  <QuickSearch onClick={() => setCollapsed(false)} />
                </div>
                <div className="hidden lg:contents">
                  <Tooltip
                    content={theme === "dark" ? "Light mode" : "Dark mode"}
                  >
                    <div className="flex">
                      <DarkModeToggle id="dark-mode-toggle1" />
                    </div>
                  </Tooltip>
                  <Tooltip content="GitHub">
                    <Link
                      href="https://github.com/steep-wms/steep"
                      className="group"
                      aria-label="GitHub"
                    >
                      <SimpleIcon
                        icon={siGithub}
                        className="fill-gray-600 transition-colors group-hover:fill-gray-800"
                        title=""
                      />
                    </Link>
                  </Tooltip>
                </div>
                <button
                  id="navbar-toggle-menu-button"
                  className="inline-flex select-none items-center justify-center text-gray-800 lg:hidden"
                  onClick={() => setCollapsed(!collapsed)}
                  aria-label={collapsed ? "Close menu" : "Open menu"}
                >
                  <Hamburger
                    toggled={collapsed}
                    label={collapsed ? "Close menu" : "Open menu"}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <ModalOverlay isOpen={collapsed} isKeyboardDismissDisabled={true}>
          <Modal className="fixed bottom-0 left-0 right-0 top-14 z-[150] overflow-scroll bg-gray-100 data-[entering]:animate-fade-in data-[exiting]:animate-fade-out xl:hidden">
            <Dialog
              aria-label="Main menu"
              className="flex flex-col overflow-hidden outline-none"
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
                <DarkModeToggle id="dark-mode-toggle2" />
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
              <EscapeKeyObserver onEscape={() => setCollapsed(false)} />
              <ResizeObserver onResize={() => setCollapsed(false)} />
            </Dialog>
          </Modal>
        </ModalOverlay>
      </nav>
    </>
  )
}

export default NavBar

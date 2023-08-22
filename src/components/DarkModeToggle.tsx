import { type Theme, useTheme } from "./hooks/useTheme"
import { useCallback, useEffect } from "react"

// The icon animation is based on the following component:
// https://github.com/argyleink/gui-challenges/tree/main/theme-switch
// Released by Adam Argyle under the Apache 2 license

interface DarkModeToggleProps {
  id: string
}

const DarkModeToggle = ({ id }: DarkModeToggleProps) => {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    let q = window.matchMedia("(prefers-color-scheme: dark)")

    if (localStorage.theme !== undefined) {
      setTheme(localStorage.theme)
    } else {
      setTheme(q.matches ? "dark" : "light")
    }

    q.addEventListener("change", e => {
      setTheme(e.matches ? "dark" : "light")
    })

    function onStorage(e: StorageEvent) {
      if (e.key !== "theme") {
        return
      }
      if (e.newValue === null) {
        let q2 = window.matchMedia("(prefers-color-scheme: dark)")
        setTheme(q2.matches ? "dark" : "light")
      } else {
        setTheme(e.newValue as Theme)
      }
    }

    // sync theme between tabs
    window.addEventListener("storage", onStorage)

    return () => {
      window.removeEventListener("storage", onStorage)
    }
  }, [setTheme])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const onToggle = useCallback(() => {
    if (theme === "dark") {
      localStorage.theme = "light"
      setTheme("light")
    } else {
      localStorage.theme = "dark"
      setTheme("dark")
    }
  }, [theme, setTheme])

  return (
    <button
      aria-label={
        theme === "dark" ? "Activate light mode" : "Activate dark mode"
      }
      aria-live="polite"
      onClick={() => onToggle()}
      className="aspect-square cursor-pointer touch-manipulation rounded-full text-gray-600 outline-offset-[5px] transition-colors hover:text-gray-800"
      style={{
        inlineSize: "1.1rem",
        blockSize: "1.1rem",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{
          strokeWidth: "2px",
          inlineSize: "100%",
          blockSize: "100%",
          strokeLinecap: "round",
        }}
      >
        {/* Moon */}
        <mask className="moon origin-center" id={`moon-mask-${id}`}>
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle
            cx={theme === "dark" ? "15" : "24"}
            cy="9"
            r="5"
            fill="black"
            className="transition-[cx] duration-500 ease-[cubic-bezier(0.5,0.75,0.75,1.25)]"
          />
        </mask>
        {/* Sun */}
        <circle
          className="origin-center transition-transform duration-500 ease-[cubic-bezier(0.5,1.25,0.75,1.25)] dark:scale-[1.75] dark:duration-[250ms] dark:ease-[cubic-bezier(0.25,0,0.3,1)]"
          cx="12"
          cy="12"
          r="6"
          mask={`url(#moon-mask-${id})`}
          fill="currentColor"
        />
        {/* Sun beams */}
        <g
          className="origin-center [transition:transform_0.5s_cubic-bezier(0.5,1.5,0.75,1.25),opacity_0.5s_cubic-bezier(0.25,0,0.3,1)] dark:opacity-0 dark:duration-150 dark:[transform:rotateZ(-25deg)]"
          stroke="currentColor"
        >
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  )
}

export default DarkModeToggle

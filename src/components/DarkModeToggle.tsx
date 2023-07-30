import { useCallback, useEffect, useId } from "react"
import { useTheme, type Theme } from "./hooks/useTheme"

// The icon animation is based on the following component:
// https://github.com/argyleink/gui-challenges/tree/main/theme-switch
// Released by Adam Argyle under the Apache 2 license

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme()
  const id = useId()

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
      aria-label="auto"
      aria-live="polite"
      onClick={() => onToggle()}
      className="text-gray-600 transition-colors hover:text-gray-800"
    >
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
        {/* Moon */}
        <mask className="moon origin-center" id={`moon-mask-${id}`}>
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle
            cx={theme === "dark" ? "15" : "24"}
            cy="9"
            r="5"
            fill="black"
          />
        </mask>
        {/* Sun */}
        <circle
          className="sun origin-center duration-500 dark:scale-[1.75]"
          cx="12"
          cy="12"
          r="6"
          mask={`url(#moon-mask-${id})`}
          fill="currentColor"
        />
        {/* Sun beams */}
        <g
          className="sun-beams origin-center dark:opacity-0"
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
      <style jsx>{`
        button {
          inline-size: 1.1rem;
          block-size: 1.1rem;
          aspect-ratio: 1;
          border-radius: 50%;

          cursor: pointer;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
          outline-offset: 5px;
        }

        svg {
          stroke-width: 2px;
          inline-size: 100%;
          block-size: 100%;
          stroke-linecap: round;
        }

        .sun {
          transition: transform 500ms cubic-bezier(0.5, 1.25, 0.75, 1.25);
        }

        .sun-beams {
          transition: transform 0.5s cubic-bezier(0.5, 1.5, 0.75, 1.25),
            opacity 0.5s cubic-bezier(0.25, 0, 0.3, 1);
        }

        :global(.dark) .sun {
          transform: scale(1.75);
          transition-timing-function: cubic-bezier(0.25, 0, 0.3, 1);
          transition-duration: 0.25s;
        }

        :global(.dark) .sun-beams {
          transform: rotateZ(-25deg);
          transition-duration: 0.15s;
        }

        .moon circle {
          transition: cx 0.5s cubic-bezier(0.5, 0.75, 0.75, 1.25);
        }
      `}</style>
    </button>
  )
}

export default DarkModeToggle

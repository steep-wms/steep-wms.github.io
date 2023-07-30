"use client"

import "./themes.css"
import "./main.css"
import "./code.css"
import { Roboto } from "next/font/google"
import localFont from "next/font/local"
import * as Tooltip from "@radix-ui/react-tooltip"

const roboto = Roboto({
  weight: ["300", "400", "900"],
  // might remove italic if necessary (i.e. if page size becomes too large),
  // browser-generated italic looks OK too
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap", // force "swap" even in production mode
  variable: "--font-roboto",
})

const dejaVuFont = localFont({
  src: "../node_modules/@fontsource/dejavu-mono/files/dejavu-mono-latin-400-normal.woff2",
  display: "swap",
  variable: "--font-dejavu",
  preload: false,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${dejaVuFont.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                  document.documentElement.classList.add("dark")
                } else {
                  document.documentElement.classList.remove("dark")
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body>
        <Tooltip.Provider>{children}</Tooltip.Provider>
      </body>
    </html>
  )
}

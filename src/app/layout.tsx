import "./themes.css"
import "./main.css"
import "./code.css"
import { Roboto } from "next/font/google"
import localFont from "next/font/local"

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
      <body>{children}</body>
    </html>
  )
}

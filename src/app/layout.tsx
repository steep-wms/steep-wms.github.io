import "./themes.css"
import "./main.css"
import { Roboto, Roboto_Condensed } from "next/font/google"

const roboto = Roboto({
  weight: ["300", "400", "900"],
  // might remove italic if necessary (i.e. if page size becomes too large),
  // browser-generated italic looks OK too
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap", // force "swap" even in production mode
  variable: "--font-roboto",
})

const robotoCondensed = Roboto_Condensed({
  weight: ["300"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap", // force "swap" even in production mode
  variable: "--font-roboto-condensed",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoCondensed.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}

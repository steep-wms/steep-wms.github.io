import "./themes.css"
import "./main.css"
import "./code.css"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ["300", "400", "900"],
  // might remove italic if necessary (i.e. if page size becomes too large),
  // browser-generated italic looks OK too
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap", // force "swap" even in production mode
  variable: "--font-roboto",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>{children}</body>
    </html>
  )
}

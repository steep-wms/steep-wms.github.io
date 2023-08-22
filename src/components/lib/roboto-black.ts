import { Roboto } from "next/font/google"

export const robotoBlack = Roboto({
  weight: ["900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap", // force "swap" even in production mode
  variable: "--font-roboto-black",
})

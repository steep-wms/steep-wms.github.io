import { Roboto } from "next/font/google"

export const robotoBold = Roboto({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap", // force "swap" even in production mode
  variable: "--font-roboto-bold",
})

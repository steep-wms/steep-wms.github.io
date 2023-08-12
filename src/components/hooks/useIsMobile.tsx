import { UAParser } from "ua-parser-js"
import { useState, useEffect } from "react"
import { useUserAgent } from "./useUserAgent"

export function useIsMobile() {
  const userAgent = useUserAgent()
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    if (userAgent === undefined) {
      return
    }
    let parser = new UAParser(userAgent)
    let device = parser.getDevice()
    setIsMobile(device.type === "mobile" || device.type === "tablet")
  }, [userAgent])

  return isMobile
}

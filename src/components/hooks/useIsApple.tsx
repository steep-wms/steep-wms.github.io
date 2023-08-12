import { UAParser } from "ua-parser-js"
import { useState, useEffect } from "react"
import { useUserAgent } from "./useUserAgent"

export function useIsApple() {
  const userAgent = useUserAgent()
  const [isApple, setIsApple] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    if (userAgent === undefined) {
      return
    }
    let parser = new UAParser(userAgent)
    let os = parser.getOS()
    setIsApple(os.name === "iOS" || os.name === "macOS")
  }, [userAgent])

  return isApple
}

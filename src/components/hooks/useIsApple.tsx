"use client"

import { useState, useEffect } from "react"
import { useUserAgent } from "./useUserAgent"

export function useIsApple() {
  const userAgent = useUserAgent()
  const [isApple, setIsApple] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    if (userAgent === undefined) {
      return
    }
    setIsApple(/Mac|iPhone|iPad/i.test(userAgent))
  }, [userAgent])

  return isApple
}

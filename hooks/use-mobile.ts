"use client"

import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useMobile(): boolean {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const query = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
    const mql = window.matchMedia(query)

    const update = () => setIsMobile(mql.matches)
    update()

    // Cross-browser support for matchMedia change events
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", update)
      return () => mql.removeEventListener("change", update)
    } else if (typeof (mql as any).addListener === "function") {
      ;(mql as any).addListener(update)
      return () => (mql as any).removeListener(update)
    }
  }, [])

  return isMobile
}

// Provide default export as a convenience; named export is used by our components.
export default useMobile

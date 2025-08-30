"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export function AnimatedCursor() {
  const isMobile = useMobile()
  const [visible, setVisible] = useState(true)
  const [variant, setVariant] = useState<"default" | "hover" | "down">("default")

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  const isCoarse = typeof window !== "undefined" && window.matchMedia?.("(pointer: coarse)").matches

  const disabled = isMobile || isCoarse

  const springX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.4 })

  useEffect(() => {
    if (disabled) return

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }
    const leave = () => setVisible(false)
    const enter = () => setVisible(true)

    const down = () => setVariant("down")
    const up = () => setVariant("default")

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseleave", leave)
    window.addEventListener("mouseenter", enter)
    window.addEventListener("mousedown", down)
    window.addEventListener("mouseup", up)

    const selectors = "a, button, [role='button'], [data-cursor]"
    const onHover = () => setVariant("hover")
    const onOut = () => setVariant("default")

    const bindHoverListeners = () => {
      document.querySelectorAll(selectors).forEach((el) => {
        el.addEventListener("mouseenter", onHover)
        el.addEventListener("mouseleave", onOut)
      })
    }
    const unbindHoverListeners = () => {
      document.querySelectorAll(selectors).forEach((el) => {
        el.removeEventListener("mouseenter", onHover)
        el.removeEventListener("mouseleave", onOut)
      })
    }
    bindHoverListeners()

    const observer = new MutationObserver(() => {
      unbindHoverListeners()
      bindHoverListeners()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseleave", leave)
      window.removeEventListener("mouseenter", enter)
      window.removeEventListener("mousedown", down)
      window.removeEventListener("mouseup", up)
      observer.disconnect()
      unbindHoverListeners()
    }
  }, [disabled, x, y])

  const ringSize = variant === "hover" ? 36 : variant === "down" ? 20 : 28
  const dotSize = variant === "down" ? 4 : 6
  const ringOpacity = visible && !disabled ? 0.55 : 0
  const dotOpacity = visible && !disabled ? 0.9 : 0

  const transition = prefersReduced ? { duration: 0 } : { type: "spring", stiffness: 250, damping: 25 }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[70] mix-blend-difference"
        style={{ translateX: springX, translateY: springY }}
      >
        <motion.div
          className="rounded-full border border-primary/90 bg-primary/20"
          animate={{ width: ringSize, height: ringSize, opacity: ringOpacity }}
          transition={transition}
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[70] mix-blend-difference"
        style={{ translateX: springX, translateY: springY }}
      >
        <motion.div
          className="rounded-full bg-primary"
          animate={{ width: dotSize, height: dotSize, opacity: dotOpacity }}
          transition={transition}
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </motion.div>
    </>
  )
}

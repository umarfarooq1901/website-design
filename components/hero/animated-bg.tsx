"use client"

import { motion, useReducedMotion } from "framer-motion"

export function AnimatedHeroBg() {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-transparent" />
  }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        animate={{ x: [0, 80, -40, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-secondary/20 blur-3xl"
        animate={{ x: [0, -60, 40, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-2xl"
        animate={{ scale: [1, 1.12, 0.96, 1] }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
      />
    </div>
  )
}

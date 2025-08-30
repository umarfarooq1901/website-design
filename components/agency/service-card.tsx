"use client"

import type React from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { type ReactNode, useCallback } from "react"

type ServiceCardProps = {
  icon: ReactNode
  title: string
  description: string
  bullets?: string[]
  className?: string
}

export function ServiceCard({ icon, title, description, bullets = [], className }: ServiceCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [8, -8])
  const rotateY = useTransform(x, [-50, 50], [-8, 8])
  const rX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const rY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  const onMouse = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
      const relX = e.clientX - rect.left - rect.width / 2
      const relY = e.clientY - rect.top - rect.height / 2
      x.set(Math.max(-50, Math.min(50, (relX / (rect.width / 2)) * 50)))
      y.set(Math.max(-50, Math.min(50, (relY / (rect.height / 2)) * 50)))
    },
    [x, y],
  )

  const reset = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return (
    <motion.div
      onMouseMove={onMouse}
      onMouseLeave={reset}
      style={{ rotateX: rX, rotateY: rY, transformStyle: "preserve-3d" }}
      className={cn(
        "group relative rounded-xl border border-border bg-card/60 p-5 shadow-sm transition-colors",
        "hover:border-primary/50 hover:shadow-[0_10px_40px_-10px_rgb(59_130_246/0.25)]",
        "focus-within:border-primary/60",
        className,
      )}
      aria-label={title}
    >
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"></div>
      <div className="flex items-start gap-4" style={{ transform: "translateZ(24px)" }}>
        <div
          className={cn(
            "size-10 shrink-0 rounded-md grid place-items-center",
            "bg-primary/10 text-primary ring-1 ring-inset ring-primary/20",
          )}
        >
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      {bullets.length > 0 && (
        <ul
          className="mt-4 grid gap-2 pl-14 text-sm text-muted-foreground/90"
          style={{ transform: "translateZ(12px)" }}
        >
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary/70" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(59,130,246,0.08), transparent 40%)",
        }}
        onMouseMove={(e) => {
          const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
          const mx = ((e.clientX - r.left) / r.width) * 100
          const my = ((e.clientY - r.top) / r.height) * 100
          ;(e.currentTarget as HTMLDivElement).style.setProperty("--mx", `${mx}%`)
          ;(e.currentTarget as HTMLDivElement).style.setProperty("--my", `${my}%`)
        }}
      />
    </motion.div>
  )
}

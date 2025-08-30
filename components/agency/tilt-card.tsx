"use client"

import type React from "react"

import { useRef } from "react"

type Props = {
  children: React.ReactNode
  className?: string
}

export default function TiltCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotX = (py - 0.5) * -8
    const rotY = (px - 0.5) * 8
    el.style.setProperty("--rotX", `${rotX}deg`)
    el.style.setProperty("--rotY", `${rotY}deg`)
  }
  function onMouseLeave() {
    const el = ref.current
    if (!el) return
    el.style.setProperty("--rotX", `0deg`)
    el.style.setProperty("--rotY", `0deg`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`[transform-style:preserve-3d] transition-transform duration-300 [transform:perspective(900px)_rotateX(var(--rotX,0))_rotateY(var(--rotY,0))] ${className}`}
    >
      {children}
    </div>
  )
}

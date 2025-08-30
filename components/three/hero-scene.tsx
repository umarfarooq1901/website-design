"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float } from "@react-three/drei"
import { useRef } from "react"
import type * as THREE from "three"

function Knot() {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.25
    ref.current.rotation.x += delta * 0.1
  })
  return (
    <Float floatIntensity={1} rotationIntensity={0.3}>
      <mesh ref={ref} castShadow receiveShadow>
        <torusKnotGeometry args={[1.1, 0.35, 180, 24]} />
        <meshStandardMaterial
          metalness={0.9}
          roughness={0.2}
          color="#3b82f6" // primary blue accent
        />
      </mesh>
    </Float>
  )
}

export function HeroScene3D() {
  return (
    <div className="w-full h-screen relative">
      <Canvas camera={{ position: [0, 0, 4] }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 6, 3]} intensity={1.2} castShadow />
        <Knot />
        <Environment preset="studio" />
      </Canvas>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-auto max-w-xl px-6 text-center">
          <h1 className="text-pretty text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            We craft apps, websites, and brands with motion-first design
          </h1>
          <p className="mt-4 text-sm md:text-base text-muted-foreground">
            Product engineering, UI/UX and graphic design, WordPress and web apps — built with performance,
            accessibility, and creativity in mind.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="/services"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:translate-y-[-2px]"
            >
              View Services
            </a>
            <a
              href="/contact"
              className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-transform hover:translate-y-[-2px]"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

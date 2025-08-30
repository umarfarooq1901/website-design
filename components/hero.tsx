"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-pretty text-4xl font-semibold tracking-tight md:text-5xl"
            >
              Build bold digital experiences that convert.
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-zinc-300"
            >
              Apps, websites, web apps, UI/UX, graphic design, and WordPress—crafted with performance, accessibility,
              and motion.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 flex items-center gap-3"
            >
              <Button asChild className="bg-blue-500 hover:bg-blue-600">
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button asChild variant="secondary" className="border-zinc-800 bg-zinc-900 hover:bg-zinc-800">
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-zinc-400">
              <div>Performance-first</div>
              <div>Motion design</div>
              <div>WCAG AA contrast</div>
            </div>
          </div>
          <motion.div
            className="relative aspect-[4/3] rounded-xl border border-zinc-800/70 bg-zinc-950"
            initial={{ rotateX: 8, rotateY: -8, opacity: 0 }}
            animate={{ rotateX: 0, rotateY: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
          >
            <div className="absolute inset-0 rounded-xl bg-[radial-gradient(60%_80%_at_50%_0%,rgba(59,130,246,0.25),transparent)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.02, rotate: 0.2 }}
                className="rounded-lg border border-blue-500/30 bg-zinc-950/60 p-6 text-center shadow-[0_0_40px_-12px_rgba(59,130,246,0.35)]"
              >
                <div className="text-sm text-blue-300">Case Preview</div>
                <div className="mt-2 text-lg font-medium">Animated SaaS Landing</div>
                <div className="mt-4 h-24 w-64 rounded bg-zinc-900" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

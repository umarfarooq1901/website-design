"use client"

import { motion, useReducedMotion } from "framer-motion"

export default function AnimatedHero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden">
      {/* Animated background blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {!prefersReducedMotion && (
          <>
            <motion.div
              className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl"
              animate={{ x: [0, 80, -40, 0], y: [0, -40, 30, 0] }}
              transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
              animate={{ x: [0, -60, 40, 0], y: [0, 30, -30, 0] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-2xl"
              animate={{ scale: [1, 1.15, 0.95, 1] }}
              transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
            />
          </>
        )}
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-pretty text-3xl font-semibold md:text-5xl">
            Crafting high-impact <span className="text-teal-400">websites, web apps</span> and{" "}
            <span className="text-teal-300">brand experiences</span>
          </h1>
          <p className="mt-4 text-muted-foreground md:text-lg leading-relaxed">
            We’re Izband — a full-stack studio for applications, websites, UI/UX & graphic design, and WordPress builds.
            Motion-first, accessible, and performance-minded.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-teal-400 active:scale-[0.98]"
            >
              Start a project
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground/90 transition hover:bg-white/10"
            >
              Explore services
            </a>
          </div>
        </motion.div>

        {/* Animated illustration */}
        <div className="mt-12 md:mt-16">
          <AnimatedIllustration />
        </div>
      </div>
    </section>
  )
}

function AnimatedIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3"
    >
      {[
        { title: "Applications", desc: "Full-stack apps with robust UX", color: "from-teal-500/15 to-cyan-500/10" },
        { title: "Websites", desc: "Lightning-fast, SEO-friendly sites", color: "from-cyan-500/15 to-emerald-500/10" },
        {
          title: "UI/UX & Branding",
          desc: "Research, design systems, identity",
          color: "from-emerald-500/15 to-teal-500/10",
        },
      ].map((card, i) => (
        <motion.article
          key={card.title}
          whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5"
        >
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
          />
          <div className="relative">
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{card.desc}</p>
            <div className="mt-4 h-24 w-full rounded-lg bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(6,182,212,0.16),transparent_35%)] transition-all duration-500 group-hover:scale-[1.02]" />
          </div>
        </motion.article>
      ))}
    </motion.div>
  )
}

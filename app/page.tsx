import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/agency/services-section"
import { SectionReveal } from "@/components/motion/section-reveal"
import { AnimatedHeroBg } from "@/components/hero/animated-bg"
import { Tilt } from "@/components/motion/tilt"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* <ScrollProgress /> */}

        <SectionReveal>
          <section className="relative">
            <AnimatedHeroBg />
            <Hero />
          </section>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <ServicesSection />
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider text-primary/80">Our Process</p>
              <h2 className="text-balance text-2xl font-semibold md:text-3xl">From idea to launch</h2>
              <p className="mt-2 text-zinc-400 max-w-2xl">
                We collaborate closely to move fast without breaking craft—balancing design, engineering, and iteration.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Tilt>
                <div className="rounded-xl border border-zinc-800/70 bg-zinc-950 p-5 transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-12px_rgba(20,184,166,0.28)]">
                  <h3 className="text-lg font-semibold">1. Discover</h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Clarify goals, users, and constraints. Define success metrics and the smallest useful version.
                  </p>
                  <ul className="mt-3 grid gap-2 text-sm text-zinc-400/90">
                    <li>• Requirements & scope</li>
                    <li>• Information architecture</li>
                    <li>• Roadmap & milestones</li>
                  </ul>
                </div>
              </Tilt>
              <Tilt>
                <div className="rounded-xl border border-zinc-800/70 bg-zinc-950 p-5 transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-12px_rgba(20,184,166,0.28)]">
                  <h3 className="text-lg font-semibold">2. Design</h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Rapid iteration from wireframes to hi‑fi, ensuring accessibility, clarity, and delight.
                  </p>
                  <ul className="mt-3 grid gap-2 text-sm text-zinc-400/90">
                    <li>• Wireframes & prototypes</li>
                    <li>• Design system & tokens</li>
                    <li>• Usability validation</li>
                  </ul>
                </div>
              </Tilt>
              <Tilt>
                <div className="rounded-xl border border-zinc-800/70 bg-zinc-950 p-5 transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-12px_rgba(20,184,166,0.28)]">
                  <h3 className="text-lg font-semibold">3. Build & Launch</h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Ship production-ready code with performance, monitoring, and a plan for iteration.
                  </p>
                  <ul className="mt-3 grid gap-2 text-sm text-zinc-400/90">
                    <li>• Next.js App Router</li>
                    <li>• CI/CD on Vercel</li>
                    <li>• Analytics & A/B testing</li>
                  </ul>
                </div>
              </Tilt>
            </div>
          </section>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <section className="mx-auto max-w-6xl px-4 pb-16" data-cursor>
            <div className="rounded-xl border border-zinc-800/70 bg-zinc-950 p-6 md:p-8 transition-transform duration-300 will-change-transform hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(20,184,166,0.32)]">
              <h3 className="text-lg font-semibold">Why choose us?</h3>
              <p className="mt-2 text-zinc-300">
                We blend strategy, design, and engineering to ship experiences that are fast, accessible, and
                delightful—without unnecessary complexity.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-zinc-400 md:grid-cols-3">
                <li>• Clear communication</li>
                <li>• Performance budgets</li>
                <li>• Motion with purpose</li>
              </ul>
            </div>
          </section>
        </SectionReveal>
      </main>
      <SiteFooter />
    </>
  )
}

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServiceCards } from "@/components/service-cards"
import { SectionReveal } from "@/components/motion/section-reveal"
import { Tilt } from "@/components/motion/tilt"

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <SectionReveal>
          <section className="mx-auto max-w-6xl px-4 py-14">
            <h1 className="text-pretty text-3xl font-semibold md:text-4xl">Services</h1>
            <p className="mt-3 text-zinc-300">
              From zero to launch: strategy, design, and development tailored to your goals.
            </p>
          </section>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <ServiceCards />
        </SectionReveal>

        <SectionReveal className="mx-auto max-w-6xl px-4" delay={0.08}>
          <div className="rounded-xl border border-white/10 bg-background/40 p-6 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
            <h2 className="text-xl font-semibold">Capabilities</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Web Apps",
                "Marketing Sites",
                "UI/UX Design",
                "Brand & Graphics",
                "WordPress",
                "Design Systems",
                "E-commerce",
                "Animations",
                "SEO",
              ].map((cap) => (
                <span
                  key={cap}
                  className="rounded-md border border-border/40 bg-background/60 px-3 py-1 text-sm text-foreground/90"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="mx-auto max-w-6xl px-4 py-12" delay={0.12}>
          <h2 className="text-balance text-2xl font-semibold md:text-3xl">Packages</h2>
          <p className="mt-2 text-zinc-400 max-w-2xl">
            Predictable outcomes and timelines. Pick a package that fits your goals.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "from $3k",
                points: ["1–2 pages", "Brand polish", "Basic animations"],
              },
              {
                name: "Growth",
                price: "from $8k",
                points: ["5–8 pages/app screens", "Design system", "Advanced animations"],
              },
              {
                name: "Custom",
                price: "scope-based",
                points: ["Web app or site", "Integrations", "Analytics + A/B testing"],
              },
            ].map((pkg, idx) => (
              <Tilt key={pkg.name}>
                <div className="rounded-xl border border-zinc-800/70 bg-zinc-950 p-6 transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-12px_rgba(20,184,166,0.28)]">
                  <div className="text-xs uppercase tracking-wider text-primary/80">{pkg.name}</div>
                  <div className="mt-1 text-lg font-semibold">{pkg.price}</div>
                  <ul className="mt-3 grid gap-2 text-sm text-zinc-400">
                    {pkg.points.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <a
                      href="/contact"
                      className="inline-flex items-center rounded-md border border-white/10 bg-background/40 px-3 py-2 text-sm backdrop-blur-md transition-colors hover:bg-background/60"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="mx-auto max-w-6xl px-4 pb-16" delay={0.1}>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { k: "Performance", v: "Core Web Vitals focused" },
              { k: "Accessibility", v: "WCAG AA compliant" },
              { k: "SEO", v: "Semantic, structured data" },
            ].map((i) => (
              <div
                key={i.k}
                className="rounded-lg border border-border/40 bg-card/70 p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="text-sm text-primary">{i.k}</div>
                <div className="mt-1 font-medium">{i.v}</div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </main>
      <SiteFooter />
    </>
  )
}

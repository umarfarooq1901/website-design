import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SectionReveal } from "@/components/motion/section-reveal"

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-14">
        <SectionReveal>
          <h1 className="text-pretty text-3xl font-semibold md:text-4xl">Our approach</h1>
          <p className="mt-3 text-zinc-300">
            We’re a small, senior team focused on outcomes. We ship quickly, validate assumptions, and keep quality high
            with thoughtful motion and accessible design.
          </p>

          <div className="mt-8 space-y-6">
            {[
              { t: "Discovery", d: "We align on goals, audience, constraints, and success metrics." },
              { t: "Design", d: "Wireframes → prototypes → polished UI with systemized components." },
              { t: "Build", d: "Modern stacks, performance first, clean and testable code." },
              { t: "Launch & Grow", d: "Measure, iterate, and expand your product with confidence." },
            ].map((item) => (
              <div
                key={item.t}
                className="relative rounded-lg border border-border/40 bg-card/70 p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="text-sm text-primary">{item.t}</div>
                <div className="mt-1 font-medium">{item.d}</div>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="mt-12" delay={0.1}>
          <div className="rounded-xl border border-border/40 bg-card/70 p-6">
            <h2 className="text-xl font-semibold">Who we are</h2>
            <p className="mt-2 text-zinc-300">
              We’re designers and engineers who care about craft. We love shipping elegant, fast experiences that feel
              alive, with interactions that guide users without getting in the way.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal className="mt-12" delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { k: "50+ Projects", v: "Shipped to production" },
              { k: "95 Lighthouse", v: "Typical performance score" },
              { k: "100% Remote", v: "Global collaboration" },
            ].map((m) => (
              <div
                key={m.k}
                className="rounded-xl border border-white/10 bg-background/40 p-5 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
              >
                <div className="text-lg font-semibold">{m.k}</div>
                <div className="mt-1 text-sm text-zinc-300">{m.v}</div>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="mt-12" delay={0.15}>
          <div className="rounded-xl border border-white/10 bg-background/40 p-6 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
            <h3 className="text-lg font-semibold">Timeline</h3>
            <ol className="mt-4 grid gap-4">
              {[
                { t: "Kickoff", d: "Align on scope, risks, and success criteria." },
                { t: "Design Sprint", d: "Rapid prototyping, feedback loops, accessibility checks." },
                { t: "Build", d: "Incremental releases with observability and QA baked in." },
                { t: "Launch & Iterate", d: "Measure impact, refine, and plan next milestones." },
              ].map((step, i) => (
                <li
                  key={step.t}
                  className="relative rounded-lg border border-border/40 bg-card/70 p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="text-xs text-primary/80">{String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-1 font-medium">{step.t}</div>
                  <p className="mt-1 text-sm text-zinc-300">{step.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </SectionReveal>

        <SectionReveal className="mt-10" delay={0.2}>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { t: "Clarity", d: "Simple interfaces, clear language, transparent process." },
              { t: "Quality", d: "Accessible, performant, maintainable by design." },
              { t: "Velocity", d: "Short cycles, continuous validation, measurable impact." },
            ].map((v) => (
              <div
                key={v.t}
                className="rounded-lg border border-border/40 bg-card/70 p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="text-sm text-primary">{v.t}</div>
                <div className="mt-1 text-sm text-zinc-300">{v.d}</div>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="mt-10" delay={0.25}>
          <div className="rounded-xl border border-white/10 bg-background/40 p-6 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
            <h3 className="text-lg font-semibold">Tooling & Stack</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Next.js", "Tailwind", "Framer Motion", "Three.js", "Supabase", "Vercel"].map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border/40 bg-background/60 px-3 py-1 text-sm text-foreground/90"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>
      </main>
      <SiteFooter />
    </>
  )
}

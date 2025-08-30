import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { SectionReveal } from "@/components/motion/section-reveal"

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-14">
        <SectionReveal>
          <h1 className="text-pretty text-3xl font-semibold md:text-4xl">Let’s build something great</h1>
          <p className="mt-3 text-zinc-300">
            Share your goals and constraints—We’ll propose a timeline and approach within 24 hours.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </SectionReveal>

        <SectionReveal className="mt-8" delay={0.1}>
          <div className="rounded-lg border border-border/40 bg-card/70 p-5">
            <div className="text-sm text-primary">Response time</div>
            <div className="mt-1 text-sm text-zinc-300">Typically within 24 hours, Mon–Fri</div>
          </div>
        </SectionReveal>
      </main>
      <SiteFooter />
    </>
  )
}

"use client"

import { SectionReveal } from "@/components/motion/section-reveal"
import { ServiceCard } from "@/components/agency/service-card"
import { Palette, MonitorSmartphone, Layers, PenTool, Compass as WordPress, Rocket } from "lucide-react"

const services = [
  {
    title: "Web Applications",
    icon: <Layers size={18} />,
    description: "Scalable, secure, and fast web apps with modern stacks and best practices.",
    bullets: ["Next.js App Router", "APIs & integrations", "Auth & dashboards"],
  },
  {
    title: "Websites",
    icon: <MonitorSmartphone size={18} />,
    description: "High-performance, SEO-friendly marketing sites that convert.",
    bullets: ["Responsive design", "Shadcn UI system", "Accessibility first"],
  },
  {
    title: "UI/UX & Graphic Design",
    icon: <Palette size={18} />,
    description: "User-centered interfaces, brand systems, and production-ready assets.",
    bullets: ["Wireframes to hi-fi", "Design systems", "Logos & assets"],
  },
  {
    title: "WordPress Sites",
    icon: <WordPress size={18} />,
    description: "Flexible WordPress builds with modern performance and custom themes.",
    bullets: ["Custom themes", "Headless WP options", "SEO ready"],
  },
  {
    title: "Product Design",
    icon: <PenTool size={18} />,
    description: "From concept to polished experience with rapid iteration cycles.",
    bullets: ["Prototyping", "User testing", "Design tokens"],
  },
  {
    title: "Launch & Optimization",
    icon: <Rocket size={18} />,
    description: "Deploy, monitor, and iterate for speed, stability, and growth.",
    bullets: ["Vercel deploys", "Analytics & A/B", "Performance budgets"],
  },
]

export function ServicesSection() {
  return (
    <SectionReveal as="section" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-primary/80">Our Services</p>
          <h2 className="text-2xl font-semibold leading-tight md:text-3xl text-balance">
            We build applications, websites, and brands that perform
          </h2>
          <p className="mt-2 text-muted-foreground">
            Full-stack development and design—delivered with craft, speed, and reliability.
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} bullets={s.bullets} />
        ))}
      </div>
    </SectionReveal>
  )
}

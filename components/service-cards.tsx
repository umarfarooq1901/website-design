"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const services = [
  { title: "Application Development", desc: "Full-stack apps with modern tooling and best practices." },
  { title: "Websites", desc: "High-performing marketing sites that convert visitors." },
  { title: "Web Apps", desc: "Interactive, secure, and scalable web applications." },
  { title: "UI/UX Design", desc: "User-centered design, prototypes, and design systems." },
  { title: "Graphic Design", desc: "Brand identity, visual systems, and assets." },
  { title: "WordPress", desc: "Reliable content sites with custom blocks and themes." },
]

export function ServiceCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-balance text-2xl font-semibold md:text-3xl">What we do</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.04 }}
          >
            <Card className="group border-zinc-800/70 bg-zinc-950 transition-transform hover:-translate-y-1 hover:shadow-[0_0_40px_-12px_rgba(59,130,246,0.25)]">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{s.title}</span>
                  <span className="h-2 w-2 rounded-full bg-blue-500 opacity-70 transition-opacity group-hover:opacity-100" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-400">{s.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

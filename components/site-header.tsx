"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/40 backdrop-blur-md supports-[backdrop-filter]:bg-background/30 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Agency Home">
            <motion.span
              initial={{ rotate: -8, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="inline-block h-6 w-6 rounded-sm bg-primary"
            />
            <span className="font-semibold tracking-tight">Izband</span>
          </Link>
          <nav className="hidden gap-1 md:flex" aria-label="Main">
            {nav.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                    active ? "text-white" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2 -bottom-1 h-0.5 rounded bg-primary"
                    />
                  )}
                </Link>
              )
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

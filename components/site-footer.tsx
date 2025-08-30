import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800/70">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-2 font-semibold">NovaCraft Studio</div>
            <p className="text-sm text-zinc-400">
              We build high-performing websites, applications, and brand experiences.
            </p>
          </div>
          <div>
            <div className="mb-2 font-semibold">Company</div>
            <ul className="space-y-1 text-sm text-zinc-300">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-2 font-semibold">Contact</div>
            <ul className="space-y-1 text-sm text-zinc-300">
              <li>Email: hello@novacraft.studio</li>
              <li>Hours: Mon–Fri, 9am–6pm</li>
              <li>Worldwide Remote</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-800/70 pt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} NovaCraft Studio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

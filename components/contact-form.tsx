"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    // Simulate send
    await new Promise((r) => setTimeout(r, 900))
    setStatus("sent")
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ y: 16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="space-y-4 rounded-xl border border-zinc-800/70 bg-zinc-950 p-6"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm text-zinc-300">Name</label>
          <Input required placeholder="Your name" className="bg-zinc-900" />
        </div>
        <div>
          <label className="mb-1 block text-sm text-zinc-300">Email</label>
          <Input required type="email" placeholder="you@company.com" className="bg-zinc-900" />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm text-zinc-300">Project details</label>
        <Textarea required placeholder="Tell us about your project..." className="min-h-28 bg-zinc-900" />
      </div>
      <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600" disabled={status !== "idle"}>
        {status === "idle" && "Send message"}
        {status === "sending" && "Sending..."}
        {status === "sent" && "Sent! We’ll reply soon."}
      </Button>
      <p className="text-xs text-zinc-500">We reply within 1 business day. Your data stays private.</p>
    </motion.form>
  )
}

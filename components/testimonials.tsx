"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Oppora's smart signals helped us connect with the right decision-makers as soon as jobs were posted on LinkedIn, and it directly helped us close over $850,000 in salary-based deals in two months.",
    name: "Suresh Mani",
    role: "Sales Business Development",
    company: "BlueBix Solutions",
    initials: "SM",
  },
  {
    quote:
      "We were spending close to $200 a month on Instantly + Apollo stack, and Oppora gives us the same capability and outreach volume for just $34. Huge value for money.",
    name: "Ganesh Lakhani",
    role: "Operations Manager",
    company: "SoftStandard Solutions",
    initials: "GL",
  },
  {
    quote:
      "The AI reply agent works really well. It understands responses, sends product decks in the same thread from our inbox, and books meetings automatically. This alone has reduced a lot of manual follow-up.",
    name: "Jeevan Raju",
    role: "Solutions Specialist",
    company: "Petabytz Technologies Inc",
    initials: "JR",
  },
  {
    quote:
      "We've been using the workflow builder for a while now, and it automatically adds new prospects to our list every day and sends campaigns using the same settings.",
    name: "Venkata (Vic) Poosapati",
    role: "Director of Operations & Delivery",
    company: "BlueBix Solutions",
    initials: "VP",
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Join the List of People Selling the Smart Way
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.initials}
              className="glass-card group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">5.0</span>
              </div>

              <blockquote className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {`"${t.quote}"`}
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} | {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

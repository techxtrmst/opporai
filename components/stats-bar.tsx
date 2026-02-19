"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "500+", label: "Customers" },
  { value: "120M+", label: "Verified Emails" },
  { value: "8", label: "AI Agents" },
  { value: "$850K+", label: "Deals Closed" },
]

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="border-y border-border/50 bg-card/30 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center transition-all duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <p className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {stat.value}
              </span>
            </p>
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

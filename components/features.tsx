"use client"

import { useEffect, useRef, useState } from "react"
import {
  Workflow,
  Target,
  TrendingUp,
  Mail,
  Shield,
  Zap,
} from "lucide-react"

const features = [
  {
    icon: Workflow,
    title: "Automated Workflows",
    description:
      "Build complex sales processes with our drag-and-drop workflow builder. Set it once and let it run automatically.",
    stat: "8 AI Agents",
    statLabel: "working together",
  },
  {
    icon: Target,
    title: "AI-Powered Targeting",
    description:
      "Use advanced AI to identify and target your ideal customers with precision and accuracy.",
    stat: "120M+",
    statLabel: "verified contacts",
  },
  {
    icon: TrendingUp,
    title: "Scale Your Outreach",
    description:
      "Reach 500+ unique prospects every month with personalized, automated email campaigns.",
    stat: "500+",
    statLabel: "prospects/month",
  },
  {
    icon: Mail,
    title: "Personalize Every Email",
    description:
      "Every line is uniquely generated with AI. No spintext, no copy fatigue, no spam patterns.",
    stat: "1:1",
    statLabel: "personalization",
  },
  {
    icon: Shield,
    title: "Domain Warmup",
    description:
      "Auto-warm new domains and rotate up to 50 inboxes so you scale outreach safely.",
    stat: "50",
    statLabel: "mailbox rotation",
  },
  {
    icon: Zap,
    title: "Auto-Reply & Book",
    description:
      "AI answers questions, sends attachments, qualifies interest, and books meetings instantly.",
    stat: "24/7",
    statLabel: "autonomous replies",
  },
]

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const Icon = feature.icon

  return (
    <div
      ref={ref}
      className={`glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 ${
        visible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Top glow line */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <div className="text-right">
          <p className="font-display text-2xl font-bold text-foreground">
            {feature.stat}
          </p>
          <p className="text-xs text-muted-foreground">{feature.statLabel}</p>
        </div>
      </div>

      <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
        {feature.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {feature.description}
      </p>
    </div>
  )
}

export function Features() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent/5 blur-[128px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Features
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Feel Confident at Every Step of Outbound
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {"Eliminate spam, burned domains, and unverified leads with Oppora's built-in safeguards"}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

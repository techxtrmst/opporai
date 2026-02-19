"use client"

import { useEffect, useRef, useState } from "react"
import {
  Building2,
  Briefcase,
  Sparkles,
  Search,
  Target,
  Lightbulb,
  Trash2,
  Mail,
  CheckCircle2,
  Megaphone,
} from "lucide-react"

const agents = [
  {
    icon: Building2,
    title: "Company Finder",
    description:
      "Search and discover companies based on specific criteria, industry verticals, company size, and geographic location",
    color: "from-blue-500 to-blue-600",
    bgGlow: "bg-blue-500/10",
  },
  {
    icon: Briefcase,
    title: "Job Finder",
    description:
      "Find job postings based on titles, location, date posted, and workplace type",
    color: "from-amber-500 to-orange-500",
    bgGlow: "bg-amber-500/10",
  },
  {
    icon: Sparkles,
    title: "Company Enrichment",
    description:
      "Analyze each company's industry, size, website, LinkedIn, and more to provide comprehensive insights",
    color: "from-pink-500 to-rose-500",
    bgGlow: "bg-pink-500/10",
  },
  {
    icon: Search,
    title: "Company Remover",
    description:
      "Remove companies based on industry, employee size, DND status, last contacted time and other custom criteria",
    color: "from-emerald-500 to-green-500",
    bgGlow: "bg-emerald-500/10",
  },
  {
    icon: Target,
    title: "Lead Finder",
    description:
      "Search for qualified leads based on your specific criteria and requirements",
    color: "from-cyan-500 to-teal-500",
    bgGlow: "bg-cyan-500/10",
  },
  {
    icon: Lightbulb,
    title: "AI Lead Scoring",
    description:
      "Get intelligent scores for potential leads based on your requirements",
    color: "from-yellow-500 to-amber-500",
    bgGlow: "bg-yellow-500/10",
  },
  {
    icon: Trash2,
    title: "Lead Remover",
    description:
      "Remove leads based on job title, seniority, department, email status and other custom criteria",
    color: "from-red-500 to-rose-500",
    bgGlow: "bg-red-500/10",
  },
  {
    icon: Mail,
    title: "Email Finder",
    description:
      "Find specific email addresses within companies based on role, department, seniority, and other attributes",
    color: "from-indigo-500 to-blue-500",
    bgGlow: "bg-indigo-500/10",
  },
  {
    icon: CheckCircle2,
    title: "Email Verifier",
    description:
      "Verify email addresses for deliverability, accuracy, and risk assessment with both standard and advanced modes",
    color: "from-green-500 to-emerald-500",
    bgGlow: "bg-green-500/10",
  },
  {
    icon: Megaphone,
    title: "Campaign Generator",
    description:
      "Generate personalized outreach campaigns, email sequences, and marketing materials for your leads",
    color: "from-purple-500 to-violet-500",
    bgGlow: "bg-purple-500/10",
  },
]

function AgentCard({
  agent,
  index,
}: {
  agent: (typeof agents)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const Icon = agent.icon

  return (
    <div
      ref={ref}
      className={`glass-card group relative rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 ${
        visible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className={`absolute inset-0 rounded-2xl ${agent.bgGlow} opacity-0 transition-opacity group-hover:opacity-100`} />

      <div className="relative">
        <div
          className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${agent.color}`}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>

        <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
          {agent.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {agent.description}
        </p>
      </div>
    </div>
  )
}

export function AgentsGrid() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            AI Agents
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Powerful AI Agents for Sales Automation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose from our collection of specialized AI agents to build your
            perfect sales workflow
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {agents.map((agent, i) => (
            <AgentCard key={agent.title} agent={agent} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import {
  Building2,
  Search,
  Users,
  Mail,
  CheckCircle,
  Brain,
  Megaphone,
  Briefcase,
  Trash2,
  Target,
} from "lucide-react"

const nodes = [
  { id: 1, label: "Sales Automation", icon: Brain, x: 42, y: 4, accent: "cyan" },
  { id: 2, label: "Company Finder", icon: Building2, x: 10, y: 28, accent: "blue" },
  { id: 3, label: "Lead Finder", icon: Search, x: 42, y: 28, accent: "blue" },
  { id: 4, label: "Email Verifier", icon: CheckCircle, x: 70, y: 28, accent: "green" },
  { id: 5, label: "Lead Scoring", icon: Target, x: 10, y: 52, accent: "cyan" },
  { id: 6, label: "Email Finder", icon: Mail, x: 42, y: 52, accent: "blue" },
  { id: 7, label: "Company Remover", icon: Trash2, x: 70, y: 52, accent: "red" },
  { id: 8, label: "Campaign Generator", icon: Megaphone, x: 22, y: 78, accent: "cyan" },
  { id: 9, label: "Job Finder", icon: Briefcase, x: 60, y: 78, accent: "blue" },
]

const connections = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 1, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: 6 },
  { from: 4, to: 7 },
  { from: 5, to: 8 },
  { from: 6, to: 8 },
  { from: 6, to: 9 },
  { from: 7, to: 9 },
]

const accentColors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    glow: "shadow-blue-500/20",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    glow: "shadow-cyan-500/20",
  },
  green: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    glow: "shadow-emerald-500/20",
  },
  red: {
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    text: "text-red-400",
    glow: "shadow-red-500/20",
  },
}

export function WorkflowVisual() {
  const [activeNode, setActiveNode] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setActiveNode((prev) => {
        if (prev === null || prev >= nodes.length) return 1
        return prev + 1
      })
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  const getNodeCenter = (id: number) => {
    const node = nodes.find((n) => n.id === id)
    if (!node) return { x: 0, y: 0 }
    return { x: node.x + 8, y: node.y + 5 }
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border/60 bg-[#070B14] p-6 sm:p-8">
      {/* Grid background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* SVG Connections */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {connections.map((conn, i) => {
          const from = getNodeCenter(conn.from)
          const to = getNodeCenter(conn.to)
          const isActive = activeNode === conn.from || activeNode === conn.to
          return (
            <line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#lineGrad)"
              strokeWidth="0.25"
              strokeOpacity={isActive ? 0.8 : 0.25}
              className="transition-all duration-700"
            />
          )
        })}

        {/* Animated dots on connections */}
        {mounted &&
          connections.map((conn, i) => {
            const from = getNodeCenter(conn.from)
            const to = getNodeCenter(conn.to)
            return (
              <circle key={`dot-${i}`} r="0.4" fill="#3B82F6" opacity="0.8">
                <animateMotion
                  dur={`${3 + i * 0.5}s`}
                  repeatCount="indefinite"
                  path={`M${from.x},${from.y} L${to.x},${to.y}`}
                />
              </circle>
            )
          })}
      </svg>

      {/* Nodes */}
      <div className="relative" style={{ paddingBottom: "95%" }}>
        {nodes.map((node) => {
          const colors = accentColors[node.accent]
          const isActive = activeNode === node.id
          const Icon = node.icon
          return (
            <div
              key={node.id}
              className={`absolute flex items-center gap-1.5 rounded-xl border px-2.5 py-2 transition-all duration-500 sm:gap-2 sm:px-3 sm:py-2.5 ${
                colors.bg
              } ${isActive ? `${colors.border} shadow-lg ${colors.glow}` : "border-white/[0.06]"} ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transitionDelay: mounted ? `${node.id * 100}ms` : "0ms",
              }}
            >
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg sm:h-8 sm:w-8 ${colors.bg} ${colors.border} border`}
              >
                <Icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${colors.text}`} />
              </div>
              <span className="whitespace-nowrap text-[10px] font-medium text-white/80 sm:text-xs">
                {node.label}
              </span>

              {/* Pulse ring on active node */}
              {isActive && (
                <span
                  className={`absolute -inset-[2px] rounded-xl border ${colors.border} animate-ping opacity-30`}
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Top-left label */}
      <div className="absolute left-6 top-6 flex items-center gap-2 sm:left-8 sm:top-8">
        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] font-medium uppercase tracking-wider text-white/40 sm:text-xs">
          Workflow Builder
        </span>
      </div>
    </div>
  )
}

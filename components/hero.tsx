"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WorkflowVisual } from "@/components/workflow-visual"

const words = ["Solopreneurs", "Agencies", "Startups", "Sales Teams"]

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length)
        setFade(true)
      }, 300)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative z-0 overflow-hidden pb-20 pt-32 lg:pb-32 lg:pt-44">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[128px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Badge */}
        <div className="mb-8 flex justify-center lg:justify-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Sales Automation</span>
          </div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="text-center lg:text-left">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Think, Type and{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Reach Out.
              </span>
            </h1>

            <p className="mt-4 font-display text-lg text-muted-foreground sm:text-xl">
              AI Sales Agents Built for{" "}
              <span
                className={`inline-block font-bold text-primary transition-all duration-300 ${
                  fade ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
              >
                {words[wordIndex]}
              </span>
            </p>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
              Just tell what you sell and who you want to reach and our AI Sales
              Agent will find leads, send emails, reply from your inbox and sync
              meetings to your CRM automatically.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="group rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
              >
                <Link href="https://app.oppora.ai/register">
                  Get Started FREE
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-border bg-secondary text-foreground hover:bg-secondary/80"
              >
                <Link href="https://oppora.ai">Visit Our Website</Link>
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="mt-12 flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-secondary text-xs font-bold text-muted-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by <span className="font-semibold text-foreground">500+</span> customers
              </p>
            </div>
          </div>

          {/* Workflow Visual */}
          <div className="relative flex justify-center">
            <div className="relative w-full">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 blur-xl" />
              <WorkflowVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

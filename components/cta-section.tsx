import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-accent/10 px-8 py-20 text-center">
          {/* Glow effects */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-accent/20 blur-[100px]" />
          </div>

          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Join thousands of sales teams already using Oppora.ai to automate
              their outbound sales. Start your free trial today.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group rounded-full bg-primary px-10 text-lg text-primary-foreground hover:bg-primary/90"
              >
                <Link href="https://app.oppora.ai/register">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-border bg-secondary text-foreground hover:bg-secondary/80"
              >
                <Link href="https://oppora.ai">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

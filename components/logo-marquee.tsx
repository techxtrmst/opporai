import { Building2, Briefcase, Globe, Zap, TrendingUp, Shield, Rocket } from "lucide-react"

const logos = [
  { name: "Staffing", icon: Building2 },
  { name: "Agencies", icon: Briefcase },
  { name: "IT Services", icon: Globe },
  { name: "Healthcare", icon: Zap },
  { name: "SaaS", icon: TrendingUp },
  { name: "Finance", icon: Shield },
  { name: "E-Commerce", icon: Rocket },
]

export function LogoMarquee() {
  return (
    <section className="border-y border-border/50 bg-card/30 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted across industries
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />
          <div className="flex animate-marquee gap-16">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-2 text-muted-foreground/60"
              >
                <logo.icon className="h-5 w-5" />
                <span className="whitespace-nowrap text-sm font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

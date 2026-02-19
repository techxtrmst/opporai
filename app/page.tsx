import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LogoMarquee } from "@/components/logo-marquee"
import { StatsBar } from "@/components/stats-bar"
import { AgentsGrid } from "@/components/agents-grid"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LogoMarquee />
      <StatsBar />
      <AgentsGrid />
      <Features />
      <Testimonials />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}

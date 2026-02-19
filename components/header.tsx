"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Building2, Briefcase, Sparkles, Search, Target, Brain, Trash2, Mail, CheckCircle, Megaphone, Users, Landmark, Stethoscope, Globe, BookOpen, HelpCircle, FileText, MessageSquare, Zap, BarChart3, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { OpporaLogo } from "@/components/oppora-logo"

interface DropdownItem {
  icon: React.ReactNode
  label: string
  description: string
  href: string
}

interface NavSection {
  title: string
  items: DropdownItem[]
  columns?: number
}

const productsData: NavSection = {
  title: "Products",
  columns: 2,
  items: [
    { icon: <Building2 className="h-5 w-5" />, label: "Company Finder", description: "Discover companies by industry, size & location", href: "https://oppora.ai" },
    { icon: <Briefcase className="h-5 w-5" />, label: "Job Finder", description: "Find job postings by title, location & type", href: "https://oppora.ai" },
    { icon: <Sparkles className="h-5 w-5" />, label: "Company Enrichment", description: "Deep company insights & data enrichment", href: "https://oppora.ai" },
    { icon: <Search className="h-5 w-5" />, label: "Company Remover", description: "Filter out companies by custom criteria", href: "https://oppora.ai" },
    { icon: <Target className="h-5 w-5" />, label: "Lead Finder", description: "Search for qualified leads by criteria", href: "https://oppora.ai" },
    { icon: <Brain className="h-5 w-5" />, label: "AI Lead Scoring", description: "Intelligent lead scoring & prioritization", href: "https://oppora.ai" },
    { icon: <Trash2 className="h-5 w-5" />, label: "Lead Remover", description: "Remove leads by title, seniority & more", href: "https://oppora.ai" },
    { icon: <Mail className="h-5 w-5" />, label: "Email Finder", description: "Find verified email addresses at scale", href: "https://oppora.ai" },
    { icon: <CheckCircle className="h-5 w-5" />, label: "Email Verifier", description: "Verify emails for deliverability & risk", href: "https://oppora.ai" },
    { icon: <Megaphone className="h-5 w-5" />, label: "Campaign Generator", description: "AI-powered personalized outreach campaigns", href: "https://oppora.ai" },
  ],
}

const useCasesData: NavSection = {
  title: "Use Cases",
  columns: 2,
  items: [
    { icon: <Users className="h-5 w-5" />, label: "Staffing Agencies", description: "Automate candidate & client outreach", href: "https://oppora.ai" },
    { icon: <Globe className="h-5 w-5" />, label: "IT Services", description: "Scale B2B lead generation for IT firms", href: "https://oppora.ai" },
    { icon: <Stethoscope className="h-5 w-5" />, label: "Healthcare", description: "Connect with healthcare decision-makers", href: "https://oppora.ai" },
    { icon: <Landmark className="h-5 w-5" />, label: "Sales Teams", description: "Empower SDRs with AI-driven workflows", href: "https://oppora.ai" },
    { icon: <Mail className="h-5 w-5" />, label: "Email Marketing", description: "Personalized cold email at scale", href: "https://oppora.ai" },
    { icon: <Zap className="h-5 w-5" />, label: "CRM Automation", description: "Sync leads, deals & meetings automatically", href: "https://oppora.ai" },
  ],
}

const resourcesData: NavSection = {
  title: "Resources",
  columns: 1,
  items: [
    { icon: <BookOpen className="h-5 w-5" />, label: "Blog", description: "Sales tips, strategies & product updates", href: "https://oppora.ai" },
    { icon: <HelpCircle className="h-5 w-5" />, label: "Help Center", description: "Guides, FAQs & troubleshooting", href: "https://oppora.ai" },
    { icon: <FileText className="h-5 w-5" />, label: "Documentation", description: "API docs & integration guides", href: "https://oppora.ai" },
    { icon: <MessageSquare className="h-5 w-5" />, label: "Community", description: "Join the Oppora user community", href: "https://oppora.ai" },
    { icon: <BarChart3 className="h-5 w-5" />, label: "Case Studies", description: "See how teams win with Oppora", href: "https://oppora.ai" },
    { icon: <Shield className="h-5 w-5" />, label: "Security", description: "Learn about our data practices", href: "https://oppora.ai" },
  ],
}

function DesktopDropdown({ section, isOpen, onMouseEnter, onMouseLeave }: { section: NavSection; isOpen: boolean; onMouseEnter: () => void; onMouseLeave: () => void }) {
  const cols = section.columns ?? 1

  return (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${isOpen ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
        aria-expanded={isOpen}
      >
        {section.title}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute left-1/2 top-full pt-4 transition-all duration-200 ${isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"}`}
        style={{ transform: isOpen ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(8px)", zIndex: 9999 }}
      >
        <div className={`glass-card glow-blue rounded-xl p-2 shadow-2xl ${cols === 2 ? "w-[580px]" : "w-[320px]"}`}>
          <div className="mb-2 px-3 pt-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">{section.title}</p>
          </div>
          <div className={`grid gap-1 ${cols === 2 ? "grid-cols-2" : "grid-cols-1"}`}>
            {section.items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-primary/10"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-2 border-t border-border/50 px-3 py-2.5">
            <Link href="https://oppora.ai" className="flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-primary/80">
              {"View all "}{section.title.toLowerCase()}{" \u2192"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileAccordion({ section }: { section: NavSection }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border/30">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-3 text-sm font-medium text-foreground"
        aria-expanded={open}
      >
        {section.title}
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`grid transition-all duration-200 ${open ? "grid-rows-[1fr] pb-3 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1">
            {section.items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-secondary"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = useCallback((title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(title)
  }, [])

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener("resize", handler)
    return () => window.removeEventListener("resize", handler)
  }, [])

  return (
    <>
      {/* Full-screen backdrop when dropdown is open */}
      {activeDropdown && (
        <div
          className="fixed inset-0 bg-background/60 backdrop-blur-sm"
          style={{ zIndex: 9998 }}
          onMouseEnter={handleMouseLeave}
          aria-hidden="true"
        />
      )}
      <header className="fixed top-0 left-0 right-0 border-b border-border/50 bg-background/95 backdrop-blur-xl" style={{ zIndex: 9999, isolation: "isolate" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
        <Link href="https://oppora.ai" className="flex items-center">
          <OpporaLogo size="default" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <DesktopDropdown
            section={productsData}
            isOpen={activeDropdown === "Products"}
            onMouseEnter={() => handleMouseEnter("Products")}
            onMouseLeave={handleMouseLeave}
          />
          <DesktopDropdown
            section={useCasesData}
            isOpen={activeDropdown === "Use Cases"}
            onMouseEnter={() => handleMouseEnter("Use Cases")}
            onMouseLeave={handleMouseLeave}
          />
          <DesktopDropdown
            section={resourcesData}
            isOpen={activeDropdown === "Resources"}
            onMouseEnter={() => handleMouseEnter("Resources")}
            onMouseLeave={handleMouseLeave}
          />
          <Link
            href="https://oppora.ai"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
        </nav>

        {/* Desktop Auth */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="https://app.oppora.ai/login"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Login
          </Link>
          <Button asChild className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90">
            <Link href="https://app.oppora.ai/register">
              {"Get Started FREE \u2192"}
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-border/50 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col px-6 py-4">
            <MobileAccordion section={productsData} />
            <MobileAccordion section={useCasesData} />
            <MobileAccordion section={resourcesData} />
            <Link
              href="https://oppora.ai"
              className="border-b border-border/30 py-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Pricing
            </Link>
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="https://app.oppora.ai/login"
                className="text-sm font-medium text-muted-foreground"
              >
                Login
              </Link>
              <Button asChild className="rounded-full bg-primary text-primary-foreground">
                <Link href="https://app.oppora.ai/register">
                  {"Get Started FREE \u2192"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
      </header>
    </>
  )
}

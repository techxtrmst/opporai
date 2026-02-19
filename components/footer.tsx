import Link from "next/link"
import { OpporaLogo } from "@/components/oppora-logo"

const footerSections = [
  {
    title: "Use Cases",
    links: [
      { label: "Sales Teams", href: "https://oppora.ai" },
      { label: "Lead Generation", href: "https://oppora.ai" },
      { label: "Email Marketing", href: "https://oppora.ai" },
      { label: "CRM Automation", href: "https://oppora.ai" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "https://oppora.ai" },
      { label: "Help Center", href: "https://oppora.ai" },
      { label: "Documentation", href: "https://oppora.ai" },
      { label: "Community", href: "https://oppora.ai" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "https://oppora.ai" },
      { label: "Careers", href: "https://oppora.ai" },
      { label: "Contact", href: "https://oppora.ai" },
      { label: "Privacy Policy", href: "https://oppora.ai" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="https://oppora.ai" className="flex items-center">
              <OpporaLogo size="large" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              AI-powered sales automation platform for modern teams. Find leads,
              send emails, and book meetings automatically.
            </p>
            <div className="mt-6 flex gap-4">
              {/* Social Icons */}
              {["X", "Li", "Gh"].map((label) => (
                <Link
                  key={label}
                  href="https://oppora.ai"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary text-xs font-bold text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  aria-label={`Follow us on ${label}`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {"\u00A9"} 2024 Oppora.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

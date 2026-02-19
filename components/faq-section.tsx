"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What exactly is VibeSales Concept by Oppora?",
    answer:
      "VibeSales is a new sales model where you set the intent, and Oppora's AI agents execute the entire outbound process for you \u2014 from finding companies to booking meetings. No sequences, no manual data work, no constant prompting.",
  },
  {
    question: "How is Oppora different from Apollo, Instantly, or Smartlead?",
    answer:
      "Most tools give you \u201cAI,\u201d but you still have to prompt it for everything \u2014 find leads, enrich data, write emails, reply, etc. Our 8 AI agents talk to each other, build your workflow once, & keep executing it forever.",
  },
  {
    question: "What can Oppora's AI Sales Agent actually do?",
    answer:
      "Our AI Sales Agent can find companies, discover leads, enrich contact data, verify emails, score leads, generate personalized campaigns, auto-reply to prospects, and book meetings \u2014 all autonomously.",
  },
  {
    question: "Do I need SDR experience to use Oppora?",
    answer:
      "Not at all! We believe anyone can sell, even without SDR experience. We guide you through our VibeSales model and even set up your first campaign for free.",
  },
  {
    question: "Where does Oppora get lead data from?",
    answer:
      "We access 120M+ verified emails through waterfall enrichment sources. You can also connect your own data provider APIs for even more flexibility.",
  },
  {
    question: "Will my emails land in spam?",
    answer:
      "We include built-in safeguards: domain warmup, mailbox rotation (up to 50 inboxes), mail provider matching (Gmail-to-Gmail, Outlook-to-Outlook), and AI-generated unique copy to avoid spam patterns.",
  },
  {
    question: "Does Oppora integrate with my CRM?",
    answer:
      "Yes! We sync contacts, replies, deals, tasks, and meetings into HubSpot, Salesforce, Pipedrive, Zoho, and more automatically.",
  },
  {
    question: "How soon can I see results?",
    answer:
      "Many users start seeing replies within the first week. With proper domain warmup and targeted campaigns, you can reach 500+ unique prospects every month.",
  },
]

export function FaqSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass-card overflow-hidden rounded-xl border-none px-6"
            >
              <AccordionTrigger className="py-5 text-left text-sm font-medium text-foreground hover:no-underline hover:text-primary sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function FAQ() {
  const faqs = [
    {
      question: "Is my data secure with your POS system?",
      answer: "Yes, security is our top priority. We use end-to-end encryption for all transaction data and are fully PCI-DSS Level 1 compliant. Your data is backed up daily in secure cloud servers with 99.9% uptime guarantee."
    },
    {
      question: "What hardware is compatible with the software?",
      answer: "Our platform is designed to be hardware-agnostic. It works seamlessly on iPads, Android tablets, and most Windows-based POS terminals. We also integrate with major receipt printers, cash drawers, and card readers like Star Micronics and Epson."
    },
    {
      question: "How long does the setup process take?",
      answer: "For single locations, you can be up and running within 24-48 hours. Our onboarding team assists with menu upload and configuration. For multi-location enterprises, we provide a dedicated implementation manager to ensure a smooth phased rollout over 2-4 weeks."
    },
    {
      question: "What kind of customer support do you offer?",
      answer: "We offer 24/7 technical support via chat, email, and phone for all our customers. Our Professional and Enterprise plans include priority queuing and dedicated account managers for expedited resolution of critical issues."
    },
    {
      question: "Can I integrate with my existing accounting software?",
      answer: "Absolutely. We offer native integrations with QuickBooks, Xero, and NetSuite. This allows for automatic daily sales syncing, reducing manual data entry and ensuring your books are always up to date."
    }
  ];

  return (
    <section className="bg-zinc-900 py-24 sm:py-32" id="faq">
      <div className="mx-auto max-w-7xl px-8 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-16">
            <h2 className="text-base font-bold leading-7 text-primary uppercase tracking-widest font-headline">
              Expertise & Intelligence
            </h2>
            <p className="mt-2 text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-headline">
              Frequently Asked <span className="text-primary italic">Questions</span>
            </p>
          </div>

          <div className="divide-y divide-white/10">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-white/5 pb-4 outline-none"
                >
                  <AccordionTrigger className="text-lg font-bold leading-7 text-white hover:no-underline hover:text-primary transition-colors [&[data-state=open]>span:last-child]:rotate-180 font-headline py-4">
                    <span className="text-left flex-1">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center transition-transform duration-300">
                      <span className="material-symbols-outlined text-primary group-data-[state=open]:rotate-180">
                        expand_more
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-zinc-400 font-body pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

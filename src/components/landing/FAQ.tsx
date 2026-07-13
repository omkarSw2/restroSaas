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
      answer:
        "Yes, security is our top priority. All traffic is encrypted over SSL and payments are processed by trusted gateways like Razorpay, Stripe, and PayPal — card details never touch our servers. Every restaurant runs on its own isolated database with automated nightly backups.",
    },
    {
      question: "What hardware is compatible with the software?",
      answer:
        "Our platform is completely hardware-agnostic. It runs in any modern browser on iPads, Android tablets, and Windows machines, and can be installed as an app on any device. KOTs and customer bills print to any connected receipt printer directly from the browser, with silent one-click printing supported on kiosk setups.",
    },
    {
      question: "How long does the setup process take?",
      answer:
        "For single locations, you can be up and running within 24-48 hours. Our onboarding team assists with menu upload and configuration. For multi-location enterprises, we provide a dedicated implementation manager to ensure a smooth phased rollout over 2-4 weeks.",
    },
    {
      question: "What kind of customer support do you offer?",
      answer:
        "We support you from day one — on-site installation assistance, phone and email support, and an in-app helpdesk where you can raise tickets and track resolutions. Critical issues get priority handling so your service is never interrupted.",
    },
    {
      question: "What integrations does techrestoPOS support?",
      answer:
        "techrestoPOS supports 15+ payment gateways including Razorpay, Stripe, PayPal, and Paytm, and integrates with UrbanPiper to sync your menu and orders with delivery platforms like Zomato and Swiggy. Sales and item reports export to Excel for your accountant or any accounting tool.",
    },
  ];

  return (
    <section className="bg-zinc-900 py-24 sm:py-32" id="faq">
      <div className="mx-auto max-w-7xl px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-7xl"
        >
          <div className="mb-16">
            <h2 className="text-base font-bold leading-7 text-primary uppercase tracking-widest font-headline">
              Expertise & Intelligence
            </h2>
            <p className="mt-2 text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-headline">
              Frequently Asked{" "}
              <span className="text-primary italic">Questions</span>
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
                  <AccordionTrigger className="text-xl font-bold leading-7 text-white hover:no-underline hover:text-primary transition-colors [&[data-state=open]>span:last-child]:rotate-180 font-headline py-4 [&>svg]:hidden">
                    <span className="text-left flex-1">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center transition-transform duration-300">
                      <span className="material-symbols-outlined text-primary group-data-[state=open]:rotate-180">
                        expand_more
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-lg leading-relaxed text-zinc-400 font-body pb-4">
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

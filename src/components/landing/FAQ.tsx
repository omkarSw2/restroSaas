import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32" id="faq">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-slate-900">
            Frequently asked questions
          </h2>

          <div className="mt-10">
            <Accordion type="single" collapsible className="w-full space-y-6">
              <AccordionItem
                value="item-1"
                className="border-b border-gray-900/10 pb-6 outline-none"
              >
                <AccordionTrigger className="text-base font-semibold leading-7 text-slate-800 hover:no-underline hover:text-primary transition-colors [&[data-state=open]>span]:rotate-180">
                  <span className="text-left flex-1">
                    Is my data secure with your POS system?
                  </span>
                  <span className="ml-6 flex h-7 items-center transition-transform duration-300">
                    <span className="material-symbols-outlined text-primary">
                      expand_more
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-base leading-7 text-gray-600">
                  Yes, security is our top priority. We use end-to-end
                  encryption for all transaction data and are fully PCI-DSS
                  Level 1 compliant. Your data is backed up daily in secure
                  cloud servers with 99.9% uptime guarantee.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-b border-gray-900/10 pb-6 outline-none"
              >
                <AccordionTrigger className="text-base font-semibold leading-7 text-slate-800 hover:no-underline hover:text-primary transition-colors [&[data-state=open]>span]:rotate-180">
                  <span className="text-left flex-1">
                    What hardware is compatible with the software?
                  </span>
                  <span className="ml-6 flex h-7 items-center transition-transform duration-300">
                    <span className="material-symbols-outlined text-primary">
                      expand_more
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-base leading-7 text-gray-600">
                  Our platform is designed to be hardware-agnostic. It works
                  seamlessly on iPads, Android tablets, and most Windows-based
                  POS terminals. We also integrate with major receipt printers,
                  cash drawers, and card readers like Star Micronics and Epson.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-b border-gray-900/10 pb-6 outline-none"
              >
                <AccordionTrigger className="text-base font-semibold leading-7 text-slate-800 hover:no-underline hover:text-primary transition-colors [&[data-state=open]>span]:rotate-180">
                  <span className="text-left flex-1">
                    How long does the setup process take?
                  </span>
                  <span className="ml-6 flex h-7 items-center transition-transform duration-300">
                    <span className="material-symbols-outlined text-primary">
                      expand_more
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-base leading-7 text-gray-600">
                  For single locations, you can be up and running within 24-48
                  hours. Our onboarding team assists with menu upload and
                  configuration. For multi-location enterprises, we provide a
                  dedicated implementation manager to ensure a smooth phased
                  rollout over 2-4 weeks.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-b border-gray-900/10 pb-6 outline-none"
              >
                <AccordionTrigger className="text-base font-semibold leading-7 text-slate-800 hover:no-underline hover:text-primary transition-colors [&[data-state=open]>span]:rotate-180">
                  <span className="text-left flex-1">
                    What kind of customer support do you offer?
                  </span>
                  <span className="ml-6 flex h-7 items-center transition-transform duration-300">
                    <span className="material-symbols-outlined text-primary">
                      expand_more
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-base leading-7 text-gray-600">
                  We offer 24/7 technical support via chat, email, and phone for
                  all our customers. Our Professional and Enterprise plans
                  include priority queuing and dedicated account managers for
                  expedited resolution of critical issues.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border-b border-gray-900/10 pb-6 outline-none"
              >
                <AccordionTrigger className="text-base font-semibold leading-7 text-slate-800 hover:no-underline hover:text-primary transition-colors [&[data-state=open]>span]:rotate-180">
                  <span className="text-left flex-1">
                    Can I integrate with my existing accounting software?
                  </span>
                  <span className="ml-6 flex h-7 items-center transition-transform duration-300">
                    <span className="material-symbols-outlined text-primary">
                      expand_more
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-base leading-7 text-gray-600">
                  Absolutely. We offer native integrations with QuickBooks,
                  Xero, and NetSuite. This allows for automatic daily sales
                  syncing, reducing manual data entry and ensuring your books
                  are always up to date.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

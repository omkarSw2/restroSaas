"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: "workspace_premium",
    title: "Expertise & Experience",
    description: "Decades of combined retail engineering experience distilled into a single, high-velocity ledger system built for scale."
  },
  {
    icon: "dashboard_customize",
    title: "Custom Solutions",
    description: "No two stores are the same. We offer modular API-first architecture that adapts perfectly to your specific operational workflow."
  },
  {
    icon: "support_agent",
    title: "Reliable Support",
    description: "Our 24/7 technical guardians ensure your business never stops moving. Real humans, real fast, every single time."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-surface-container-low/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-on-surface">
            Why Global Brands <span className="text-primary italic">Choose Us</span>
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
            We don&apos;t just process payments; we accelerate growth through intentional engineering and human-centric support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-10 bg-surface-container-lowest rounded-3xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 border border-transparent hover:border-primary/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-container/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {reason.icon}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-on-surface">{reason.title}</h3>
              <p className="text-on-surface-variant leading-relaxed text-base">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

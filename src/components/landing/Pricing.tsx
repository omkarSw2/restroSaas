"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export function Pricing() {
  return (
    <section
      className="py-24 bg-surface text-on-surface relative overflow-hidden"
      id="pricing"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-bold leading-7 text-primary uppercase tracking-widest font-headline"
          >
            Simple Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface font-headline"
          >
            Everything you need. One simple price.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-on-surface-variant font-body"
          >
            No complex tiers or hidden fees. Get full access to all our premium
            features to run your operations smoothly.
          </motion.p>
        </div>

        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex flex-col lg:flex-row bg-surface-container-lowest rounded-3xl p-8 sm:p-12 border border-outline-variant/10 shadow-2xl shadow-black/5 overflow-hidden text-left items-center gap-12"
          >
            {/* Background design accents */}
            <div className="absolute -top-32 -right-32 h-[400px] w-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 h-[300px] w-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex-1 relative z-10 w-full">
              <div className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-6 border border-primary/10 shadow-sm font-headline">
                All-in-One Platform
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl font-headline leading-tight">
                The Ultimate Hospitality OS
              </h3>
              <p className="mt-4 text-lg leading-8 text-on-surface-variant font-body">
                TechResto is built specifically for local favorites to simplify
                daily operations and increase profits.
              </p>

              <motion.ul
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 text-base leading-6 text-on-surface-variant"
              >
                {[
                  "Unlimited POS Terminals",
                  "Multi-Location Sync",
                  "Advanced Menu Control",
                  "Table & Reservations",
                  "Integrated Loyalty",
                  "24/7 Priority Support",
                ].map((feature) => (
                  <motion.li
                    key={feature}
                    variants={itemVariants}
                    className="flex gap-x-3 items-center"
                  >
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      check_circle
                    </span>
                    <span className="font-semibold text-on-surface font-body">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "backOut" }}
              className="lg:w-96 flex-none bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10 text-center relative z-10 w-full shadow-inner"
            >
              <p className="text-sm font-black text-on-surface-variant uppercase tracking-widest font-headline">
                Subscription Plan
              </p>
              <div className="mt-6 flex items-baseline justify-center gap-x-1">
                <span className="text-5xl lg:text-5xl font-extrabold tracking-tight text-on-surface font-headline">
                  ₹5,999
                </span>
                <span className="text-sm font-bold leading-6 text-on-surface-variant">
                  /mo
                </span>
              </div>
              <p className="mt-2 text-xs font-medium text-on-surface bg-white/50 rounded-full mx-auto w-max px-3 py-1 border border-outline-variant/10 font-body">
                Billed annually
              </p>
              <Link
                className="mt-8 block rounded-xl techresto-gradient px-4 py-4 text-center text-base font-bold text-white shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
                href="#contact"
              >
                Start Free Trial
              </Link>
              <p className="mt-5 text-xs text-on-surface-variant font-medium font-body">
                14-day free trial. No credit card needed.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Features() {
  return (
    <section className="py-10 max-w-7xl mx-auto px-8 relative overflow-hidden" id="features">
      {/* Premium Glassmorphism Background Glow Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Feature 1: Easy Billing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 p-10 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl rounded-xl shadow-md border border-white/40 dark:border-white/10 border-b-4 border-b-primary group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
        >
          <div className="flex items-start justify-between mb-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">
                receipt_long
              </span>
            </div>
          </div>
          <h3 className="font-headline text-3xl font-bold mb-4 text-on-surface">
            Easy Billing
          </h3>
          <p className="text-on-surface-variant leading-relaxed text-lg max-w-md">
            Bill dine-in, takeaway, and delivery orders in seconds — with
            offers, happy-hour pricing, and GST-ready invoices built in. Made
            for the lunch rush.
          </p>
        </motion.div>

        {/* Feature 2: Loyalty */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 bg-black/80 text-white backdrop-blur-xl rounded-xl shadow-md border border-white/5 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
        >
          <div className="absolute top-0 right-0 p-4 opacity-20 text-white">
            <span className="material-symbols-outlined text-9xl">stars</span>
          </div>
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-orange-500 mb-12">
              <span className="material-symbols-outlined text-4xl icon-filled">
                loyalty
              </span>
            </div>
            <h3 className="font-headline text-3xl font-bold mb-4">
              Loyalty Tools
            </h3>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Turn first-time visitors into regulars. Points are earned
              automatically at checkout and redeemed with a quick OTP — no
              cards, no extra apps.
            </p>
          </div>
        </motion.div>

        {/* Feature 3: Inventory */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 techresto-gradient rounded-xl shadow-md group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-12">
            <span className="material-symbols-outlined text-4xl">
              inventory_2
            </span>
          </div>
          <h3 className="font-headline text-3xl font-bold mb-4 text-white">
            Inventory Control
          </h3>
          <p className="text-white/90 leading-relaxed text-lg">
            Track ingredients, recipes, and stock in real time — and know
            what&apos;s running low before your kitchen does.
          </p>
        </motion.div>

        {/* Feature 4: Analytics (Large) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 p-10 bg-zinc-200/40 dark:bg-zinc-800/40 backdrop-blur-xl rounded-xl shadow-md border border-white/20 dark:border-white/5 flex flex-col md:flex-row gap-8 items-center group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl text-on-surface"
        >
          <div className="flex-1">
            <h3 className="font-headline text-3xl font-bold mb-4">
              Live Insights
            </h3>
            <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
              Today&apos;s sales, top-selling items, and repeat customers at a
              glance — from your phone, tablet, or laptop.
            </p>
            <Link
              className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
              href="#contact"
            >
              Explore Data Suite{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="flex-1 bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg rotate-1 border border-zinc-100 dark:border-zinc-800">
            <div className="flex gap-2 mb-4">
              <div className="h-24 flex-1 bg-primary/20 rounded-t-lg"></div>
              <div className="h-32 flex-1 bg-primary/40 rounded-t-lg"></div>
              <div className="h-40 flex-1 bg-primary rounded-t-lg"></div>
              <div className="h-28 flex-1 bg-primary/60 rounded-t-lg"></div>
            </div>
            <div className="flex justify-between text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

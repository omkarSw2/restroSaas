"use client";

import { motion } from "framer-motion";

export function Features() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-8" id="features">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Feature 1: Easy Billing */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 p-10 bg-surface-container-lowest rounded-xl shadow-sm border-b-4 border-primary group hover:-translate-y-1 transition-transform"
        >
          <div className="flex items-start justify-between mb-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">receipt_long</span>
            </div>
            <span className="text-surface-container-highest font-headline text-6xl font-black">01</span>
          </div>
          <h3 className="font-headline text-3xl font-bold mb-4 text-on-surface">Easy Billing</h3>
          <p className="text-on-surface-variant leading-relaxed text-lg max-w-md">
            Split checks, handle partial payments, and manage tips in a single fluid motion. Designed for peak-hour chaos.
          </p>
        </motion.div>

        {/* Feature 2: Loyalty */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 bg-[#141414] text-white rounded-xl shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform"
        >
          <div className="absolute top-0 right-0 p-4 opacity-20 text-white">
            <span className="material-symbols-outlined text-9xl">stars</span>
          </div>
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-orange-500 mb-12">
              <span className="material-symbols-outlined text-4xl">loyalty</span>
            </div>
            <h3 className="font-headline text-3xl font-bold mb-4">Loyalty Tools</h3>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Automated rewards that keep customers coming back. Integrated directly into the checkout flow.
            </p>
          </div>
        </motion.div>

        {/* Feature 3: Inventory */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 group hover:-translate-y-1 transition-transform"
        >
          <div className="w-16 h-16 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary mb-12">
            <span className="material-symbols-outlined text-4xl">inventory_2</span>
          </div>
          <h3 className="font-headline text-3xl font-bold mb-4 text-on-surface">Inventory Control</h3>
          <p className="text-on-surface-variant leading-relaxed text-lg">
            Real-time stock tracking with low-inventory alerts and automated supplier reordering.
          </p>
        </motion.div>

        {/* Feature 4: Analytics (Large) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 p-10 bg-surface-container-high rounded-xl shadow-sm flex flex-col md:flex-row gap-8 items-center group hover:-translate-y-1 transition-transform text-on-surface"
        >
          <div className="flex-1">
            <h3 className="font-headline text-3xl font-bold mb-4">Live Insights</h3>
            <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
              Visual dashboards that show you exactly what&apos;s selling and when, accessible from any device.
            </p>
            <a className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
              Explore Data Suite <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div className="flex-1 bg-white p-6 rounded-xl shadow-lg rotate-1">
            <div className="flex gap-2 mb-4">
              <div className="h-24 flex-1 bg-primary/20 rounded-t-lg"></div>
              <div className="h-32 flex-1 bg-primary/40 rounded-t-lg"></div>
              <div className="h-40 flex-1 bg-primary rounded-t-lg"></div>
              <div className="h-28 flex-1 bg-primary/60 rounded-t-lg"></div>
            </div>
            <div className="flex justify-between text-[10px] font-bold text-zinc-400 uppercase">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

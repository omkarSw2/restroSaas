"use client";

import { motion } from "framer-motion";

export function TeamSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="rounded-[2.5rem] overflow-hidden relative group shadow-2xl"
      >
        <img
          alt="Kinetic Ledger Innovation Lab"
          className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000"
          src="/images/HomeImage01.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent flex flex-col justify-end p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 className="text-white text-4xl font-bold mb-4 font-headline tracking-tight">
              Shaping the Future Together
            </h3>
            <p className="text-zinc-300 max-w-lg mb-8 text-lg leading-relaxed font-body">
              We are a collective of dreamers, coders, and commerce experts
              working toward a frictionless world of trade.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold font-headline hover:bg-primary-dim transition-all active:scale-95 duration-200">
                See Open Positions
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

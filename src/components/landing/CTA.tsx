"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="px-8 py-24 mb-24 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-primary rounded-3xl p-12 md:p-20 relative overflow-hidden text-center"
      >
        <div className="relative z-10">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-primary mb-8">Ready to accelerate your ledger?</h2>
          <p className="text-on-primary text-lg mb-12 max-w-2xl mx-auto opacity-90">Join over 10,000+ businesses running on Kinetic Ledger. Setup takes minutes, impact lasts a lifetime.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold font-headline hover:bg-on-primary transition-all active:scale-95">
              Start Free Trial
            </button>
            <button className="bg-primary-dim text-white px-10 py-4 rounded-xl font-bold font-headline border border-white/20 hover:bg-primary-dim/80 transition-all kinetic-gradient active:scale-95">
              Speak to Sales
            </button>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      </motion.div>
    </section>
  );
}

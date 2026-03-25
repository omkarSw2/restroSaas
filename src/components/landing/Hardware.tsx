"use client";

import { motion } from "framer-motion";

export function Hardware() {
  return (
    <section className="px-8 py-24 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 relative"
        >
          <img 
            alt="Kinetic Terminal" 
            className="rounded-2xl shadow-xl w-full" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr_2RhoX3-zCHaT8EcXmFJUL6_pD0ZyTEw2b7P3JHSUqO_4Bk1_BUSWrqXStGZqLRtHoEffE_Ik_ymH12nLiTbMBOHwMmEoOR-NHDOqdftzBbFbX-59DyTAD9JzJQnn7sCgh2O0w7MsL4RK8i_kru3VAbZgmOFO4OJBFtgq9WCPiu_W9eW25_nKp0ASVkVpFljYHkmZ73mZ0DXdlm32Ov9SfYKInuTSSmazat3BCMS6WSlaW1mZkI5-vmJQcgGfmkhZzHvK6TJd7A"
          />
          {/* Overlapping Detail Card */}
          <div className="absolute -bottom-8 -right-8 bg-white/80 backdrop-blur-xl p-6 rounded-xl shadow-2xl max-w-xs border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-primary">contactless</span>
              <span className="font-bold text-sm uppercase tracking-tighter text-on-surface">Instant Pay</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">Accept Apple Pay, Google Pay, and all major chip cards in under 0.5 seconds.</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <h2 className="font-headline text-4xl font-extrabold mb-6 leading-tight text-on-surface">
            Hardware that looks as <span className="text-primary italic">sharp</span> as your brand.
          </h2>
          <p className="text-lg text-secondary mb-8">
            We don&apos;t just build software; we build the tools that sit at the front lines of your business. Our hardware is designed for 24/7 reliability and aesthetics that complement premium spaces.
          </p>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">print</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1 text-on-surface">Silent Thermal Printing</h4>
                <p className="text-secondary text-sm">High-speed, eco-friendly receipt generation without the noise.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">barcode_scanner</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1 text-on-surface">Omni-Directional Scanning</h4>
                <p className="text-secondary text-sm">Scan items from any angle instantly, even with damaged labels.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">wifi</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1 text-on-surface">Offline Resilience</h4>
                <p className="text-secondary text-sm">The internet goes down, your business doesn&apos;t. Full functionality without a connection.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

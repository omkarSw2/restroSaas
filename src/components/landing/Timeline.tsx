"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2018",
    title: "Founded in Austin",
    description: "TechResto was born from a vision to fix broken retail technology in a small studio south of Lady Bird Lake.",
    offset: false
  },
  {
    year: "2020",
    title: "5k+ Merchants",
    description: "Amidst global shifts, we helped thousands of retailers pivot to omnichannel sales and contactless pickup.",
    offset: true
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Launched our European and Asian headquarters, supporting multi-currency and cross-border transactions.",
    offset: false
  },
  {
    year: "2024",
    title: "Leading Innovator",
    description: "Named the #1 High-Velocity POS by RetailTech Global. Reached 50,000 active merchants worldwide.",
    offset: true
  }
];

export function Timeline() {
  return (
    <section className="py-24 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-on-surface">The TechResto Timeline</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">Tracing our evolution from a garage startup in Austin to a global commerce powerhouse.</p>
          </div>
          <div className="bg-primary/5 px-6 py-3 rounded-full border border-primary/20">
            <span className="text-primary font-bold">6 Years of Innovation</span>
          </div>
        </div>
        
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-surface-container-high -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {milestones.map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative group ${item.offset ? "md:mt-24" : "md:mb-24"}`}
              >
                {/* Connector Point */}
                <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary z-20 group-hover:scale-150 transition-transform ${item.offset ? "-top-[76px]" : "top-1/2 -translate-y-1/2"}`}></div>
                
                <div className="pt-12 md:pt-0 text-center md:text-left">
                  <span className="text-6xl font-black text-surface-container-highest/50 block mb-2 group-hover:text-primary/20 transition-colors duration-300">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold mb-2 text-on-surface">{item.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

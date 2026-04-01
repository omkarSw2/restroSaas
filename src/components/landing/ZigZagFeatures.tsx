"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "Seamless Kitchen Integration",
    description: "Connect your front-of-house with the kitchen instantly. Reduce errors and speed up service with our real-time Kitchen Display System (KDS) that scales with your business.",
    image: "/features/kitchen_pos.png",
    cta: "Explore POS Solutions",
    href: "#contact",
  },
  {
    title: "Mobile Ordering Excellence",
    description: "Empower your customers to order from anywhere. A seamless mobile experience that drives higher ticket sizes and builds customer loyalty through convenience.",
    image: "/features/mobile_ordering.png",
    cta: "Mobile Ordering",
    href: "#contact",
  },
  {
    title: "Data-Driven Decisions",
    description: "Unlock powerful insights into your restaurant's performance. Monitor sales, inventory, and staff efficiency in real-time with our advanced analytics suite.",
    image: "/features/analytics.png",
    cta: "Analyze Your Data",
    href: "#contact",
  },
  {
    title: "Effortless Table Management",
    description: "Optimize your floor plan and manage reservations with ease. Minimize wait times and maximize turnover with our intuitive table management tools.",
    image: "/features/table_management.png",
    cta: "Optimize Your Floor",
    href: "#contact",
  },
];

export function ZigZagFeatures() {
  return (
    <section className="py-24 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6"
          >
            Built for Modern Hospitality
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant text-xl max-w-2xl mx-auto"
          >
            Everything you need to run a successful restaurant, streamline operations, and delight your guests.
          </motion.p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-20 items-center`}
            >
              <div className="flex-1 w-full relative group">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-surface-container-high transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover aspect-4/3"
                  />
                </div>
              </div>

              <div className="flex-1 text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl mb-6">
                  0{index + 1}
                </div>
                <h3 className="font-headline text-3xl font-bold text-on-surface mb-6 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  {feature.description}
                </p>
                {feature.cta && (
                  <Link
                    href={feature.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-full font-bold hover:bg-primary/90 hover:gap-3 transition-all"
                  >
                    {feature.cta}
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

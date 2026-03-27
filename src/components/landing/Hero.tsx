"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <>
      {/* Primary Hero Section */}
      <section className="relative px-8 py-24 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary-container text-on-primary-container text-xs font-bold tracking-widest uppercase mb-6">
              The Future of Commerce
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight leading-[1.1] mb-8">
              Precision Tools for{" "}
              <span className="text-primary italic">High-Velocity</span> Growth.
            </h1>
            <p className="text-lg text-secondary leading-relaxed max-w-xl mb-10">
              Stop managing your business from the rearview mirror. Kinetic
              Ledger provides the real-time data and automated infrastructure
              required to dominate modern retail environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold font-headline flex items-center gap-2 hover:bg-primary-dim transition-all">
                View Live Demo{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link href="#contact" className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-bold font-headline hover:bg-surface-container-high transition-all">
                Hardware Bundles
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Asymmetric Image Layout */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                alt="Modern POS Dashboard"
                className="w-full h-auto object-cover aspect-4/3"
                src="images/HomeImage02.jpg"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-tertiary-container/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Secondary Hero Section */}
      <header className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-primary-container/20 text-primary rounded-full">
              High-Velocity Commerce
            </span>
            <h1 className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-8 text-on-surface">
              Smart POS Solutions for{" "}
              <span className="text-primary italic">Modern Restaurants</span>
            </h1>
            <p className="text-on-surface-variant text-lg lg:text-xl max-w-xl mb-10 leading-relaxed">
              The kinetic heartbeat of your business. Seamlessly manage orders,
              inventory, and payments with the industry&apos;s fastest
              interface.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="px-8 py-4 rounded-xl kinetic-gradient text-white font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95 flex items-center justify-center">
                Get Started
              </Link>
              <Link href="#contact" className="px-8 py-4 rounded-xl bg-surface-container-highest text-on-surface font-bold text-lg hover:bg-surface-container-high transition-all active:scale-95 flex items-center justify-center">
                Book a Demo
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Asymmetric Background Shape */}
            <div className="absolute -top-12 -right-12 w-72 h-72 bg-primary/10 blur-3xl rounded-full"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                alt="Kinetic POS Terminal"
                className="w-full h-auto object-cover"
                src="images/HeroImage03.jpg"
              />
            </div>
            {/* Floating Data Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-8 -left-8 p-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 z-20 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2 text-primary font-headline">
                <span className="material-symbols-outlined font-bold">
                  bolt
                </span>
                <span className="font-bold text-xs uppercase tracking-tighter">
                  Real-Time Sync
                </span>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-3/4"></div>
              </div>
              <p className="text-[10px] mt-2 font-semibold text-zinc-500">
                Processing 2.4k transactions/sec
              </p>
            </motion.div>
          </motion.div>
        </div>
      </header>
    </>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { motion, Variants } from "framer-motion";

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export function ROICalculator() {
  const [outlets, setOutlets] = useState([5]);
  const [revenue, setRevenue] = useState([50000]);

  // Formula: 1.5% efficiency gain based on outlets and monthly revenue per outlet
  const monthlySavings = outlets[0] * revenue[0] * 0.015;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section
      className="py-24 bg-background relative overflow-hidden"
      id="roi-calculator"
    >
      <div className="absolute inset-0 hero-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={listVariants}
          >
            <motion.h2 variants={itemVariants} className="text-base font-semibold leading-7 text-primary">
              Calculate Your Value
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              See How Much You Could Save
            </motion.p>
            <motion.p variants={itemVariants} className="mt-6 text-lg leading-8 text-slate-400">
              Our efficient POS system reduces operational costs, minimizes food
              waste, and speeds up table turnover. Use the calculator to
              estimate your potential monthly savings.
            </motion.p>
            <motion.ul variants={listVariants} className="mt-10 space-y-4 text-slate-400">
              <motion.li variants={itemVariants} className="flex items-start">
                <span className="material-symbols-outlined text-primary mr-3 mt-1">
                  check_circle
                </span>
                <span>Reduce order errors by up to 80%</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span className="material-symbols-outlined text-primary mr-3 mt-1">
                  check_circle
                </span>
                <span>Cut inventory waste with real-time tracking</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span className="material-symbols-outlined text-primary mr-3 mt-1">
                  check_circle
                </span>
                <span>Save 15+ hours/week on manual reporting</span>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.2 }}
            className="bg-card border border-white/5 rounded-2xl p-8 sm:p-10 shadow-2xl relative"
          >
            <motion.div 
              animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 h-24 w-24 bg-primary/20 rounded-full blur-2xl z-0"
            ></motion.div>
            <div className="relative z-10 space-y-8">
              <div>
                <label className="block text-sm font-semibold leading-6 text-white mb-2">
                  Number of Outlets
                </label>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-400 text-xs">1</span>
                  <span className="text-white font-bold text-lg">
                    {outlets[0]}
                  </span>
                  <span className="text-slate-400 text-xs">50+</span>
                </div>
                <Slider
                  value={outlets}
                  onValueChange={setOutlets}
                  max={50}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold leading-6 text-white mb-2">
                  Monthly Revenue per Outlet (₹)
                </label>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-400 text-xs">₹10k</span>
                  <span className="text-white font-bold text-lg">
                    {formatCurrency(revenue[0])}
                  </span>
                  <span className="text-slate-400 text-xs">₹500k+</span>
                </div>
                <Slider
                  value={revenue}
                  onValueChange={setRevenue}
                  max={500000}
                  min={10000}
                  step={5000}
                  className="w-full"
                />
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">
                  Estimated Monthly Savings
                </p>
                <div className="mt-2 flex items-baseline">
                  <span className="text-5xl font-extrabold text-primary">
                    {formatCurrency(monthlySavings)}
                  </span>
                  <span className="ml-2 text-sm text-slate-400">/ mo</span>
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  *Based on average 1.5% efficiency gain and 20 hours saved.
                </p>
              </div>

              <Button className="w-full mt-6 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black shadow-sm hover:bg-slate-200 transition-all">
                Get Detailed Analysis
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

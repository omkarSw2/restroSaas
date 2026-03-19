"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

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
      className="py-24 bg-slate-900 relative overflow-hidden"
      id="roi-calculator"
    >
      <div className="absolute inset-0 hero-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-base font-semibold leading-7 text-primary">
              Calculate Your Value
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              See How Much You Could Save
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Our efficient POS system reduces operational costs, minimizes food
              waste, and speeds up table turnover. Use the calculator to
              estimate your potential monthly savings.
            </p>
            <ul className="mt-10 space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-primary mr-3 mt-1">
                  check_circle
                </span>
                <span>Reduce order errors by up to 80%</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-primary mr-3 mt-1">
                  check_circle
                </span>
                <span>Cut inventory waste with real-time tracking</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-primary mr-3 mt-1">
                  check_circle
                </span>
                <span>Save 15+ hours/week on manual reporting</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl relative">
            <div className="absolute -top-6 -right-6 h-24 w-24 bg-primary/20 rounded-full blur-2xl z-0"></div>
            <div className="relative z-10 space-y-8">
              <div>
                <label className="block text-sm font-semibold leading-6 text-slate-900 mb-2">
                  Number of Outlets
                </label>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-500 text-xs">1</span>
                  <span className="text-slate-900 font-bold text-lg">
                    {outlets[0]}
                  </span>
                  <span className="text-slate-500 text-xs">50+</span>
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
                <label className="block text-sm font-semibold leading-6 text-slate-900 mb-2">
                  Monthly Revenue per Outlet (₹)
                </label>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-500 text-xs">₹10k</span>
                  <span className="text-slate-900 font-bold text-lg">
                    {formatCurrency(revenue[0])}
                  </span>
                  <span className="text-slate-500 text-xs">₹500k+</span>
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

              <div className="pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                  Estimated Monthly Savings
                </p>
                <div className="mt-2 flex items-baseline">
                  <span className="text-5xl font-extrabold text-primary">
                    {formatCurrency(monthlySavings)}
                  </span>
                  <span className="ml-2 text-sm text-slate-500">/ mo</span>
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  *Based on average 1.5% efficiency gain and 20 hours saved.
                </p>
              </div>

              <Button className="w-full mt-6 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-all">
                Get Detailed Analysis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

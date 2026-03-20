import Link from "next/link";

export function Pricing() {
  return (
    <section
      className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden"
      id="pricing"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Simple Pricing
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need. One simple price.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            No complex tiers or hidden fees. Get full access to all our premium
            features to run your operations smoothly.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="relative flex flex-col lg:flex-row bg-white rounded-3xl p-8 sm:p-12 ring-2 ring-primary shadow-2xl shadow-primary/10 overflow-hidden text-left items-center gap-12">
            {/* Background design accents */}
            <div className="absolute -top-32 -right-32 h-[400px] w-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 h-[300px] w-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex-1 relative z-10 w-full">
              <div className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-6 border border-primary/20 shadow-sm">
                All-in-One Platform
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                The Ultimate Hospitality OS
              </h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Join hundreds of successful venues using our platform to scale
                their branches, manage operations effortlessly, and delight
                their customers daily.
              </p>

              <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 text-base leading-6 text-slate-700">
                <li className="flex gap-x-3 items-center">
                  <span className="material-symbols-outlined text-green-500 text-[24px]">
                    check_circle
                  </span>
                  <span className="font-semibold text-slate-800">
                    Unlimited POS Terminals
                  </span>
                </li>
                <li className="flex gap-x-3 items-center">
                  <span className="material-symbols-outlined text-green-500 text-[24px]">
                    check_circle
                  </span>
                  <span className="font-semibold text-slate-800">
                    Multi-Location Sync
                  </span>
                </li>
                <li className="flex gap-x-3 items-center">
                  <span className="material-symbols-outlined text-green-500 text-[24px]">
                    check_circle
                  </span>
                  <span className="font-semibold text-slate-800">
                    Advanced Menu Control
                  </span>
                </li>
                <li className="flex gap-x-3 items-center">
                  <span className="material-symbols-outlined text-green-500 text-[24px]">
                    check_circle
                  </span>
                  <span className="font-semibold text-slate-800">
                    Table & Reservations
                  </span>
                </li>
                <li className="flex gap-x-3 items-center">
                  <span className="material-symbols-outlined text-green-500 text-[24px]">
                    check_circle
                  </span>
                  <span className="font-semibold text-slate-800">
                    Integrated Loyalty
                  </span>
                </li>
                <li className="flex gap-x-3 items-center">
                  <span className="material-symbols-outlined text-green-500 text-[24px]">
                    check_circle
                  </span>
                  <span className="font-semibold text-slate-800">
                    24/7 Priority Support
                  </span>
                </li>
              </ul>
            </div>

            <div className="lg:w-96 flex-none bg-slate-50 rounded-2xl p-8 ring-1 ring-slate-200 text-center relative z-10 w-full shadow-inner">
              <p className="text-sm font-black text-slate-500 uppercase tracking-widest">
                Get Started
              </p>
              <div className="mt-6 flex items-baseline justify-center gap-x-1">
                <span className="text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                  ₹6,999
                </span>
                <span className="text-sm font-bold leading-6 text-slate-500">
                  /mo
                </span>
              </div>
              <p className="mt-2 text-xs font-medium text-slate-500 bg-white rounded-full mx-auto w-max px-3 py-1 ring-1 ring-slate-200">
                Billed annually
              </p>
              <Link
                className="mt-8 block rounded-xl bg-primary px-4 py-4 text-center text-base font-bold text-white shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] hover:bg-primary-dark hover:shadow-[0_6px_20px_rgba(234,88,12,0.23)] hover:-translate-y-0.5 transition-all duration-200"
                href="#"
              >
                Start Free Trial
              </Link>
              <p className="mt-5 text-xs text-slate-500">
                14-day free trial. No credit card needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

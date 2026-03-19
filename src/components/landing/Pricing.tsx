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
            Pricing Plans
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Scalable Solutions for Every Stage
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Choose a plan that fits your business needs, from single outlets to
            global hotel chains.
          </p>

          <div className="mt-8 flex justify-center items-center space-x-4">
            <span className="text-sm font-medium text-slate-500">Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                defaultChecked
                className="sr-only peer"
                type="checkbox"
                value=""
              />
              <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
            <span className="text-sm font-medium text-slate-900">
              Annually{" "}
              <span className="ml-1 text-xs text-primary font-bold">
                (Save 20%)
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8 items-start">
          {/* Starter Plan */}
          <div className="flex flex-col bg-white rounded-3xl p-8 ring-1 ring-slate-200 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold leading-8 text-slate-900">
              Starter
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Perfect for single outlets and small cafes getting started.
            </p>
            <div className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-slate-900">
                ₹3,999
              </span>
              <span className="text-sm font-semibold leading-6 text-slate-500">
                /month
              </span>
            </div>
            <ul
              className="mt-8 space-y-3 text-sm leading-6 text-slate-600"
              role="list"
            >
              <li className="flex gap-x-3">
                <span
                  className="material-symbols-outlined text-primary h-6 w-5 flex-none"
                  style={{ fontSize: "20px" }}
                >
                  check
                </span>
                1 POS Terminal
              </li>
              <li className="flex gap-x-3">
                <span
                  className="material-symbols-outlined text-primary h-6 w-5 flex-none"
                  style={{ fontSize: "20px" }}
                >
                  check
                </span>
                Basic Inventory Management
              </li>
              <li className="flex gap-x-3">
                <span
                  className="material-symbols-outlined text-primary h-6 w-5 flex-none"
                  style={{ fontSize: "20px" }}
                >
                  check
                </span>
                Standard Reporting
              </li>
              <li className="flex gap-x-3">
                <span
                  className="material-symbols-outlined text-primary h-6 w-5 flex-none"
                  style={{ fontSize: "20px" }}
                >
                  check
                </span>
                Email Support
              </li>
            </ul>
            <Link
              className="mt-8 block rounded-md bg-slate-100 px-3 py-2 text-center text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 transition-all"
              href="#"
            >
              Get Started
            </Link>
          </div>

          {/* Professional Plan */}
          <div className="relative flex flex-col bg-white rounded-3xl p-8 ring-2 ring-primary shadow-xl shadow-primary/10 z-10 scale-105 transform">
            <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white text-center">
              Most Popular
            </div>
            <h3 className="text-lg font-semibold leading-8 text-slate-900">
              Professional
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Ideal for growing hotels and busy restaurants needing more power.
            </p>
            <div className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-slate-900">
                ₹9,999
              </span>
              <span className="text-sm font-semibold leading-6 text-slate-500">
                /month
              </span>
            </div>
            <ul
              className="mt-8 space-y-3 text-sm leading-6 text-slate-600"
              role="list"
            >
              <li className="flex gap-x-3">
                <span
                  className="material-symbols-outlined text-primary h-6 w-5 flex-none"
                  style={{ fontSize: "20px" }}
                >
                  check
                </span>
                Up to 5 POS Terminals
              </li>
              <li className="flex gap-x-3">
                <span
                  className="material-symbols-outlined text-primary h-6 w-5 flex-none"
                  style={{ fontSize: "20px" }}
                >
                  check
                </span>
                Advanced Menu Management
              </li>
              <li className="flex gap-x-3">
                <span
                  className="material-symbols-outlined text-primary h-6 w-5 flex-none"
                  style={{ fontSize: "20px" }}
                >
                  check
                </span>
                Table Reservation System
              </li>
              <li className="flex gap-x-3">
                <span
                  className="material-symbols-outlined text-primary h-6 w-5 flex-none"
                  style={{ fontSize: "20px" }}
                >
                  check
                </span>
                Customer Loyalty Program
              </li>
              <li className="flex gap-x-3">
                <span
                  className="material-symbols-outlined text-primary h-6 w-5 flex-none"
                  style={{ fontSize: "20px" }}
                >
                  check
                </span>
                24/7 Priority Support
              </li>
            </ul>
            <Link
              className="mt-8 block rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
              href="#"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="flex flex-col bg-white rounded-3xl p-8 ring-1 ring-slate-200 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold leading-8 text-slate-900">
              Enterprise
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Comprehensive solutions for large hotel chains and franchises.
            </p>
            <div className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-slate-900">
                Custom
              </span>
            </div>
            <ul
              className="mt-8 space-y-3 text-sm leading-6 text-slate-600"
              role="list"
            >
              <li className="flex gap-x-3">
                <span
                  className="material-symbols-outlined text-primary h-6 w-5 flex-none"
                  style={{ fontSize: "20px" }}
                >
                  check
                </span>
                Unlimited Terminals & Outlets
              </li>
              <li className="flex gap-x-3">
                <span
                  className="material-symbols-outlined text-primary h-6 w-5 flex-none"
                  style={{ fontSize: "20px" }}
                >
                  check
                </span>
                Multi-Location Headquarters
              </li>
              <li className="flex gap-x-3">
                <span
                  className="material-symbols-outlined text-primary h-6 w-5 flex-none"
                  style={{ fontSize: "20px" }}
                >
                  check
                </span>
                API Access & Custom Integrations
              </li>
              <li className="flex gap-x-3">
                <span
                  className="material-symbols-outlined text-primary h-6 w-5 flex-none"
                  style={{ fontSize: "20px" }}
                >
                  check
                </span>
                Dedicated Account Manager
              </li>
              <li className="flex gap-x-3">
                <span
                  className="material-symbols-outlined text-primary h-6 w-5 flex-none"
                  style={{ fontSize: "20px" }}
                >
                  check
                </span>
                SLA & Uptime Guarantee
              </li>
            </ul>
            <Link
              className="mt-8 block rounded-md bg-slate-100 px-3 py-2 text-center text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 transition-all"
              href="#"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

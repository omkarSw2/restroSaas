import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-slate-900 pt-24 pb-32 sm:pt-32 sm:pb-40 overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-20"></div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20">
        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ea580c] to-[#fb923c] opacity-30"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-400 ring-1 ring-white/10 hover:ring-white/20">
              New: Multi-location inventory sync.{" "}
              <Link className="font-semibold text-primary" href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Read more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Streamline Your{" "}
            <span className="text-gradient">Hospitality Operations</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            The all-in-one POS and Billing solution designed for modern boutique
            hotels and high-end restaurants. Manage reservations, orders, and
            payments seamlessly.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              className="rounded-lg shadow-sm hover:bg-primary-dark transition-all"
            >
              Request a Demo
            </Button>
            <Button
              variant="ghost"
              className="group flex items-center gap-2 text-sm font-semibold leading-6 text-white transition-all hover:text-primary hover:bg-transparent"
            >
              View Features
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Button>
          </div>
        </div>

        {/* 3D Dashboard Preview */}
        <div className="mt-16 flow-root sm:mt-24 perspective-3d">
          <div className="relative -m-2 rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="rotate-3d rounded-xl bg-white shadow-2xl ring-1 ring-slate-200 overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="flex h-6 w-1/3 items-center rounded bg-slate-200 px-2 text-xs text-slate-600">
                  pos.dashboard.saas
                </div>
                <div className="h-4 w-4"></div>
              </div>

              {/* Dashboard Content */}
              <div className="grid grid-cols-12 gap-6 p-6 bg-slate-50 text-slate-900">
                {/* Sidebar */}
                <div className="col-span-1 hidden lg:block">
                  <div className="space-y-4 text-slate-500">
                    <span className="material-symbols-outlined block text-primary">
                      dashboard
                    </span>
                    <span className="material-symbols-outlined block hover:text-primary transition-colors cursor-pointer">
                      point_of_sale
                    </span>
                    <span className="material-symbols-outlined block hover:text-primary transition-colors cursor-pointer">
                      inventory_2
                    </span>
                    <span className="material-symbols-outlined block hover:text-primary transition-colors cursor-pointer">
                      people
                    </span>
                    <span className="material-symbols-outlined block hover:text-primary transition-colors cursor-pointer">
                      settings
                    </span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="col-span-12 lg:col-span-11">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Dashboard Overview
                      </h3>
                      <p className="text-sm text-slate-500">
                        Welcome back, Manager
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                      >
                        Export Report
                      </Button>
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary-dark text-white"
                      >
                        + New Order
                      </Button>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                    <div className="rounded-lg bg-white p-4 border border-slate-100 shadow-sm">
                      <p className="text-xs font-medium text-slate-500">
                        Total Revenue
                      </p>
                      <p className="mt-2 text-2xl font-bold text-slate-900">
                        ₹45,231
                      </p>
                      <p className="mt-1 text-xs text-green-600 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          trending_up
                        </span>{" "}
                        +20.1%
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-4 border border-slate-100 shadow-sm">
                      <p className="text-xs font-medium text-slate-500">
                        Orders
                      </p>
                      <p className="mt-2 text-2xl font-bold text-slate-900">
                        1,342
                      </p>
                      <p className="mt-1 text-xs text-green-600 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          trending_up
                        </span>{" "}
                        +12.5%
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-4 border border-slate-100 shadow-sm">
                      <p className="text-xs font-medium text-slate-500">
                        Avg. Table Turn
                      </p>
                      <p className="mt-2 text-2xl font-bold text-slate-900">45m</p>
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          trending_down
                        </span>{" "}
                        -2.4%
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-4 border border-slate-100 shadow-sm">
                      <p className="text-xs font-medium text-slate-500">
                        Active Tables
                      </p>
                      <p className="mt-2 text-2xl font-bold text-slate-900">
                        24/32
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Currently Seated
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Chart area */}
                    <div className="lg:col-span-2 rounded-lg bg-white p-6 border border-slate-100 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-semibold text-slate-900">
                          Revenue Analytics
                        </h4>
                        <select className="bg-slate-50 border-slate-200 text-xs text-slate-600 rounded py-1 px-2 focus:ring-0 outline-none">
                          <option>This Week</option>
                        </select>
                      </div>
                      <div className="h-48 flex items-end gap-2">
                        {[40, 65, 50, 85, 70, 95, 60].map((height, i) => (
                          <div
                            key={i}
                            className={`w-full ${i === 5 ? "bg-primary" : "bg-primary/20 hover:bg-primary/40"} rounded-t transition-all relative group`}
                            style={{ height: `${height}%` }}
                          >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              ₹{(height * 100).toLocaleString()}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-slate-400">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span className="text-primary font-bold">Sat</span>
                        <span>Sun</span>
                      </div>
                    </div>

                    {/* Recent Orders area */}
                    <div className="rounded-lg bg-white p-6 border border-slate-100 shadow-sm">
                      <h4 className="text-sm font-semibold text-slate-900 mb-4">
                        Recent Orders
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded bg-orange-100 flex items-center justify-center text-orange-600">
                              <span className="material-symbols-outlined text-sm">
                                restaurant
                              </span>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-slate-900">
                                Table 5
                              </p>
                              <p className="text-[10px] text-slate-500">
                                Just now
                              </p>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-slate-900">
                            ₹1,245.00
                          </span>
                        </div>
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded bg-blue-100 flex items-center justify-center text-blue-600">
                              <span className="material-symbols-outlined text-sm">
                                local_bar
                              </span>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-slate-900">
                                Bar Tab 12
                              </p>
                              <p className="text-[10px] text-slate-500">
                                2 mins ago
                              </p>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-slate-900">
                            ₹450.00
                          </span>
                        </div>
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded bg-green-100 flex items-center justify-center text-green-600">
                              <span className="material-symbols-outlined text-sm">
                                room_service
                              </span>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-slate-900">
                                Room 204
                              </p>
                              <p className="text-[10px] text-slate-500">
                                5 mins ago
                              </p>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-slate-900">
                            ₹822.20
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

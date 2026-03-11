export function Features() {
  return (
    <>
      {/* Logos Section */}
      <div className="bg-slate-50 py-12 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm font-medium leading-8 text-slate-500 mb-8 uppercase tracking-widest">
            Trusted by leading establishments worldwide
          </p>
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all flex justify-center items-center">
              <span className="text-xl font-bold text-slate-400">Marriott</span>
            </div>
            <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all flex justify-center items-center">
              <span className="text-xl font-bold text-slate-400">Hyatt</span>
            </div>
            <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all flex justify-center items-center">
              <span className="text-xl font-bold text-slate-400">Hilton</span>
            </div>
            <div className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all flex justify-center items-center">
              <span className="text-xl font-bold text-slate-400">
                FourSeasons
              </span>
            </div>
            <div className="col-span-2 max-h-12 w-full object-contain col-start-2 sm:col-start-auto lg:col-span-1 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all flex justify-center items-center">
              <span className="text-xl font-bold text-slate-400">Radisson</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Features */}
      <section className="py-24 bg-white sm:py-32" id="features">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Everything you need
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Core Features for Modern Hospitality
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Powering operations for boutique hotels and fine dining
              restaurants across the globe with robust, scalable tools.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4">
              <div className="relative group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <dt className="flex flex-col gap-4 text-base font-semibold leading-7 text-slate-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontSize: "28px" }}
                    >
                      receipt_long
                    </span>
                  </div>
                  Smart Billing
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">
                  Automated invoicing, split checks, and room charges for
                  seamless guest check-out experiences.
                </dd>
              </div>

              <div className="relative group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <dt className="flex flex-col gap-4 text-base font-semibold leading-7 text-slate-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontSize: "28px" }}
                    >
                      restaurant_menu
                    </span>
                  </div>
                  Menu Management
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">
                  Centralized control over menus, pricing, modifiers, and
                  inventory across all your dining locations.
                </dd>
              </div>

              <div className="relative group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <dt className="flex flex-col gap-4 text-base font-semibold leading-7 text-slate-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontSize: "28px" }}
                    >
                      storefront
                    </span>
                  </div>
                  Multi-Outlet Support
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">
                  Scale easily from a single location to a global chain with
                  unified reporting and staff management.
                </dd>
              </div>

              <div className="relative group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <dt className="flex flex-col gap-4 text-base font-semibold leading-7 text-slate-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontSize: "28px" }}
                    >
                      bar_chart
                    </span>
                  </div>
                  Real-time Analytics
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">
                  Make data-driven decisions with live sales dashboards, labor
                  cost tracking, and performance metrics.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

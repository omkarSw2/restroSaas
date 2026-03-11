export function HowItWorks() {
  return (
    <section
      className="py-24 bg-slate-50 relative overflow-hidden"
      id="how-it-works"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Simple Onboarding
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How It Works
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Get up and running in minutes, not months. Our streamlined process
            ensures a smooth transition.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute top-1/2 left-0 w-full border-t-2 border-slate-200 -z-10 hidden lg:block"
            style={{ transform: "translateY(-50%)", top: "4rem" }}
          ></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            <div className="relative flex flex-col items-center text-center group">
              <div className="flex items-center justify-center w-32 h-32 rounded-full bg-white border-4 border-slate-100 shadow-sm mb-6 z-10 group-hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-slate-50 text-primary">
                  <span className="material-symbols-outlined text-5xl">
                    person_add
                  </span>
                </div>
              </div>
              <div className="absolute top-0 right-0 -mr-4 mt-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full w-8 h-8 flex items-center justify-center border-4 border-white">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Connect</h3>
              <p className="text-slate-600 leading-relaxed px-4">
                Create your account and set up your property profile details in
                our secure cloud platform.
              </p>
            </div>

            <div className="relative flex flex-col items-center text-center group">
              <div className="flex items-center justify-center w-32 h-32 rounded-full bg-white border-4 border-slate-100 shadow-sm mb-6 z-10 group-hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-slate-50 text-primary">
                  <span className="material-symbols-outlined text-5xl">
                    settings_applications
                  </span>
                </div>
              </div>
              <div className="absolute top-0 right-0 -mr-4 mt-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full w-8 h-8 flex items-center justify-center border-4 border-white">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Configure
              </h3>
              <p className="text-slate-600 leading-relaxed px-4">
                Easily customize your menus, floor plans, and define staff roles
                and permission levels.
              </p>
            </div>

            <div className="relative flex flex-col items-center text-center group">
              <div className="flex items-center justify-center w-32 h-32 rounded-full bg-white border-4 border-slate-100 shadow-sm mb-6 z-10 group-hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-slate-50 text-primary">
                  <span className="material-symbols-outlined text-5xl">
                    rocket_launch
                  </span>
                </div>
              </div>
              <div className="absolute top-0 right-0 -mr-4 mt-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full w-8 h-8 flex items-center justify-center border-4 border-white">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Launch</h3>
              <p className="text-slate-600 leading-relaxed px-4">
                Go live instantly. Start processing orders, billing guests, and
                tracking revenue in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

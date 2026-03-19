export function Features() {
  const featureCategories = [
    {
      title: "Core Restaurant Operations",
      description: "Streamline your daily restaurant management with powerful, easy-to-use tools.",
      features: [
        {
          title: "Lightning-Fast Cloud POS",
          description: "Equip cashiers to handle walk-in, dining, takeaway, and delivery with speed and reliability.",
          icon: "point_of_sale",
        },
        {
          title: "Visual Floor Plan & Table Management",
          description: "Track seating and dining status in real-time with an intuitive, drag-and-drop floor plan.",
          icon: "table_restaurant",
        },
        {
          title: "Multi-Branch Support",
          description: "Manage all locations of your restaurant from a single, unified administrative dashboard.",
          icon: "store",
        },
        {
          title: "Flexible Tax & Service Charges",
          description: "Easily configure inclusive or exclusive tax settings and customizable service fees.",
          icon: "receipt_long",
        },
      ],
    },
    {
      title: "Customer Ordering Experience",
      description: "Delight your guests with modern, frictionless ways to view, order, and pay.",
      features: [
        {
          title: "Scan & Order (QR Menus)",
          description: "Offer contactless, mobile-optimized digital menus accessible instantly via QR code.",
          icon: "qr_code_scanner",
        },
        {
          title: "Customer Web App",
          description: "Enable seamless browsing, item customization, and real-time order tracking for your guests.",
          icon: "devices",
        },
        {
          title: "Dynamic Promotions & Happy Hours",
          description: "Boost sales and attract foot traffic during targeted time slots with automated discounts.",
          icon: "local_offer",
        },
        {
          title: "Multiple Payment Gateways",
          description: "Accept various payment methods effortlessly and track credit balances for your regular customers.",
          icon: "payments",
        },
      ],
    },
    {
      title: "Kitchen & Fulfillment",
      description: "Connect your front-of-house to the kitchen for perfect order execution.",
      features: [
        {
          title: "Kitchen Display System (KDS)",
          description: "Digital screens for chefs to track individual item statuses (Pending, Preparing, Done) without paper tickets.",
          icon: "kitchen",
        },
        {
          title: "Order Status Screen (OSS)",
          description: "Keep guests informed with a customer-facing digital board displaying 'Preparing' and 'Ready' order numbers.",
          icon: "display_settings",
        },
      ],
    },
    {
      title: "Security & Management",
      description: "Protect your business and understand your performance with enterprise-grade controls.",
      features: [
        {
          title: "Granular Role-Based Access Control",
          description: "Set precise permissions for Admins, Chefs, Waiters, and Cashiers to keep your data secure.",
          icon: "manage_accounts",
        },
        {
          title: "Comprehensive Analytics & Reporting",
          description: "Gain deep insights into sales trends, item popularity, and multi-branch performance metrics.",
          icon: "analytics",
        },
        {
          title: "Multi-Language Support",
          description: "Operate globally with comprehensive multi-language and Right-to-Left (RTL) capabilities.",
          icon: "language",
        },
      ],
    },
  ];

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
          
          <div className="mt-16 flex flex-col gap-20 sm:mt-20 lg:mt-24">
            {featureCategories.map((category) => (
              <div key={category.title} className="flex flex-col gap-8">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">{category.title}</h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">{category.description}</p>
                </div>
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4">
                  {category.features.map((feature) => (
                    <div key={feature.title} className="relative group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full flex flex-col">
                      <dt className="flex flex-col gap-4 text-base font-semibold leading-7 text-slate-900">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <span
                            className="material-symbols-outlined text-primary"
                            style={{ fontSize: "28px" }}
                          >
                            {feature.icon}
                          </span>
                        </div>
                        {feature.title}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-slate-600 grow">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

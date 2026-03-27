"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: "workspace_premium",
    title: "Centralized Multi-Outlet Control",
    description:
      "Manage all your restaurant locations from a single platform with unified reporting, standardized operations, and complete business visibility. Scale effortlessly while staying in control.",
  },
  {
    icon: "dashboard_customize",
    title: "Live Business Dashboard",
    description:
      "Monitor real-time sales, track performance metrics, and gain actionable insights—all in one place. Make faster, smarter decisions exactly when it matters.",
  },
  {
    icon: "support_agent",
    title: "High-Speed Billing Engine",
    description:
      "Process orders and payments in seconds with a system designed for peak-hour performance—reducing wait times and enhancing customer satisfaction.",
  },
  {
    icon: "support_agent",
    title: "24x7 Support",
    description:
      "Our dedication support team is always ready to help you , you can reach out to us via call or email anytime",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-surface-container-low/50" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-on-surface">
            Why Choose
            <span className="text-primary italic"> Tech Resto</span>
          </h2>
          <p className="text-on-surface-variant max-w-7xl mx-auto text-lg leading-relaxed">
            Designed for Restaurants That Aim to Lead Tech Resto empowers
            restaurants with intelligent tools, seamless automation, and
            complete control over operations—so you stay one step ahead. From
            managing multiple outlets to delivering consistent service,
            everything is built to support your growth journey. Because leaders
            don&apos;t follow trends — they set them.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-10 bg-surface-container-lowest rounded-3xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 border border-transparent hover:border-primary/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-container/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {reason.icon}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-on-surface">
                {reason.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-base">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

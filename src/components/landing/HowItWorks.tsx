"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect",
      description:
        "Create your account and set up your property profile details in our secure cloud platform.",
      icon: "person_add",
    },
    {
      number: "02",
      title: "Configure",
      description:
        "Easily customize your menus, floor plans, and define staff roles and permission levels.",
      icon: "settings_applications",
    },
    {
      number: "03",
      title: "Launch",
      description:
        "Go live instantly. Start processing orders, billing guests, and tracking revenue in real-time.",
      icon: "rocket_launch",
    },
  ];

  return (
    <section
      className="py-24 bg-zinc-900 relative overflow-hidden"
      id="how-it-works"
    >
      <div className="mx-auto max-w-7xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-24"
        >
          <h2 className="text-base font-bold leading-7 text-primary uppercase tracking-widest font-headline">
            Simple Onboarding
          </h2>
          <p className="mt-2 text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-headline">
            How It <span className="text-primary italic">Works</span>
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-400 font-body">
            Where Speed Meets Simplicity — We simplify complex setups into a
            fast, effortless onboarding experience, ensuring you are not just
            installing software but stepping into a system that works instantly,
            intelligently, and seamlessly with your business. It is built to
            think like your operations, every click is designed to save time and
            every feature is crafted to perform, giving you clarity, control,
            and complete confidence from day one.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -z-10 hidden lg:block -translate-y-[100px]"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8"
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="flex items-center justify-center w-32 h-32 rounded-full bg-zinc-800 hover:bg-zinc-700 border-4 border-white/5 shadow-2xl mb-8 z-10 transition-all duration-500 group-hover:scale-110">
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-zinc-900 text-primary shadow-inner">
                    <span className="material-symbols-outlined text-5xl">
                      {step.icon}
                    </span>
                  </div>
                </div>

                <div className="absolute top-0 right-1/2 translate-x-[60px] lg:translate-x-[70px] -mt-2 bg-primary text-white text-sm font-black px-3 py-1 rounded-full shadow-lg border-2 border-zinc-900 z-20 font-headline">
                  {step.number}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 font-headline tracking-tight group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed px-4 font-body">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

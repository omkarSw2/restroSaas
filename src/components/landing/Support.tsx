"use client";

import { motion } from "framer-motion";

export function Support() {
  return (
    <section className="py-10 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-surface-container-lowest rounded-3xl p-12 lg:p-20 shadow-sm grid lg:grid-cols-2 gap-16 items-center border border-outline-variant/10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-headline text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-on-surface">
              24/7 Support &{" "}
              <span className="text-primary font-bold">Always-On</span> Training
            </h2>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
              We don&apos;t just sell software; we&apos;re your partner in
              success. Get live human assistance anytime, plus a library of
              training for your new hires.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  check_circle
                </span>
                <span className="font-semibold text-on-surface">
                  Local on-site installation
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  check_circle
                </span>
                <span className="font-semibold text-on-surface">
                  Live phone support in &lt; 30 seconds
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  check_circle
                </span>
                <span className="font-semibold text-on-surface">
                  Interactive video onboarding
                </span>
              </li>
            </ul>
            <button className="bg-zinc-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-black transition-all">
              Contact Support
            </button>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              alt="Support Team Member"
              className="rounded-2xl h-64 w-full object-cover shadow-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwxwWh5vs0C-5uB4cXkm_OUAEBcJOsdCoBrssTOS1abt9de6U6uIedasADiCXNfuta3Jd_Tj-BFJnRL1wFwDVVZ2tHjxEw1P9GJ5Rn0GxVw4OSoTPyfH-upEunMNCEVnat8pjEq_6BAEy43ribwWkAn65Go-5pVagdqy-pvbUoYzbFCTz9rQXOQiiwJHrk6rCug-3PdSax_bPTtWIv1SXdYUeFuozWzHInDt10Fu1SM_RRvJj1db6kb0ZOEu87ugpPFmIjiIkTfGU"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              alt="Team Handshake"
              className="rounded-2xl h-64 w-full object-cover mt-12 shadow-lg"
              src="images/handShake.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

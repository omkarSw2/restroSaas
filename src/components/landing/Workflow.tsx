"use client";

import { motion } from "framer-motion";

export function Workflow() {
  return (
    <section className="bg-zinc-900 text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-headline text-4xl lg:text-5xl font-extrabold mb-6">Streamline Your Operations</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Kinetic Ledger bridges the gap between Front-of-House and Kitchen, reducing ticket times by 40% on average.
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative Glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-600/20 blur-3xl rounded-full"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-800 rounded-3xl p-4 shadow-2xl border border-zinc-700"
          >
            <img 
              alt="Kitchen Display System" 
              className="w-full h-auto rounded-2xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF9Jmi6YtBX-OCVQZeXF1oPue5hYUodfJKbqn16BgS_8-4MD6Y5HoZHAtnzuIHLGxhiX2EwGYZpvvfYMwYbXDHSnBlmV4DjMuVTLOiK1zXZDf2s0kjt_BdMqHHrq6ZZGe8n9Pg9-RyT0DVOq0Uzs-44Y5_rypgb0P1FG129UEpfsHDpqbSGJaydqL_MGprCy31jI0_3NDnLBUuwKyWOY88z3h_kvXsNYFjIWNu8KTUiR-RmWhf32nyi_pfUHtEn7c9nM-3yvfUwUo"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="flex gap-4">
              <span className="text-orange-500 font-bold text-2xl font-headline">01.</span>
              <div>
                <h4 className="font-bold text-xl mb-2">Order Entry</h4>
                <p className="text-zinc-400 text-sm">Lightning fast selection and modifiers.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-orange-500 font-bold text-2xl font-headline">02.</span>
              <div>
                <h4 className="font-bold text-xl mb-2">Instant Prep</h4>
                <p className="text-zinc-400 text-sm">Tickets fire directly to relevant stations.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-orange-500 font-bold text-2xl font-headline">03.</span>
              <div>
                <h4 className="font-bold text-xl mb-2">Sync & Pay</h4>
                <p className="text-zinc-400 text-sm">Real-time status updates at the table.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

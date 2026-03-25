"use client";

import Link from "next/link";

export function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto font-headline font-semibold tracking-tight">
        <div className="text-2xl font-black italic text-zinc-900">Kinetic Ledger</div>
        <div className="hidden md:flex gap-8 items-center">
          <Link className="text-zinc-600 hover:text-primary transition-colors duration-200" href="#features">Features</Link>
          <Link className="text-zinc-600 hover:text-primary transition-colors duration-200" href="#pricing">Pricing</Link>
          <Link className="text-zinc-600 hover:text-primary transition-colors duration-200" href="#">Testimonials</Link>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-xl kinetic-gradient active:scale-95 duration-150 transition-all font-bold">
            Get Started
          </button>
        </div>
        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}

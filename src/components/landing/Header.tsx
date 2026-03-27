"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Plans", href: "#pricing" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto font-headline font-semibold tracking-tight">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/TechRestoPOSLogo.png"
            alt="TechResto Logo"
            width={200}
            height={100}
            priority
            className="h-8 w-auto md:h-20"
          />
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              className="text-zinc-600 hover:text-primary transition-colors duration-200"
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-primary text-on-primary px-6 py-2 rounded-xl techresto-gradient active:scale-95 duration-150 transition-all font-bold"
          >
            Book Demo
          </Link>
        </div>
        <button
          className="md:hidden text-on-surface z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 shadow-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-bold text-zinc-900 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="w-full py-4 bg-primary text-on-primary rounded-xl text-center font-bold text-xl techresto-gradient"
                onClick={() => setIsOpen(false)}
              >
                Book Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

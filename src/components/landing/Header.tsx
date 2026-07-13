"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { trackCTAClick } from "@/utils/analytics";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Features", href: "/#features" },
    { name: "Plans", href: "/#pricing" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/95 shadow-md py-2.5 dark:bg-zinc-950/95 border-b border-zinc-100 dark:border-zinc-800"
        : "bg-white/80 backdrop-blur-xl border-b border-zinc-100/50 py-3.5 dark:bg-zinc-950/80"
    }`}>
      <div className="flex justify-between items-center px-8 max-w-7xl mx-auto font-headline font-semibold tracking-tight">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/TechRestoPOSLogo.svg"
            alt="TechResto Logo"
            width={200}
            height={100}
            priority
            className="h-8 w-auto md:h-10"
          />
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              className="text-[15px] font-medium text-zinc-600 hover:text-primary transition-colors duration-200"
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => trackCTAClick("Book Demo", "Header Desktop")}
            className="bg-primary text-on-primary px-6 py-2 rounded-xl techresto-gradient active:scale-95 duration-150 transition-all font-bold"
          >
            Book Demo
          </Link>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/#contact"
            onClick={() => trackCTAClick("Book Demo", "Header Mobile Sticky")}
            className="bg-primary text-on-primary px-4 py-2 rounded-xl techresto-gradient active:scale-95 duration-150 transition-all font-bold text-sm"
          >
            Book Demo
          </Link>
          <button
            className="text-on-surface z-50 p-1 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
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
                href="/#contact"
                className="w-full py-4 bg-primary text-on-primary rounded-xl text-center font-bold text-xl techresto-gradient"
                onClick={() => {
                  setIsOpen(false);
                  trackCTAClick("Book Demo", "Header Mobile");
                }}
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

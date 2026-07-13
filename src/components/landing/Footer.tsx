import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-white/5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-12 max-w-7xl mx-auto font-body text-sm leading-6">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-6">
            <Image
              src="/TechRestoFooterLogo1.svg"
              alt="TechResto Logo"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <p className="text-zinc-400 mb-6">
            The high-performance POS built for modern restaurants.
          </p>
          <div className="flex gap-4">
            <Link
              className="w-10 h-10 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:scale-110 active:scale-95 transition-all duration-200"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">public</span>
            </Link>
            <Link
              className="w-10 h-10 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:scale-110 active:scale-95 transition-all duration-200"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">alternate_email</span>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-4 uppercase tracking-widest text-xs">
            Product
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                className="text-zinc-300 hover:text-primary transition-colors"
                href="#features"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-300 hover:text-primary transition-colors"
                href="#pricing"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-4 uppercase tracking-widest text-xs">
            Company
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                className="text-zinc-300 hover:text-primary transition-colors"
                href="#"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-300 hover:text-primary transition-colors"
                href="#"
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-300 hover:text-primary transition-colors"
                href="#"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-4 uppercase tracking-widest text-xs">
            Legal
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                className="text-zinc-300 hover:text-primary transition-colors"
                href="/terms-of-service"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-300 hover:text-primary transition-colors"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-300 hover:text-primary transition-colors"
                href="/refund-policy"
              >
                Cancellation & Refund Policy
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-300 hover:text-primary transition-colors"
                href="/data-processing-agreement"
              >
                Data Processing Agreement
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-8 py-6 border-t border-zinc-800 text-center max-w-7xl mx-auto">
        <p className="text-zinc-500 text-xs italic opacity-80">
          © {new Date().getFullYear()} TechResto POS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

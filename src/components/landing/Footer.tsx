import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-white/5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-12 max-w-7xl mx-auto font-body text-sm leading-6">
        <div className="col-span-2 md:col-span-1">
          <div className="text-xl font-bold text-white mb-6 font-headline">
            Kinetic Ledger
          </div>
          <p className="text-zinc-400 mb-6">
            High-performance point of sale for the next generation of commerce.
          </p>
          <div className="flex gap-4">
            <Link
              className="text-zinc-400 hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">public</span>
            </Link>
            <Link
              className="text-zinc-400 hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">alternate_email</span>
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
                className="text-zinc-400 hover:text-white transition-colors"
                href="#features"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-400 hover:text-white transition-colors"
                href="#"
              >
                Hardware
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-400 hover:text-white transition-colors"
                href="#"
              >
                Integrations
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-400 hover:text-white transition-colors"
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
                className="text-zinc-400 hover:text-white transition-colors"
                href="#"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-400 hover:text-white transition-colors"
                href="#"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-400 hover:text-white transition-colors"
                href="#"
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-400 hover:text-white transition-colors"
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
                className="text-zinc-400 hover:text-white transition-colors"
                href="#"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-400 hover:text-white transition-colors"
                href="#"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-400 hover:text-white transition-colors"
                href="#"
              >
                Security
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-8 py-6 border-t border-zinc-800 text-center max-w-7xl mx-auto">
        <p className="text-zinc-500 text-xs italic opacity-80">
          © 2024 Kinetic Ledger POS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

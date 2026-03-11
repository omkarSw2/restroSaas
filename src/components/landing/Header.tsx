import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
            <span className="material-symbols-outlined text-[20px]">
              point_of_sale
            </span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            POS SaaS
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            href="#how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            href="#faq"
          >
            FAQs
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            className="hidden md:block text-sm font-medium text-slate-900 hover:text-primary transition-colors"
            href="#"
          >
            Log in
          </Link>
          <Button className="rounded-lg shadow-sm hover:bg-primary-dark transition-all">
            Quick Demo
          </Button>
        </div>
      </div>
    </header>
  );
}

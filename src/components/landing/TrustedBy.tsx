"use client";

const brands = [
  "BistroNext",
  "Lumina Grill",
  "Urban Harvest",
  "Steel & Vine",
  "Terra Cafe"
];

export function TrustedBy() {
  return (
    <section className="bg-surface-container-low py-16">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-10">
          Trusted by over 10,000+ local favorites
        </p>
        <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {brands.map((brand) => (
            <span key={brand} className="text-2xl font-black font-headline text-on-surface">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

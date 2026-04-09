import Link from "next/link";
import { brands, getTotalSubs } from "../data/products";

const sectorColors: Record<string, string> = {
  lighting: "bg-amber-100 text-amber-700",
  switchgear: "bg-purple-100 text-purple-700",
  cables: "bg-red-100 text-red-700",
  accessories: "bg-green-100 text-green-700",
};

const featured = brands.slice(0, 6);

export default function ProductsPreview() {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-accent font-bold text-xs tracking-widest uppercase">Our Catalog</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-2">Our Products</h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-accent rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Browse our extensive range of electrical products from 12+ trusted global brands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {featured.map((brand) => {
            const totalSubs = getTotalSubs(brand);
            return (
              <Link
                key={brand.slug}
                href={`/products/${brand.slug}`}
                className="group block bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 hover:shadow-xl hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Red hover bar top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-sm font-extrabold text-white shrink-0">
                    {brand.abbr}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-black group-hover:text-accent transition-colors text-base truncate">
                      {brand.name}
                    </h3>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase ${sectorColors[brand.sector]}`}>
                      {brand.sectorLabel}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 text-xs text-gray-500 mb-3">
                  <span className="bg-gray-100 px-2.5 py-1 rounded-full">{brand.categories.length} categories</span>
                  <span className="bg-gray-100 px-2.5 py-1 rounded-full">{totalSubs} products</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {brand.categories.slice(0, 2).map((cat) => (
                    <span key={cat.slug} className="text-[10px] px-2 py-1 bg-gray-50 text-gray-600 rounded-full border border-gray-100">
                      {cat.name}
                    </span>
                  ))}
                  {brand.categories.length > 2 && (
                    <span className="text-[10px] px-2 py-1 bg-gray-50 text-gray-600 rounded-full border border-gray-100">
                      +{brand.categories.length - 2} more
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-bold text-accent group-hover:gap-2 transition-all">
                  View Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-bold text-sm rounded-full hover:bg-accent transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
          >
            Explore All Brands
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

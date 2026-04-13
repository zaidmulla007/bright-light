"use client";

import Link from "next/link";
import { useLang } from "../context/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductSidebar from "../components/ProductSidebar";
import { brands, getTotalSubs } from "../data/products";

const sectorColors: Record<string, string> = {
  lighting: "bg-amber-100 text-amber-700",
  switchgear: "bg-purple-100 text-purple-700",
  cables: "bg-red-100 text-red-700",
  accessories: "bg-green-100 text-green-700",
};

export default function ProductsPage() {
  const { t, n } = useLang();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <section className="py-8 sm:py-10 md:py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bright-light-llc4.jpg')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-white/70 text-xs sm:text-sm mb-3 sm:mb-4">
            <Link href="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            <span className="text-white font-semibold">{t.productsPage.breadcrumb}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">{t.productsPage.title}</h1>
          <p className="mt-3 sm:mt-4 text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            {t.productsPage.description}
          </p>
        </div>
      </section>

      <section className="py-6 sm:py-8 md:py-10 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <ProductSidebar />

            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                {brands.map((brand) => {
                  const totalSubs = getTotalSubs(brand);
                  return (
                    <Link
                      key={brand.slug}
                      href={`/products/${brand.slug}`}
                      className="group block bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gray-50 rounded-xl flex items-center justify-center text-xs sm:text-sm font-extrabold text-accent border border-gray-100 shrink-0">
                          {brand.abbr}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-bold text-gray-800 group-hover:text-accent transition-colors text-sm truncate">
                            {brand.name}
                          </h3>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase ${sectorColors[brand.sector]}`}>
                            {brand.sectorLabel}
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-2 text-xs text-gray-500 mb-3">
                        <span className="bg-gray-50 px-2 py-0.5 rounded">{n(brand.categories.length)} {t.productsPage.categories}</span>
                        <span className="bg-gray-50 px-2 py-0.5 rounded">{n(totalSubs)} {t.productsPage.products}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {brand.categories.slice(0, 3).map((cat) => (
                          <span key={cat.slug} className="text-[10px] px-2 py-1 bg-gray-50 text-gray-600 rounded-full">
                            {cat.name}
                          </span>
                        ))}
                        {brand.categories.length > 3 && (
                          <span className="text-[10px] px-2 py-1 bg-gray-50 text-gray-600 rounded-full">
                            +{n(brand.categories.length - 3)} {t.productsPage.more}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all">
                        {t.productsPage.viewProducts}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

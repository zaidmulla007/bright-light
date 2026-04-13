"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useLang } from "@/app/context/LanguageContext";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProductSidebar from "@/app/components/ProductSidebar";
import { getBrandBySlug, getTotalSubs } from "@/app/data/products";

export default function BrandClient({ brandSlug }: { brandSlug: string }) {
  const brand = getBrandBySlug(brandSlug);
  if (!brand) return notFound();

  const totalProducts = getTotalSubs(brand);
  const { t, n } = useLang();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-[#8B0000] via-accent to-[#8B0000] py-8 sm:py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-white/60 text-xs sm:text-sm mb-3 sm:mb-4 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
            <ChevronSvg />
            <Link href="/products" className="hover:text-white transition-colors">{t.nav.products}</Link>
            <ChevronSvg />
            <span className="text-white">{brand.name}</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-11 h-11 sm:w-14 sm:h-14 bg-white rounded-xl flex items-center justify-center text-accent font-extrabold text-sm sm:text-lg shrink-0">
              {brand.abbr}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{brand.name}</h1>
              <p className="text-white/60 text-xs sm:text-sm mt-1">
                {n(totalProducts)} {t.brandPage.products} &middot; {n(brand.categories.length)} {t.brandPage.categories} &middot; {brand.sectorLabel}
              </p>
            </div>
          </div>
          <p className="mt-3 sm:mt-4 text-white/70 max-w-2xl text-sm sm:text-base">{brand.description}</p>
        </div>
      </section>

      <section className="py-6 sm:py-8 md:py-10 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <ProductSidebar activeBrand={brandSlug} />

            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                {brand.categories.map((cat) => (
                  <a
                    key={cat.slug}
                    href={`#${cat.slug}`}
                    className="text-xs px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-accent/40 hover:text-accent hover:bg-red-50/50 transition-all font-medium"
                  >
                    {cat.name} ({n(cat.subs.length)})
                  </a>
                ))}
              </div>

              {brand.categories.map((cat) => (
                <div key={cat.slug} id={cat.slug} className="mb-10 sm:mb-12 last:mb-0">
                  <div className="flex items-center gap-3 mb-4 sm:mb-5">
                    <h2 className="text-base sm:text-lg font-bold text-gray-800">{cat.name}</h2>
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-[10px] sm:text-xs text-gray-500 bg-white px-2 sm:px-3 py-1 rounded-full border border-gray-200">
                      {n(cat.subs.length)} {t.brandPage.products}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                    {cat.subs.map((sub) => (
                      <Link
                        key={sub.slug}
                        href={`/products/${brand.slug}/${cat.slug}/${sub.slug}`}
                        className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 transition-all duration-300"
                      >
                        <div className="relative h-32 sm:h-40 overflow-hidden bg-gray-100 flex items-center justify-center p-6">
                          <span className="text-3xl sm:text-4xl font-extrabold text-gray-200 group-hover:text-accent/20 transition-colors">
                            {brand.abbr}
                          </span>
                          <div className="absolute top-3 left-3">
                            <span className="text-[10px] px-2 py-0.5 bg-white/90 backdrop-blur-sm text-accent font-semibold rounded-full">
                              {brand.name}
                            </span>
                          </div>
                        </div>
                        <div className="p-3 sm:p-4">
                          <h3 className="font-bold text-gray-800 group-hover:text-accent transition-colors text-sm mb-1">
                            {sub.name}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-gray-500 mb-2 sm:mb-3">
                            {cat.name} — {brand.name}
                          </p>
                          <div className="flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all">
                            {t.brandPage.viewDetails}
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ChevronSvg() {
  return (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}

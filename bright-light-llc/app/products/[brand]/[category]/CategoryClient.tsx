"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useLang } from "@/app/context/LanguageContext";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProductSidebar from "@/app/components/ProductSidebar";
import { getCategoryBySlug } from "@/app/data/products";

export default function CategoryClient({
  brandSlug,
  categorySlug,
}: {
  brandSlug: string;
  categorySlug: string;
}) {
  const result = getCategoryBySlug(brandSlug, categorySlug);
  if (!result) return notFound();

  const { brand, category } = result;
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
            <Link href={`/products/${brand.slug}`} className="hover:text-white transition-colors">{brand.name}</Link>
            <ChevronSvg />
            <span className="text-white">{category.name}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{category.name}</h1>
          <p className="mt-2 text-white/60 text-xs sm:text-sm">
            {t.categoryPage.by} {brand.name} &middot; {n(category.subs.length)} {t.categoryPage.products}
          </p>
        </div>
      </section>

      <section className="py-6 sm:py-8 md:py-10 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <ProductSidebar activeBrand={brandSlug} activeCategory={categorySlug} />

            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-5 sm:mb-6">
                {category.name} — {brand.name}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                {category.subs.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/products/${brand.slug}/${category.slug}/${sub.slug}`}
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
                        {category.name} — {brand.name}
                      </p>
                      <div className="flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all">
                        {t.categoryPage.viewDetails}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 sm:mt-8">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4">
                  {t.categoryPage.moreFrom} {brand.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {brand.categories
                    .filter((c) => c.slug !== categorySlug)
                    .map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/products/${brand.slug}/${cat.slug}`}
                        className="text-xs px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-accent/40 hover:text-accent transition-all"
                      >
                        {cat.name}
                      </Link>
                    ))}
                </div>
              </div>

              <div className="mt-6 sm:mt-8 bg-gradient-to-r from-accent to-[#8B0000] rounded-2xl p-5 sm:p-8 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{t.categoryPage.needProduct}</h3>
                <p className="text-white/70 text-xs sm:text-sm mb-4">
                  {t.categoryPage.needProductDesc}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="tel:+971543078535" className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-accent text-white font-semibold text-xs sm:text-sm rounded-xl hover:bg-accent-light transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    {t.categoryPage.callUs}
                  </a>
                  <a href="mailto:jayprakash@brightlight.ae" className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 border border-white/30 text-white font-semibold text-xs sm:text-sm rounded-xl hover:bg-white/10 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    {t.categoryPage.emailUs}
                  </a>
                </div>
              </div>
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

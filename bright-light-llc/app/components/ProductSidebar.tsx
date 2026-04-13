"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "../context/LanguageContext";
import { brands } from "../data/products";

interface Props {
  activeBrand?: string;
  activeCategory?: string;
}

export default function ProductSidebar({ activeBrand, activeCategory }: Props) {
  const [search, setSearch] = useState("");
  const [expandedBrands, setExpandedBrands] = useState<string[]>(
    activeBrand ? [activeBrand] : []
  );
  const { t } = useLang();

  const toggleBrand = (slug: string) => {
    setExpandedBrands((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const filtered = brands.filter((b) => {
    if (!search) return true;
    const q = search.toLowerCase();
    if (b.name.toLowerCase().includes(q)) return true;
    return b.categories.some(
      (c) => c.name.toLowerCase().includes(q) || c.subs.some((s) => s.name.toLowerCase().includes(q))
    );
  });

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden lg:sticky lg:top-20">
        <div className="bg-primary p-3 sm:p-4">
          <h3 className="text-white font-bold text-sm">{t.sidebar.browseByBrand}</h3>
        </div>

        <div className="p-3 border-b border-gray-100">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              placeholder={t.sidebar.searchBrands}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-accent transition"
            />
          </div>
        </div>

        <div className="max-h-[40vh] lg:max-h-[60vh] overflow-y-auto">
          {filtered.map((brand) => {
            const isExpanded = expandedBrands.includes(brand.slug);
            const isActive = activeBrand === brand.slug;

            return (
              <div key={brand.slug} className="border-b border-gray-50 last:border-0">
                <div className={`flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 transition-colors ${isActive ? "bg-red-50" : ""}`}>
                  <Link
                    href={`/products/${brand.slug}`}
                    className="flex items-center gap-2.5 flex-1 min-w-0"
                  >
                    <span className={`w-7 h-7 rounded-md flex items-center justify-center text-[9px] font-extrabold shrink-0 ${isActive ? "bg-accent text-white" : "bg-gray-100 text-accent"}`}>
                      {brand.abbr}
                    </span>
                    <span className={`text-xs font-semibold truncate ${isActive ? "text-accent" : "text-gray-700"}`}>
                      {brand.name}
                    </span>
                  </Link>
                  <button onClick={() => toggleBrand(brand.slug)} className="p-1 shrink-0">
                    <svg className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                </div>

                {isExpanded && (
                  <div className="pl-7 pr-3 pb-2 space-y-0.5">
                    {brand.categories.map((cat) => {
                      const isCatActive = activeBrand === brand.slug && activeCategory === cat.slug;
                      return (
                        <Link
                          key={cat.slug}
                          href={`/products/${brand.slug}/${cat.slug}`}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs transition-colors ${
                            isCatActive
                              ? "bg-accent text-white font-semibold"
                              : "text-gray-500 hover:bg-gray-50 hover:text-accent"
                          }`}
                        >
                          <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                          {cat.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

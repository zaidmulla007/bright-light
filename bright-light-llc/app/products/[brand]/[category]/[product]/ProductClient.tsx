"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProductSidebar from "@/app/components/ProductSidebar";
import { getProductBySlug } from "@/app/data/products";
import { WhatsAppIcon, PhoneIcon, EmailIcon } from "@/app/components/Icons";

export default function ProductClient({
  brandSlug,
  categorySlug,
  productSlug,
}: {
  brandSlug: string;
  categorySlug: string;
  productSlug: string;
}) {
  const result = getProductBySlug(brandSlug, categorySlug, productSlug);
  if (!result) return notFound();

  const { brand, category, product } = result;

  const related = category.subs.filter((s) => s.slug !== productSlug);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-[#8B0000] via-accent to-[#8B0000] py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-white/60 text-[10px] sm:text-xs md:text-sm flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronSvg />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronSvg />
            <Link href={`/products/${brand.slug}`} className="hover:text-white transition-colors">{brand.name}</Link>
            <ChevronSvg />
            <Link href={`/products/${brand.slug}/${category.slug}`} className="hover:text-white transition-colors">{category.name}</Link>
            <ChevronSvg />
            <span className="text-white">{product.name}</span>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 md:py-10 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <ProductSidebar activeBrand={brandSlug} activeCategory={categorySlug} />

            <div className="flex-1">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6 sm:mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="p-4 sm:p-6">
                    <div className="relative h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                      <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-200">{brand.abbr}</span>
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] px-2.5 py-1 bg-white/90 backdrop-blur-sm text-accent font-semibold rounded-full">
                          {brand.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 md:border-l border-gray-100">
                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                      <span className="text-[10px] px-2.5 py-1 bg-red-50 text-accent font-semibold rounded-full">{brand.name}</span>
                      <span className="text-[10px] px-2.5 py-1 bg-gray-100 text-gray-600 font-semibold rounded-full">{category.name}</span>
                      <span className="text-[10px] px-2.5 py-1 bg-gray-100 text-gray-600 font-semibold rounded-full">{brand.sectorLabel}</span>
                    </div>

                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
                      {product.name}
                    </h1>

                    <p className="text-gray-500 text-sm leading-relaxed mb-3 sm:mb-4">
                      High-quality {product.name.toLowerCase()} from {brand.name}, designed for professional use in
                      construction, industrial, and maintenance applications. Built to deliver reliable performance
                      and durability.
                    </p>

                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                      <h4 className="text-xs sm:text-sm font-bold text-gray-800 mb-2">Product Details</h4>
                      <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs">
                        <div><span className="text-gray-400">Brand:</span> <span className="font-semibold text-gray-700">{brand.name}</span></div>
                        <div><span className="text-gray-400">Category:</span> <span className="font-semibold text-gray-700">{category.name}</span></div>
                        <div><span className="text-gray-400">Sector:</span> <span className="font-semibold text-gray-700">{brand.sectorLabel}</span></div>
                        <div><span className="text-gray-400">Origin:</span> <span className="font-semibold text-gray-700">International</span></div>
                      </div>
                    </div>

                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                      Available for immediate supply across the UAE. Contact us for pricing, bulk orders, and technical specifications.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={`https://wa.me/971543078535?text=Hi, I'm interested in ${product.name} from ${brand.name}. Please share details and pricing.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-green-500 text-white font-semibold text-xs sm:text-sm rounded-xl hover:bg-green-600 transition-colors"
                      >
                        <WhatsAppIcon />
                        WhatsApp Enquiry
                      </a>
                      <a
                        href="tel:+971543078535"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-accent text-white font-semibold text-xs sm:text-sm rounded-xl hover:bg-accent-light transition-colors"
                      >
                        <PhoneIcon />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                  Enquire About {product.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">
                  Fill the form below and our team will get back to you with pricing and availability.
                </p>
                <form
                  onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your enquiry has been sent. We will contact you shortly."); (e.target as HTMLFormElement).reset(); }}
                  className="space-y-3 sm:space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <input type="text" placeholder="Your Name *" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-accent transition-colors" />
                    <input type="email" placeholder="Email Address *" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <input type="tel" placeholder="Phone Number *" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-accent transition-colors" />
                    <input type="text" placeholder="Company Name" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <input type="text" value={`${product.name} — ${brand.name}`} readOnly className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-red-50 border border-accent/20 rounded-xl text-xs sm:text-sm text-accent font-medium" />
                  <textarea placeholder="Your requirements (quantity, specifications, etc.)" rows={4} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-accent transition-colors resize-none" />
                  <button type="submit" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-accent text-white font-semibold text-xs sm:text-sm rounded-xl hover:bg-accent-light transition-colors">
                    <EmailIcon />
                    Submit Enquiry
                  </button>
                </form>
              </div>

              {related.length > 0 && (
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4 sm:mb-5">
                    More in {category.name}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                    {related.slice(0, 6).map((sub) => (
                      <Link
                        key={sub.slug}
                        href={`/products/${brand.slug}/${category.slug}/${sub.slug}`}
                        className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 transition-all duration-300"
                      >
                        <div className="relative h-28 sm:h-36 overflow-hidden bg-gray-100 flex items-center justify-center p-4">
                          <span className="text-3xl font-extrabold text-gray-200 group-hover:text-accent/20 transition-colors">{brand.abbr}</span>
                        </div>
                        <div className="p-3 sm:p-4">
                          <h4 className="font-bold text-gray-800 group-hover:text-accent transition-colors text-sm mb-1">{sub.name}</h4>
                          <div className="flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all">
                            View Details
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
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

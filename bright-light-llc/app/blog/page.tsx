"use client";

import Link from "next/link";
import { useLang } from "../context/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { blogs } from "../data/blogs";

export default function BlogPage() {
  const { t, n } = useLang();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-10 sm:py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bright-light-llc4.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-white/70 text-xs sm:text-sm mb-3 sm:mb-4">
            <Link href="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            <span className="text-white font-semibold">{t.blog.breadcrumb}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{t.blog.title}</h1>
          <p className="mt-3 sm:mt-4 text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            {t.blog.description}
          </p>
        </div>
      </section>

      <div className="mt-5" />

      <section className="py-6 sm:py-8 md:py-10 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-accent/30 transition-all duration-300"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={t.blog[blog.titleKey]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] px-2.5 py-1 bg-accent text-white font-semibold rounded-full">
                      {n(blog.readTime)} {t.blog.minRead}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[10px] sm:text-xs text-gray-400 mb-2">{t.blog[blog.dateKey]}</p>
                  <h3 className="font-bold text-gray-800 group-hover:text-accent transition-colors text-base sm:text-lg mb-2">
                    {t.blog[blog.titleKey]}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-4">
                    {t.blog[blog.excerptKey]}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                    {t.blog.readMore}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mb-5" />

      <Footer />
    </div>
  );
}

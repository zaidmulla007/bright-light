"use client";

import Link from "next/link";
import { useLang } from "../context/LanguageContext";
import { blogs } from "../data/blogs";

export default function BlogPreview() {
  const { t, n } = useLang();
  const featured = blogs.slice(0, 3);

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-accent font-bold text-xs tracking-widest uppercase">{t.blog.label}</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-2">{t.blog.title}</h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-accent rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            {t.blog.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {featured.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-accent/30 transition-all duration-300"
            >
              <div className="relative h-44 sm:h-52 overflow-hidden">
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
              <div className="p-4 sm:p-5">
                <p className="text-[10px] sm:text-xs text-gray-400 mb-2">{t.blog[blog.dateKey]}</p>
                <h3 className="font-bold text-gray-800 group-hover:text-accent transition-colors text-sm sm:text-base mb-2 line-clamp-2">
                  {t.blog[blog.titleKey]}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 mb-3">
                  {t.blog[blog.excerptKey]}
                </p>
                <div className="flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all">
                  {t.blog.readMore}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-bold text-sm rounded-full hover:bg-black transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
          >
            {t.blog.exploreAll}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

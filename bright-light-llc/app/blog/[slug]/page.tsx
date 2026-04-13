"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLang } from "@/app/context/LanguageContext";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getBlogBySlug, blogs } from "@/app/data/blogs";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const blog = getBlogBySlug(slug);
  if (!blog) return notFound();

  const { t, n } = useLang();
  const related = blogs.filter((b) => b.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero banner with blog image */}
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] overflow-hidden">
        <img
          src={blog.image}
          alt={t.blog[blog.titleKey]}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-white/60 text-xs sm:text-sm mb-3 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
              <ChevronSvg />
              <Link href="/blog" className="hover:text-white transition-colors">{t.blog.breadcrumb}</Link>
              <ChevronSvg />
              <span className="text-white">{t.blog[blog.titleKey]}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {t.blog[blog.titleKey]}
            </h1>
            <div className="flex items-center gap-3 mt-3 sm:mt-4">
              <span className="text-xs sm:text-sm text-white/60">{t.blog[blog.dateKey]}</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="text-xs sm:text-sm text-white/60">{n(blog.readTime)} {t.blog.minRead}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog content */}
      <section className="py-8 sm:py-10 md:py-14 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-8 md:p-10 shadow-sm">
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
              {t.blog[blog.excerptKey]}
            </p>
            <div className="h-px bg-gray-200 mb-6" />
            {t.blog[blog.contentKey].split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related blogs */}
          {related.length > 0 && (
            <div className="mt-8 sm:mt-12">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-5">{t.blog.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {related.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/blog/${b.slug}`}
                    className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <img
                        src={b.image}
                        alt={t.blog[b.titleKey]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 sm:p-5">
                      <p className="text-[10px] sm:text-xs text-gray-400 mb-1.5">{t.blog[b.dateKey]}</p>
                      <h4 className="font-bold text-gray-800 group-hover:text-accent transition-colors text-sm mb-2 line-clamp-2">
                        {t.blog[b.titleKey]}
                      </h4>
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
            </div>
          )}
        </div>
      </section>

      <div className="mb-5" />

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

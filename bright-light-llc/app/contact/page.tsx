"use client";

import Link from "next/link";
import { useLang } from "../context/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export default function ContactPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-10 sm:py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bright-light-llc4.jpg')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-white/70 text-xs sm:text-sm mb-3 sm:mb-4">
            <Link href="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            <span className="text-white font-semibold">{t.contactPage.breadcrumb}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{t.contactPage.title}</h1>
          <p className="mt-3 sm:mt-4 text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            {t.contactPage.description}
          </p>
        </div>
      </section>

      <div className="mt-5" />

      <ContactSection />

      <div className="mb-5" />

      <Footer />
    </div>
  );
}

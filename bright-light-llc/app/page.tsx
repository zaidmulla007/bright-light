"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLang } from "./context/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import ProductsPreview from "./components/ProductsPreview";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import BlogPreview from "./components/BlogPreview";

const brandImages = [
  "/brands/png (1).jpg",
  "/brands/png (2).jpg",
  "/brands/png (2).png",
  "/brands/png (3).png",
  "/brands/png (4).png",
  "/brands/png (5).png",
  "/brands/png (6).png",
  "/brands/png (7).png",
  "/brands/png (8).png",
  "/brands/png (9).png",
  "/brands/png (10).png",
  "/brands/png (11).png",
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { t } = useLang();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero - Full width video banner */}
      <section id="home" className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-screen w-full overflow-hidden bg-black">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bright-light.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl animate-[heroFadeIn_1s_ease-out]">
              <div className="mb-3 sm:mb-5">
                <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold text-[8px] sm:text-[10px] md:text-xs tracking-widest uppercase">
                  {t.hero.badge}
                </span>
              </div>

              <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-1.5 sm:mb-3 leading-[1.15] tracking-tight">
                {t.hero.title}
              </h1>

              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white/80 mb-3 sm:mb-6">
                {t.hero.subtitle}
              </h2>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 mb-5 sm:mb-8 max-w-lg leading-relaxed">
                {t.hero.description}
              </p>

              <div className="flex flex-wrap gap-2.5 sm:gap-4">
                <a
                  href="#contact"
                  className="px-5 sm:px-8 py-2 sm:py-3 bg-accent text-white font-bold rounded-full transition-all duration-300 hover:bg-white hover:text-accent hover:scale-105 shadow-xl text-[11px] sm:text-sm"
                >
                  {t.hero.getInTouch}
                </a>
                <a
                  href="/products"
                  className="px-5 sm:px-8 py-2 sm:py-3 border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-full transition-all duration-300 hover:scale-105 text-[11px] sm:text-sm"
                >
                  {t.hero.viewProducts}
                </a>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes heroFadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      <AboutSection />

      <ProductsPreview />

      <div className="mt-5" />

      {/* Brands Section - Black bg with red accents */}
      <section className="py-10 sm:py-14 md:py-16 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
          <div className="text-center">
            <span className="text-accent font-bold text-xs tracking-widest uppercase">{t.brands.label}</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">{t.brands.title}</h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-accent rounded-full" />
          </div>
        </div>
        <div className="relative" dir="ltr">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10" />
          <div className="flex animate-[brandScroll_30s_linear_infinite] w-max">
            {[...brandImages, ...brandImages].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-2 sm:mx-4 md:mx-5 w-28 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 bg-white rounded-xl shadow-lg flex items-center justify-center p-3 sm:p-4 border border-gray-100 hover:shadow-red-500/10 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <img
                  src={src}
                  alt={`${t.brands.brandAlt} ${(i % brandImages.length) + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes brandScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      <div className="mt-5" />

      <ServicesSection />

      <BlogPreview />

      <div className="mt-5" />

      <ContactSection />

      <div className="mb-5" />

      <Footer />
    </div>
  );
}

/* ============ Loader ============ */
function Loader() {
  const { t } = useLang();

  return (
    <div className="fixed inset-0 z-[999] bg-white flex items-center justify-center overflow-hidden">
      {/* Animated red rings */}
      <div className="absolute w-[250px] h-[250px] rounded-full border-2 border-accent/20 animate-[loaderRing_2s_ease-out_infinite]" />
      <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-accent/10 animate-[loaderRing_2s_ease-out_0.5s_infinite]" />
      <div className="absolute w-[550px] h-[550px] rounded-full border-2 border-accent/5 animate-[loaderRing_2s_ease-out_1s_infinite]" />

      <div className="flex flex-col items-center gap-5 sm:gap-7 animate-[loaderFadeIn_0.8s_ease-out] px-4">
        {/* Logo */}
        <div className="animate-[loaderPulse_1.5s_ease-in-out_infinite]">
          <Image
            src="/bright-light-logo.png"
            alt={`${t.loader.brandName} ${t.loader.brandSuffix}`}
            width={160}
            height={100}
            className="w-28 sm:w-36 md:w-44"
          />
        </div>

        {/* Company name */}
        <div className="flex flex-col leading-tight text-center animate-[loaderSlideUp_1s_ease-out_0.3s_both]">
          <span className="font-extrabold tracking-wider text-2xl sm:text-3xl md:text-4xl text-black">
            {t.loader.brandName}
          </span>
          <span className="font-bold tracking-widest text-sm sm:text-base text-accent uppercase">
            {t.loader.brandSuffix}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-gray-500 text-[10px] sm:text-xs tracking-[0.2em] uppercase animate-[loaderFadeUp_1s_ease-out_0.6s_both] text-center">
          {t.loader.tagline}
        </p>

        {/* Loading bar - red on gray */}
        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden mt-1">
          <div className="h-full bg-accent rounded-full animate-[loaderBar_2.5s_ease-in-out_forwards]" />
        </div>
      </div>

      <style>{`
        @keyframes loaderFadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes loaderSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes loaderPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes loaderFadeUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes loaderBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes loaderRing {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.3); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import ProductsPreview from "./components/ProductsPreview";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

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

const heroSlides = [
  {
    title: "Premium Light Fittings",
    subtitle: "& Electrical Accessories",
    description: "Your one-stop destination for all kinds of light fittings and electrical accessories, cables, switchgear, and distribution products in Dubai, UAE.",
  },
  {
    title: "12+ Trusted Brands",
    subtitle: "Global Quality Standards",
    description: "Authorized dealers of Philips, OSRAM, Schneider Electric, ABB, Hager, RR Kabel, and many more international brands.",
  },
  {
    title: "Dubai's Reliable",
    subtitle: "Electrical Trading Partner",
    description: "Serving contractors, businesses, and individuals with competitive pricing, fast delivery, and exceptional customer service from Deira, Dubai.",
  },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [loading]);

  if (loading) return <Loader />;

  const slide = heroSlides[currentSlide];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero - Full width red with diagonal white cut */}
      <section id="home" className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-screen w-full overflow-hidden bg-accent">
{/* removed diagonal */}

        {/* Red gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C40000] via-[#E60000] to-[#8B0000]">
          <div className="absolute inset-0">
            <div className="absolute top-[15%] right-[10%] w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-white/[0.05] blur-3xl" />
            <div className="absolute bottom-[20%] left-[5%] w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-black/[0.08] blur-3xl" />
          </div>
        </div>

        {/* Large faded logo watermark */}
        <div className="absolute top-1/2 right-[5%] -translate-y-1/2 opacity-[0.08] hidden lg:block">
          <Image src="/bright-light-logo.png" alt="" width={500} height={350} className="w-[400px] xl:w-[500px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
            <div
              key={currentSlide}
              className="max-w-2xl animate-[heroSlideIn_0.6s_ease-out]"
            >
              <div className="mb-3 sm:mb-5">
                <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold text-[8px] sm:text-[10px] md:text-xs tracking-widest uppercase">
                  Dealers in Light Fittings &amp; Electrical Accessories
                </span>
              </div>

              <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-1.5 sm:mb-3 leading-[1.15] tracking-tight">
                {slide.title}
              </h1>

              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white/80 mb-3 sm:mb-6">
                {slide.subtitle}
              </h2>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 mb-5 sm:mb-8 max-w-lg leading-relaxed">
                {slide.description}
              </p>

              <div className="flex flex-wrap gap-2.5 sm:gap-4">
                <a
                  href="#contact"
                  className="px-5 sm:px-8 py-2 sm:py-3 bg-white text-accent font-bold rounded-full transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 shadow-xl text-[11px] sm:text-sm"
                >
                  Get In Touch
                </a>
                <a
                  href="/products"
                  className="px-5 sm:px-8 py-2 sm:py-3 border-2 border-white text-white hover:bg-white hover:text-accent font-bold rounded-full transition-all duration-300 hover:scale-105 text-[11px] sm:text-sm"
                >
                  View Products
                </a>
              </div>

              {/* Mobile arrows + dots (below buttons) */}
              <div className="flex md:hidden flex-col items-center gap-3 mt-5">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                    className="w-9 h-9 bg-black/20 border border-white/25 rounded-full flex items-center justify-center text-white active:bg-black/40"
                    aria-label="Previous slide"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                    className="w-9 h-9 bg-black/20 border border-white/25 rounded-full flex items-center justify-center text-white active:bg-black/40"
                    aria-label="Next slide"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
                {/* Dots */}
                <div className="flex justify-center gap-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        index === currentSlide
                          ? "bg-white w-8"
                          : "bg-white/40 w-2"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Slide Dots */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "bg-white w-14"
                  : "bg-white/40 hover:bg-white/70 w-5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Desktop Arrow buttons */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/20 hover:bg-black/40 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center text-white transition-all"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/20 hover:bg-black/40 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center text-white transition-all"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <style>{`
          @keyframes heroSlideIn {
            from { opacity: 0; transform: translateX(-40px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}</style>
      </section>

      <AboutSection />

      <ProductsPreview />

      {/* Brands Section - Black bg with red accents */}
      <section className="py-10 sm:py-14 md:py-16 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
          <div className="text-center">
            <span className="text-accent font-bold text-xs tracking-widest uppercase">Trusted Partners</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">Our Brands</h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-accent rounded-full" />
          </div>
        </div>
        <div className="relative">
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
                  alt={`Brand ${(i % brandImages.length) + 1}`}
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

      <ServicesSection />

      <ContactSection />

      <Footer />
    </div>
  );
}

/* ============ Loader ============ */
function Loader() {
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
            alt="Bright Light LLC"
            width={160}
            height={100}
            className="w-28 sm:w-36 md:w-44"
          />
        </div>

        {/* Company name */}
        <div className="flex flex-col leading-tight text-center animate-[loaderSlideUp_1s_ease-out_0.3s_both]">
          <span className="font-extrabold tracking-wider text-2xl sm:text-3xl md:text-4xl text-black">
            BRIGHT LIGHT
          </span>
          <span className="font-bold tracking-widest text-sm sm:text-base text-accent uppercase">
            LLC
          </span>
        </div>

        {/* Tagline */}
        <p className="text-gray-500 text-[10px] sm:text-xs tracking-[0.2em] uppercase animate-[loaderFadeUp_1s_ease-out_0.6s_both] text-center">
          Dealers in Light Fittings &amp; Electrical Accessories
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

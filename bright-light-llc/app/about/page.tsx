import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-accent py-10 sm:py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000] to-accent" />
{/* removed diagonal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-white/70 text-xs sm:text-sm mb-3 sm:mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            <span className="text-white font-semibold">About Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">About Us</h1>
          <p className="mt-3 sm:mt-4 text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            Learn more about Bright Light LLC — your trusted dealer for light fittings and electrical accessories in Dubai, UAE.
          </p>
        </div>
      </section>

      <AboutSection />

      <Footer />
    </div>
  );
}

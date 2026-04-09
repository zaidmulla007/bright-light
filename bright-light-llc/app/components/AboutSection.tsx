import { BoltIcon, TruckIcon, ShieldIcon, PriceIcon } from "./Icons";

export default function AboutSection() {
  return (
    <section id="about" className="py-10 sm:py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-accent font-bold text-xs tracking-widest uppercase">Who We Are</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-2">About Us</h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
              <strong className="text-black">Bright Light LLC</strong> is a trusted dealer in light fittings and all kinds of electrical accessories based in Deira, Dubai, UAE. We provide a comprehensive range of high-quality electrical products to meet the needs of contractors, businesses, and individuals across the region.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
              With a commitment to quality and customer satisfaction, we have built strong relationships with our clients by offering competitive pricing, reliable products from 12+ trusted brands, and excellent service.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-white font-semibold text-sm rounded-full hover:bg-accent-light transition shadow-lg">
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Stats Grid - Black cards with red icons */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <StatCard icon={<BoltIcon className="text-accent" />} number="12+" title="Brands" desc="Trusted global brands" />
            <StatCard icon={<TruckIcon />} number="UAE" title="Wide Delivery" desc="Fast supply across UAE" />
            <StatCard icon={<ShieldIcon />} number="100%" title="Genuine" desc="Authorized products" />
            <StatCard icon={<PriceIcon />} number="Best" title="Prices" desc="Competitive rates" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, number, title, desc }: { icon: React.ReactNode; number: string; title: string; desc: string }) {
  return (
    <div className="bg-black rounded-2xl p-4 sm:p-5 md:p-6 text-center border border-gray-800 hover:border-accent/50 transition group">
      <div className="text-accent mb-2 flex justify-center">{icon}</div>
      <span className="text-2xl sm:text-3xl font-extrabold text-accent">{number}</span>
      <h3 className="font-bold text-white text-sm sm:text-base mt-1">{title}</h3>
      <p className="text-gray-500 text-xs mt-1">{desc}</p>
    </div>
  );
}

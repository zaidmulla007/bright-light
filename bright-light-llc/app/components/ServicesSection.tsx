export default function ServicesSection() {
  return (
    <section id="services" className="py-10 sm:py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-accent font-bold text-xs tracking-widest uppercase">What We Offer</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-2">Our Services</h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          <ServiceCard icon={<LightBulbIcon />} title="Light Fittings" desc="Indoor and outdoor lighting products including LED panels, bulbs, downlights, and fixtures from Philips, OSRAM & more." index={0} />
          <ServiceCard icon={<PlugIcon />} title="Electrical Accessories" desc="Switches, sockets, plugs, connectors, and a wide range of wiring accessories for residential and commercial use." index={1} />
          <ServiceCard icon={<CableIcon />} title="Cables & Wiring" desc="High-quality cables, wires, and wiring accessories from RR Kabel for all types of electrical installations." index={2} />
          <ServiceCard icon={<BoardIcon />} title="Switchgear & Distribution" desc="MCBs, RCCBs, distribution boards, and circuit protection from Schneider, ABB, and Hager." index={3} />
          <ServiceCard icon={<WrenchIcon />} title="Tools & Equipment" desc="Electrical tools, tapes, cable management, and installation equipment from Max and other brands." index={4} />
          <ServiceCard icon={<TruckIcon />} title="Bulk Supply" desc="Wholesale and bulk supply for contractors and large-scale projects across the UAE at competitive prices." index={5} />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc, index }: { icon: React.ReactNode; title: string; desc: string; index: number }) {
  // Alternate: even cards white with red top border, odd cards black
  const isBlack = index % 2 === 1;
  return (
    <div className={`rounded-2xl p-5 sm:p-6 md:p-7 transition group relative overflow-hidden ${
      isBlack
        ? "bg-black text-white border border-gray-800 hover:border-accent/50"
        : "bg-white text-black border-2 border-gray-100 hover:border-accent/30 shadow-lg hover:shadow-xl"
    }`}>
      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 ${
        isBlack ? "bg-accent/20" : "bg-red-50"
      }`}>
        {icon}
      </div>
      <h3 className={`text-lg sm:text-xl font-bold mb-2 ${isBlack ? "text-white" : "text-black"}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${isBlack ? "text-gray-400" : "text-gray-600"}`}>{desc}</p>
      {/* Red accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
    </div>
  );
}

function LightBulbIcon() {
  return (
    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  );
}

function PlugIcon() {
  return (
    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 0V9m0-3.75h3.75M12 5.25H8.25M15.75 9V5.25M8.25 9V5.25M5.25 9h13.5M6 12h.008M9 12h.008M12 12h.008M15 12h.008M18 12h.008M6.75 15h10.5a2.25 2.25 0 002.25-2.25V9.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 9.75v3A2.25 2.25 0 006.75 15zM9 15v3.75m6-3.75v3.75M9 18.75h6" />
    </svg>
  );
}

function CableIcon() {
  return (
    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v3m4-3v3m4-3v3m4-3v3M6 18v3m4-3v3m4-3v3m4-3v3" />
    </svg>
  );
}

function BoardIcon() {
  return (
    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 5.384a2.25 2.25 0 01-3.182-3.182l5.384-5.384m0 0l-.707-.707a2.25 2.25 0 010-3.182l2.121-2.121a2.25 2.25 0 013.182 0l.707.707m-7.303 7.303l7.303-7.303m0 0l1.415 1.414a2.25 2.25 0 010 3.182l-2.121 2.121a2.25 2.25 0 01-3.182 0l-1.415-1.414z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75m-7.5-1.125h6.375c.621 0 1.125.504 1.125 1.125v1.5M14.25 10.5h2.625c.621 0 1.125-.504 1.125-1.125V6.375c0-.621-.504-1.125-1.125-1.125H14.25m0 0V3.375c0-.621-.504-1.125-1.125-1.125H6.375c-.621 0-1.125.504-1.125 1.125v3.75" />
    </svg>
  );
}

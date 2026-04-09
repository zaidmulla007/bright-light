export interface Category {
  name: string;
  slug: string;
  subs: { name: string; slug: string }[];
}

export interface Brand {
  name: string;
  slug: string;
  abbr: string;
  sector: string;
  sectorLabel: string;
  description: string;
  categories: Category[];
}

function toSlug(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function makeCats(raw: { cat: string; subs: string[] }[]): Category[] {
  return raw.map((c) => ({
    name: c.cat,
    slug: toSlug(c.cat),
    subs: c.subs.map((s) => ({ name: s, slug: toSlug(s) })),
  }));
}

export const brands: Brand[] = [
  {
    name: "Philips Lighting", slug: "philips-lighting", abbr: "PH", sector: "lighting", sectorLabel: "Lighting",
    description: "Global leader in lighting solutions including LED lamps, luminaires, and professional lighting systems.",
    categories: makeCats([
      { cat: "LED Lamps", subs: ["LED Bulbs", "LED Tubes", "LED Spots & Reflectors", "LED Capsules", "LED Filament Lamps"] },
      { cat: "Indoor Luminaires", subs: ["Downlights", "Panel Lights", "Troffer Lights", "Track Lights", "Batten Luminaires"] },
      { cat: "Outdoor Luminaires", subs: ["Street Lights", "Flood Lights", "Bollard Lights", "Wall Packs", "High Bay Lights"] },
      { cat: "Drivers & Controls", subs: ["LED Drivers", "Dimmable Drivers", "DALI Controllers", "Emergency Conversion Kits"] },
    ]),
  },
  {
    name: "OSRAM", slug: "osram", abbr: "OS", sector: "lighting", sectorLabel: "Lighting",
    description: "Global lighting technology company specializing in LED lamps, professional luminaires, and lighting control systems.",
    categories: makeCats([
      { cat: "LED Lamps", subs: ["LED Bulbs", "LED Tubes", "LED MR16 & GU10", "LED Filament", "LED Sticks"] },
      { cat: "Professional Luminaires", subs: ["High Bay Luminaires", "Panel Lights", "Downlights", "Linear Luminaires"] },
      { cat: "Outdoor Lighting", subs: ["Street Lights", "Flood Lights", "Area Lights", "Facade Lighting"] },
      { cat: "Drivers & Gear", subs: ["LED Drivers", "Electronic Ballasts", "Emergency Modules", "DALI Drivers"] },
    ]),
  },
  {
    name: "BL Lamp", slug: "bl-lamp", abbr: "BL", sector: "lighting", sectorLabel: "Lighting",
    description: "Quality LED lamps, decorative lighting, and commercial lighting solutions for every application.",
    categories: makeCats([
      { cat: "LED Lamps", subs: ["LED Bulbs", "LED Tubes", "LED Candle Lamps", "LED Stick Lamps"] },
      { cat: "Decorative Lighting", subs: ["Pendant Lights", "Ceiling Lights", "Wall Lights", "Spot Lights"] },
      { cat: "Commercial Lighting", subs: ["Downlights", "Panel Lights", "Track Lights", "Batten Fittings"] },
    ]),
  },
  {
    name: "Schneider Electric", slug: "schneider-electric", abbr: "SE", sector: "switchgear", sectorLabel: "Switchgear & Distribution",
    description: "Global specialist in energy management and automation, providing low voltage distribution, switches, and motor control solutions.",
    categories: makeCats([
      { cat: "Low Voltage Distribution", subs: ["MCBs", "MCCBs", "ACBs", "Distribution Boards", "Panel Boards"] },
      { cat: "Switches & Sockets", subs: ["Modular Switches", "Plate Switches", "Weatherproof Sockets", "Floor Outlets"] },
      { cat: "Motor Control & Protection", subs: ["Contactors", "Overload Relays", "Motor Starters", "Variable Speed Drives"] },
      { cat: "Surge Protection & UPS", subs: ["Surge Protection Devices", "APC UPS Systems", "Rack PDUs", "Automatic Transfer Switches"] },
    ]),
  },
  {
    name: "ABB", slug: "abb", abbr: "AB", sector: "switchgear", sectorLabel: "Switchgear & Distribution",
    description: "Leading technology company in electrification, offering circuit protection, distribution boards, and motor control solutions.",
    categories: makeCats([
      { cat: "Circuit Protection", subs: ["MCBs", "MCCBs", "RCDs", "RCBOs", "Isolators"] },
      { cat: "Distribution Boards", subs: ["Consumer Units", "Panel Boards", "TPN Boards", "Meter Boards"] },
      { cat: "Motor Control", subs: ["Contactors", "Thermal Overload Relays", "Manual Motor Starters", "Soft Starters"] },
      { cat: "Switches & Sockets", subs: ["Modular Switches", "Plate Switches", "USB Sockets", "Data Outlets"] },
    ]),
  },
  {
    name: "Hager", slug: "hager", abbr: "HG", sector: "switchgear", sectorLabel: "Switchgear & Distribution",
    description: "German manufacturer of circuit protection, distribution boards, wiring accessories, and energy management solutions.",
    categories: makeCats([
      { cat: "Circuit Protection", subs: ["MCBs", "RCCBs", "RCBOs", "Isolators", "Fuse Switches"] },
      { cat: "Distribution Boards", subs: ["Consumer Units", "Panel Boards", "Meter Boards", "TPN Boards"] },
      { cat: "Wiring Accessories", subs: ["Switches & Sockets", "Data & Multimedia Outlets", "Floor Boxes", "Grid Systems"] },
      { cat: "Energy Management", subs: ["Energy Meters", "Smart Panels", "Time Switches", "Contactors"] },
    ]),
  },
  {
    name: "RR Kabel", slug: "rr-kabel", abbr: "RR", sector: "cables", sectorLabel: "Cables & Wires",
    description: "India's leading wire and cable manufacturer providing building wires, power cables, and communication cables.",
    categories: makeCats([
      { cat: "Building Wires", subs: ["Single Core Wires", "Multi Core Cables", "Flat Cables", "FR/FRLS Wires"] },
      { cat: "Power & Control Cables", subs: ["LT Power Cables", "HT Power Cables", "Control Cables", "Instrumentation Cables"] },
      { cat: "Flexible Cables", subs: ["Multi Core Flexible", "Submersible Cables", "Welding Cables", "Speaker Cables"] },
      { cat: "Communication Cables", subs: ["Coaxial Cables", "LAN Cables Cat5e/Cat6", "Telephone Cables", "CCTV Cables"] },
    ]),
  },
  {
    name: "Frater", slug: "frater", abbr: "FR", sector: "lighting", sectorLabel: "Lighting",
    description: "Professional commercial and outdoor light fittings with LED accessories and controls.",
    categories: makeCats([
      { cat: "Commercial Light Fittings", subs: ["Recessed Downlights", "Surface Mounted Lights", "Suspended Luminaires", "Architectural Lights"] },
      { cat: "Outdoor Fittings", subs: ["Flood Lights", "Street Lights", "Garden Lights", "Weatherproof Fittings"] },
      { cat: "LED Accessories", subs: ["LED Drivers", "Dimming Controls", "Mounting Brackets", "Reflectors"] },
    ]),
  },
  {
    name: "Vatsun", slug: "vatsun", abbr: "VT", sector: "lighting", sectorLabel: "Lighting",
    description: "Affordable LED panels, downlights, bulbs, and outdoor LED solutions for residential and commercial use.",
    categories: makeCats([
      { cat: "LED Panels & Downlights", subs: ["Slim Panels", "Round Downlights", "Square Downlights", "Recessed Panels"] },
      { cat: "LED Bulbs & Tubes", subs: ["LED Bulbs", "T8 LED Tubes", "T5 LED Tubes", "LED Battens"] },
      { cat: "Outdoor LED", subs: ["Flood Lights", "Street Lights", "High Bay Lights", "Wall Lights"] },
    ]),
  },
  {
    name: "Quanta", slug: "quanta", abbr: "QU", sector: "accessories", sectorLabel: "Wiring Accessories & Tools",
    description: "Quality plugs, connectors, extension leads, and wiring accessories for everyday electrical needs.",
    categories: makeCats([
      { cat: "Plugs & Connectors", subs: ["3-Pin Plugs", "Multi Plugs", "Travel Adapters", "Extension Sockets"] },
      { cat: "Extension Leads", subs: ["Power Strips", "Surge Protected Extensions", "USB Extension Leads", "Industrial Extensions"] },
      { cat: "Wiring Accessories", subs: ["Junction Boxes", "Cable Clips", "Connectors", "Terminal Blocks"] },
    ]),
  },
  {
    name: "Modi", slug: "modi", abbr: "MO", sector: "accessories", sectorLabel: "Wiring Accessories & Tools",
    description: "Switches, sockets, wiring accessories, and MCBs for residential and commercial installations.",
    categories: makeCats([
      { cat: "Switches & Sockets", subs: ["Plate Switches", "Modular Switches", "Bell Switches", "Dimmer Switches"] },
      { cat: "Wiring Accessories", subs: ["Blank Plates", "Connection Units", "Mounting Boxes", "Junction Boxes"] },
      { cat: "MCBs & Distribution", subs: ["MCBs", "Isolators", "Distribution Boards", "Change Over Switches"] },
    ]),
  },
  {
    name: "Max", slug: "max", abbr: "MX", sector: "accessories", sectorLabel: "Wiring Accessories & Tools",
    description: "Electrical tapes, cable management solutions, and hand tools for electricians and professionals.",
    categories: makeCats([
      { cat: "Tapes & Insulation", subs: ["Electrical Tape", "Insulation Tape", "Duct Tape", "PVC Tape"] },
      { cat: "Cable Management", subs: ["Cable Ties", "Spiral Wraps", "Cable Clips", "Glands & Connectors"] },
      { cat: "Tools & Accessories", subs: ["Screwdrivers", "Pliers", "Wire Strippers", "Crimping Tools"] },
    ]),
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getCategoryBySlug(brandSlug: string, catSlug: string) {
  const brand = getBrandBySlug(brandSlug);
  if (!brand) return null;
  const category = brand.categories.find((c) => c.slug === catSlug);
  if (!category) return null;
  return { brand, category };
}

export function getProductBySlug(brandSlug: string, catSlug: string, prodSlug: string) {
  const result = getCategoryBySlug(brandSlug, catSlug);
  if (!result) return null;
  const product = result.category.subs.find((s) => s.slug === prodSlug);
  if (!product) return null;
  return { ...result, product };
}

export function getTotalSubs(brand: Brand) {
  return brand.categories.reduce((a, c) => a + c.subs.length, 0);
}

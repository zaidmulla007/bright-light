"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "../context/LanguageContext";
import { EmailIcon, WhatsAppIcon, PhoneIcon, FaxIcon, InstagramIcon, FacebookIcon, LinkedInIcon, TwitterIcon, YouTubeIcon, TikTokIcon, LocationIcon } from "./Icons";

const socialLinks = [
  { icon: <InstagramIcon />, href: "https://www.instagram.com", label: "Instagram" },
  { icon: <FacebookIcon />, href: "https://www.facebook.com", label: "Facebook" },
  { icon: <YouTubeIcon />, href: "https://www.youtube.com", label: "YouTube" },
  { icon: <TikTokIcon />, href: "https://www.tiktok.com", label: "TikTok" },
  { icon: <LinkedInIcon />, href: "https://www.linkedin.com", label: "LinkedIn" },
  { icon: <TwitterIcon />, href: "https://x.com", label: "X" },
];

export default function Footer() {
  const { t } = useLang();

  const quickLinks = [
    { href: "/", label: t.footer.home },
    { href: "/about", label: t.footer.aboutUs },
    { href: "/products", label: t.footer.products },
    { href: "/services", label: t.footer.services },
    { href: "/contact", label: t.footer.contactUs },
  ];

  return (
    <footer className="bg-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-8">

          {/* Logo & About */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/bright-light-logo.png"
                alt={`${t.footer.brandName} ${t.footer.brandSuffix}`}
                width={48}
                height={32}
                className="h-9 sm:h-10 md:h-12 w-auto rounded-lg"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold tracking-wider text-sm sm:text-base md:text-lg text-white">{t.footer.brandName}</span>
                <span className="font-bold tracking-wide text-[8px] sm:text-[9px] md:text-xs text-white/70 uppercase">{t.footer.brandSuffix}</span>
              </div>
            </div>
            <p className="mt-3 sm:mt-4 text-white/70 text-xs sm:text-sm leading-relaxed max-w-md">
              {t.footer.description}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-5">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-8 h-8 sm:w-9 sm:h-9 bg-white/15 rounded-full flex items-center justify-center text-white/70 hover:bg-white hover:text-accent transition">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm sm:text-base mb-3 sm:mb-4 text-white">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-xs sm:text-sm transition flex items-center gap-1.5">
                    <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Brands */}
          <div>
            <h4 className="font-bold text-sm sm:text-base mb-3 sm:mb-4 text-white">{t.footer.topBrands}</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { href: "/products/philips-lighting", label: "Philips Lighting" },
                { href: "/products/schneider-electric", label: "Schneider Electric" },
                { href: "/products/abb", label: "ABB" },
                { href: "/products/hager", label: "Hager" },
                { href: "/products/rr-kabel", label: "RR Kabel" },
                { href: "/products/osram", label: "OSRAM" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-xs sm:text-sm transition flex items-center gap-1.5">
                    <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-sm sm:text-base mb-3 sm:mb-4 text-white">{t.footer.contactUs}</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-2.5">
                <span className="text-white/60 mt-0.5 shrink-0"><PhoneIcon /></span>
                <div>
                  <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-wider">{t.footer.mobileWhatsApp}</p>
                  <a href="tel:+971543078535" className="text-xs sm:text-sm text-white/70 hover:text-white transition">+971 54 307 8535</a>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-2.5">
                <span className="text-white/60 mt-0.5 shrink-0"><PhoneIcon /></span>
                <div>
                  <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-wider">{t.footer.telephone}</p>
                  <a href="tel:+97142986940" className="text-xs sm:text-sm text-white/70 hover:text-white transition">+971 4 298 69 40</a>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-2.5">
                <span className="text-white/60 mt-0.5 shrink-0"><EmailIcon /></span>
                <div>
                  <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-wider">{t.footer.email}</p>
                  <a href="mailto:jayprakash@brightlight.ae" className="text-xs sm:text-sm text-white/70 hover:text-white transition break-all">jayprakash@brightlight.ae</a>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-2.5">
                <span className="text-white/60 mt-0.5 shrink-0"><LocationIcon /></span>
                <div>
                  <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-wider">{t.footer.address}</p>
                  <p className="text-xs sm:text-sm text-white/70">{t.footer.addressLine1}<br />{t.footer.addressLine2}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Black */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 md:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
          <p className="text-white text-[10px] sm:text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} {t.footer.copyright}{" "}
            <a href="https://zetacoding.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">ZetaCoding</a>
          </p>
          <div className="flex gap-3 sm:gap-4">
            <a href="mailto:jayprakash@brightlight.ae" className="text-white hover:text-accent transition"><EmailIcon /></a>
            <a href="https://wa.me/+971543078535" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition"><WhatsAppIcon /></a>
            <a href="tel:+971543078535" className="text-white hover:text-accent transition"><PhoneIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

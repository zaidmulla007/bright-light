"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { InstagramIcon, FacebookIcon, LinkedInIcon, TwitterIcon, YouTubeIcon, TikTokIcon } from "./Icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: <InstagramIcon />, href: "https://www.instagram.com", label: "Instagram" },
  { icon: <FacebookIcon />, href: "https://www.facebook.com", label: "Facebook" },
  { icon: <YouTubeIcon />, href: "https://www.youtube.com", label: "YouTube" },
  { icon: <TikTokIcon />, href: "https://www.tiktok.com", label: "TikTok" },
  { icon: <LinkedInIcon />, href: "https://www.linkedin.com", label: "LinkedIn" },
  { icon: <TwitterIcon />, href: "https://x.com", label: "X" },
];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-white text-black sticky top-0 z-50 shadow-md border-b-2 border-accent">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16 md:h-[68px]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0">
          <Image
            src="/bright-light-logo-removebg-preview.png"
            alt="Bright Light LLC"
            width={48}
            height={32}
            className="h-11 sm:h-12 md:h-13 w-auto rounded-md sm:rounded-lg"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-extrabold tracking-wider text-base sm:text-lg md:text-xl text-black">BRIGHT LIGHT</span>
            <span className="font-bold tracking-wide text-[9px] sm:text-[10px] md:text-xs text-accent uppercase">LLC</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-5 xl:gap-7 text-sm font-semibold">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`pb-1 transition ${
                isActive(item.href)
                  ? "text-accent border-b-2 border-accent"
                  : "text-gray-700 hover:text-accent"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
          {socialLinks.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-gray-500 hover:text-accent transition">
              {s.icon}
            </a>
          ))}
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden p-1.5 sm:p-2 hover:bg-red-50 rounded-lg transition"
          aria-label="Toggle menu"
        >
          {mobileMenu ? (
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {mobileMenu && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
          <nav className="flex flex-col px-4 py-2 sm:py-3 gap-0.5 sm:gap-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className={`py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition text-sm sm:text-base font-semibold ${
                  isActive(item.href)
                    ? "bg-red-50 text-accent border-l-3 border-accent"
                    : "text-gray-700 hover:bg-red-50 hover:text-accent"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          {/* Social icons in mobile menu */}
          <div className="flex items-center justify-center gap-4 sm:gap-5 px-4 py-3 sm:py-4 border-t border-gray-100">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-gray-500 hover:text-accent transition">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

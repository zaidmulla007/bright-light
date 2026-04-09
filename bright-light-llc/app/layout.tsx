import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingActions from "./components/FloatingActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bright Light LLC — Dealers in Light Fittings & Electrical Accessories",
  description:
    "Dealers in light fittings and all kinds of electrical accessories in Deira, Dubai, UAE. Philips, OSRAM, Schneider Electric, ABB, Hager, RR Kabel & more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}

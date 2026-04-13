"use client";

import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import ConsultationModal from "./ConsultationModal";

const openModal = () => {
  if (typeof window !== "undefined" && (window as any).openConsultationModal) {
    (window as any).openConsultationModal();
  }
};

const aiLinks = [
  {
    name: "Gemini",
    icon: "/gemini.png",
    url: "https://www.google.com/search?udm=50&q=What+makes+Bright+Light+LLC+the+best+choice+for+light+fittings+and+electrical+accessories+in+Dubai%3F",
  },
  {
    name: "ChatGPT",
    icon: "/chatgpt.png",
    url: "https://chatgpt.com/?q=Why+is+Bright+Light+LLC+a+trusted+dealer+for+light+fittings+and+electrical+accessories+in+Dubai+UAE%3F",
  },
  {
    name: "Perplexity",
    icon: "/perplexity.png",
    url: "https://www.perplexity.ai/search/new?q=What+are+the+strengths+of+Bright+Light+LLC+for+electrical+products+and+light+fittings+in+Dubai%3F",
  },
  {
    name: "Claude",
    icon: "/claude.png",
    url: "https://claude.ai/new?q=What+makes+Bright+Light+LLC+a+leading+dealer+for+light+fittings+and+electrical+accessories+in+Deira+Dubai%3F",
  },
];

export default function FloatingActions() {
  const { t } = useLang();
  const [aiOpen, setAiOpen] = useState(false);

  return (
    <>
      <ConsultationModal />

      {/* Free Consultation - Desktop */}
      <div
        onClick={openModal}
        className="hidden md:block fixed top-1/2 right-0 -translate-y-1/2 z-50 cursor-pointer"
      >
        <div className="bg-gradient-to-b from-accent to-accent-light text-white py-5 lg:py-6 px-2 lg:px-3 shadow-lg rounded-l-lg hover:shadow-xl hover:px-3 lg:hover:px-4 transition-all duration-300">
          <div className="font-bold text-[10px] lg:text-xs tracking-wider uppercase" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
            {t.floating.freeConsultation}
          </div>
        </div>
      </div>

      {/* Free Consultation - Mobile/Tablet */}
      <div
        onClick={openModal}
        className="md:hidden fixed top-1/2 right-0 -translate-y-1/2 z-40 cursor-pointer"
      >
        <div className="bg-gradient-to-b from-accent to-accent-light text-white py-3 sm:py-4 px-1.5 sm:px-2 shadow-lg rounded-l-lg">
          <div className="font-bold text-[8px] sm:text-[10px] tracking-wider uppercase" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
            {t.floating.freeConsultation}
          </div>
        </div>
      </div>

      {/* Ask AI - Bottom Left */}
      <div className="fixed bottom-3 sm:bottom-4 left-2 sm:left-3 md:left-4 z-50">
        {/* Menu popup */}
        {aiOpen && (
          <div className="absolute bottom-14 sm:bottom-16 left-0 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-[aiMenuIn_0.25s_ease-out] w-56 sm:w-64">
            <div className="flex items-center justify-between px-4 py-3 bg-accent text-white">
              <span className="text-xs sm:text-sm font-bold">{t.floating.askAIAbout}</span>
              <button
                onClick={() => setAiOpen(false)}
                className="w-6 h-6 rounded-full hover:bg-white/20 flex items-center justify-center transition text-white/70 hover:text-white text-lg leading-none"
              >
                &times;
              </button>
            </div>
            <div className="p-2">
              {aiLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <img src={link.icon} alt={link.name} width={22} height={22} className="rounded-md" />
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-accent transition-colors">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Toggle button with pulse animation */}
        <div className="relative">
          {/* Expanding ring */}
          <div className="absolute -inset-[7px] rounded-full border-2 border-accent opacity-50 animate-[aiRing_1.2s_infinite_ease-in-out] z-0" />
          {/* Pulsing circle fill */}
          <div className="absolute inset-0 rounded-full bg-accent opacity-50 animate-[aiPulse_2.3s_infinite_ease-in-out] z-0" />
          <button
            onClick={() => setAiOpen((prev) => !prev)}
            className="relative z-10 flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-accent hover:bg-accent-light text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label={t.floating.askAI}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5 animate-[aiIconPulse_0.8s_infinite]">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-xs sm:text-sm font-bold">{t.floating.askAI}</span>
          </button>
        </div>
      </div>

      {/* Fixed Action Buttons - Bottom Right */}
      <div className="fixed bottom-3 sm:bottom-4 right-2 sm:right-3 md:right-4 z-50 flex flex-col gap-2.5 sm:gap-3 md:gap-4">
        <a
          href="tel:+971543078535"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-accent hover:bg-accent-light rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          title={t.floating.callUs}
          aria-label={t.floating.callUs}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white">
            <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>

        {/* WhatsApp button with pulse ring animation */}
        <div className="relative">
          {/* Expanding ring */}
          <div className="absolute -inset-[7px] rounded-full border-2 border-green-500 opacity-50 animate-[whatsappRing_1.2s_infinite_ease-in-out] z-0" />
          {/* Pulsing circle fill */}
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-[whatsappPulse_2.3s_infinite_ease-in-out] z-0" />
          <a
            href={`https://wa.me/971543078535?text=${encodeURIComponent(t.floating.whatsAppMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#25d366] hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            title={t.floating.chatWhatsApp}
            aria-label={t.floating.chatWhatsApp}
          >
            <svg viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white animate-[whatsappIcon_0.8s_infinite]">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes whatsappRing {
          0% { transform: scale(0.9); opacity: 0.5; }
          50% { opacity: 0.3; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        @keyframes whatsappPulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1); opacity: 0.5; }
        }
        @keyframes whatsappIcon {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-10deg); }
          40% { transform: rotate(10deg); }
          60% { transform: rotate(-5deg); }
          80% { transform: rotate(5deg); }
        }
        @keyframes aiMenuIn {
          from { opacity: 0; transform: translateY(10px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes aiRing {
          0% { transform: scale(0.9); opacity: 0.5; }
          50% { opacity: 0.3; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        @keyframes aiPulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1); opacity: 0.5; }
        }
        @keyframes aiIconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}</style>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).openConsultationModal = () => setIsOpen(true);
    }
    return () => {
      if (typeof window !== "undefined") {
        delete (window as any).openConsultationModal;
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const name = fd.get("name") as string;
    const email = fd.get("email") as string;
    const phone = fd.get("phone") as string;
    const subject = fd.get("subject") as string;
    const message = fd.get("message") as string;

    const mailtoBody = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0A${message}`;
    window.open(`mailto:jayprakash@brightlight.ae?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`, "_self");

    setSubmitted(true);
    form.reset();
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-3 sm:p-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-[modalIn_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-gray-200 px-4 sm:px-5 py-3 flex items-center justify-between rounded-t-xl sm:rounded-t-2xl sticky top-0 bg-white z-10">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">Free Consultation</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
            aria-label="Close modal"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 sm:p-5">
          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
            Fill out the form below and we&apos;ll get back to you shortly.
          </p>

          {submitted && (
            <div className="bg-green-50 border border-green-200 text-green-700 text-xs sm:text-sm rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 mb-3 sm:mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Thank you! We will get back to you shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div>
                <label htmlFor="modal-name" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-1.5">Full Name *</label>
                <input type="text" id="modal-name" name="name" required placeholder="Your Name" className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition" />
              </div>
              <div>
                <label htmlFor="modal-email" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-1.5">Email Address *</label>
                <input type="email" id="modal-email" name="email" required placeholder="email@example.com" className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div>
                <label htmlFor="modal-phone" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-1.5">Phone Number *</label>
                <input type="tel" id="modal-phone" name="phone" required placeholder="+971 XX XXX XXXX" className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition" />
              </div>
              <div>
                <label htmlFor="modal-subject" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-1.5">Subject *</label>
                <select id="modal-subject" name="subject" required className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition">
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Product Enquiry">Product Enquiry</option>
                  <option value="Bulk Order">Bulk Order</option>
                  <option value="Quotation Request">Quotation Request</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="modal-message" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-1.5">Your Message *</label>
              <textarea id="modal-message" name="message" required rows={3} placeholder="Tell us about your requirements..." className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition resize-none" />
            </div>

            <button type="submit" className="w-full py-2.5 sm:py-3 bg-accent hover:bg-accent-light text-white font-bold rounded-lg transition flex items-center justify-center gap-2 text-xs sm:text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              Send Message
            </button>
          </form>
        </div>

        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: scale(0.95) translateY(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>
      </div>
    </div>
  );
}

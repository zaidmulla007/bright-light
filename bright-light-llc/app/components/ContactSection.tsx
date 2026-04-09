"use client";

import { useState } from "react";
import { PhoneIcon, LandlineIcon, UserIcon, EmailIcon, LocationIcon, WhatsAppIcon, FaxIcon } from "./Icons";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const mailtoBody = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0A${message}`;
    window.open(`mailto:jayprakash@brightlight.ae?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`, "_self");

    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-10 sm:py-14 md:py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-accent font-bold text-xs tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">Contact Us</h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-accent rounded-full" />
        </div>

        {/* Contact cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {/* Contact Person */}
          <div className="bg-accent rounded-2xl p-5 sm:p-6 text-white">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-3"><UserIcon /></div>
            <p className="text-white/60 text-xs uppercase tracking-wider">Contact Person</p>
            <p className="font-bold text-lg mt-1">Jayprakash Ashar</p>
          </div>

          {/* Phone */}
          <div className="bg-gray-900 rounded-2xl p-5 sm:p-6 text-white border border-gray-800">
            <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mb-3 text-accent"><PhoneIcon /></div>
            <p className="text-gray-500 text-xs uppercase tracking-wider">Mobile / WhatsApp</p>
            <a href="tel:+971543078535" className="font-bold text-base mt-1 block hover:text-accent transition">+971 54 307 8535</a>
            <div className="mt-3 pt-3 border-t border-gray-800 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-xs">Tel:</span>
                <a href="tel:+97142986940" className="text-gray-400 text-xs hover:text-accent transition">+971 4 298 69 40</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-xs">Fax:</span>
                <span className="text-gray-400 text-xs">+971 4 298 68 80</span>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-gray-900 rounded-2xl p-5 sm:p-6 text-white border border-gray-800">
            <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mb-3 text-accent"><EmailIcon /></div>
            <p className="text-gray-500 text-xs uppercase tracking-wider">Email</p>
            <a href="mailto:jayprakash@brightlight.ae" className="font-bold text-sm mt-1 block hover:text-accent transition break-all">jayprakash@brightlight.ae</a>
          </div>

          {/* Address */}
          <div className="bg-gray-900 rounded-2xl p-5 sm:p-6 text-white border border-gray-800">
            <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mb-3 text-accent"><LocationIcon /></div>
            <p className="text-gray-500 text-xs uppercase tracking-wider">Address</p>
            <p className="font-bold text-sm mt-1">P.O.Box: 380195, Deira</p>
            <p className="text-gray-400 text-sm">Dubai - U.A.E.</p>
          </div>
        </div>

        {/* Contact Form - White card on black bg */}
        <div className="bg-white rounded-2xl p-5 sm:p-7 md:p-8 shadow-2xl">
          <div className="grid md:grid-cols-5 gap-6 md:gap-8">
            {/* Left info panel */}
            <div className="md:col-span-2 bg-accent rounded-2xl p-5 sm:p-6 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Send Us a Message</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Have a question or need a quotation? Fill out the form and our team will get back to you shortly.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center shrink-0"><PhoneIcon /></div>
                  <div>
                    <p className="text-white/50 text-xs">Call Us</p>
                    <a href="tel:+971543078535" className="text-sm font-semibold hover:text-white/80 transition">+971 54 307 8535</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center shrink-0"><EmailIcon /></div>
                  <div>
                    <p className="text-white/50 text-xs">Email Us</p>
                    <a href="mailto:jayprakash@brightlight.ae" className="text-sm font-semibold hover:text-white/80 transition break-all">jayprakash@brightlight.ae</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/30 rounded-lg flex items-center justify-center shrink-0"><WhatsAppIcon /></div>
                  <div>
                    <p className="text-white/50 text-xs">WhatsApp</p>
                    <a href="https://wa.me/+971543078535" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-white/80 transition">+971 54 307 8535</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl px-4 py-3 flex items-center gap-2">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Your message has been sent successfully!
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input name="name" type="text" placeholder="Your Name *" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition" />
                  <input name="email" type="email" placeholder="Email Address *" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input name="phone" type="tel" placeholder="Phone Number *" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition" />
                  <input name="subject" type="text" placeholder="Subject *" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition" />
                </div>
                <textarea name="message" placeholder="Your Message *" rows={5} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition resize-none" />
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-accent text-white font-bold text-sm rounded-full hover:bg-accent-light hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/30"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

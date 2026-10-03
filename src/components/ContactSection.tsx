import React, { useState } from 'react';
import { Phone, ArrowUpRight, Copy, Check } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('Website Development');
  const [selectedTimeline, setSelectedTimeline] = useState<string>('Standard (2-4 Weeks)');
  const [customNotes, setCustomNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const WHATSAPP_NUMBER_PLAIN = '+91 95974 82991';
  const WHATSAPP_RAW_NUMBER = '919597482991';
  const PHONE_CALL_DISPLAY = '+91 7418 562 267';
  const PHONE_CALL_TEL = '+917418562267';

  const handleCopyWhatsAppNumber = () => {
    navigator.clipboard.writeText(WHATSAPP_NUMBER_PLAIN);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Build personalized WhatsApp inquiry message
  const generatedMessage = `Hi Local Rise Web Studio, I would like to discuss a project.
Service: ${selectedService}
Timeline: ${selectedTimeline}
${customNotes.trim() ? `Details: ${customNotes.trim()}` : "Please let me know the process to get a detailed quotation."}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-[#E0E5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Official Direct Contact Panel (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#0066FF] uppercase">
                GET IN TOUCH
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D1B3D] tracking-tight [text-wrap:balance]">
                Have an Idea? Let&apos;s Build It.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#647084] leading-relaxed [text-wrap:pretty]">
                Tell us what your business needs. Connect directly with our engineering team for
                instant discovery, scope estimates, and formal quotations.
              </p>
            </div>

            {/* Light Grey-Blue Contact Panel */}
            <div className="bg-[#F0F4FA] border border-[#D8E2ED] rounded-2xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(13,27,61,0.03)] space-y-6">
              {/* 1. WhatsApp Business Contact */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  {/* Official WhatsApp Logo: White phone symbol inside official WhatsApp green speech-bubble icon (#25D366) */}
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-sm shrink-0">
                    <svg
                      className="w-7 h-7 text-white fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#4B5E78] tracking-wider uppercase">
                      WhatsApp Business
                    </span>
                    <div className="text-xl font-extrabold text-[#0D1B3D] tracking-tight">
                      {WHATSAPP_NUMBER_PLAIN}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                  Connect directly with our engineering team for instant project discovery, scope estimates, and formal quotations.
                </p>

                {/* Primary Dark Navy WhatsApp Button & Separate White Copy Button */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                  <a
                    href={`https://wa.me/${WHATSAPP_RAW_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[#0D1B3D] hover:bg-[#152857] active:bg-[#081229] rounded-xl shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] whitespace-nowrap"
                    aria-label="Open WhatsApp conversation with +91 95974 82991"
                  >
                    {/* WhatsApp Icon */}
                    <svg className="w-4 h-4 text-[#25D366] fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.006.568 1.777.783 2.806.783 3.182 0 5.768-2.587 5.768-5.766.001-3.181-2.585-5.766-5.768-5.766zm9.969 5.766c0 5.519-4.481 10-10 10-1.761 0-3.407-.464-4.848-1.268l-5.152 1.332 1.364-4.992c-.879-1.488-1.364-3.219-1.364-5.072 0-5.519 4.481-10 10-10 5.519 0 10 4.481 10 10z" />
                    </svg>
                    <span>Open WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 ml-0.5 text-slate-400" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyWhatsAppNumber}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-[#0D1B3D] bg-white border border-[#D8E2ED] hover:bg-slate-50 hover:border-slate-300 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] shadow-xs"
                    title="Copy WhatsApp number"
                    aria-label="Copy WhatsApp number to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">WhatsApp number copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#647084]" />
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#D8E2ED]" />

              {/* 2. Phone Contact — Call Directly */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center shrink-0 border border-blue-200/60">
                    <Phone className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#4B5E78] tracking-wider uppercase">
                      Call Directly
                    </span>
                    <div className="text-lg font-extrabold text-[#0D1B3D]">
                      {PHONE_CALL_DISPLAY}
                    </div>
                  </div>
                </div>

                <div>
                  <a
                    href={`tel:${PHONE_CALL_TEL}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#0066FF] hover:bg-[#0052CC] active:bg-[#0040A8] rounded-xl shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]"
                    aria-label={`Call directly at ${PHONE_CALL_DISPLAY}`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Note Below Contact Panel */}
            <div className="flex items-center gap-2.5 text-xs text-[#647084] px-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
              <span>Prompt response during standard business hours (IST).</span>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Brief Formulator (7 cols) */}
          <div className="lg:col-span-7 bg-[#F0F4FA] border border-[#D8E2ED] rounded-2xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(13,27,61,0.03)]">
            <h3 className="text-lg font-bold text-[#0D1B3D] tracking-tight">
              Prepare Your Project Brief
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#647084]">
              Select your preferences below to launch a pre-formatted WhatsApp enquiry directly with us.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(getWhatsAppUrl(generatedMessage), '_blank', 'noopener,noreferrer');
              }}
              className="mt-6 space-y-5"
            >
              {/* Service Select */}
              <div>
                <label className="block text-xs font-bold text-[#0D1B3D] uppercase tracking-wider mb-2">
                  Interested Service
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Website Development',
                    'Mobile App Development',
                    'E-Commerce Solutions',
                    'Digital Marketing (Meta)',
                    'Business Automation',
                    'AI & WhatsApp Solutions',
                  ].map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setSelectedService(srv)}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg border text-left transition-all ${
                        selectedService === srv
                          ? 'bg-[#0D1B3D] text-white border-[#0D1B3D] shadow-xs'
                          : 'bg-white text-[#263247] border-[#D8E2ED] hover:border-slate-400'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Preference */}
              <div>
                <label className="block text-xs font-bold text-[#0D1B3D] uppercase tracking-wider mb-2">
                  Expected Timeline
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Urgent (1-2 Weeks)', 'Standard (2-4 Weeks)', 'Flexible Scope'].map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTimeline(time)}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg border text-center transition-all ${
                        selectedTimeline === time
                          ? 'bg-[#0D1B3D] text-white border-[#0D1B3D] shadow-xs'
                          : 'bg-white text-[#263247] border-[#D8E2ED] hover:border-slate-400'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brief Project Notes */}
              <div>
                <label
                  htmlFor="project-notes"
                  className="block text-xs font-bold text-[#0D1B3D] uppercase tracking-wider mb-2"
                >
                  Tell us a bit about your business or goals (optional)
                </label>
                <textarea
                  id="project-notes"
                  rows={3}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="e.g., We are a local retail brand looking for an e-commerce shop and WhatsApp automated lead capture..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D8E2ED] rounded-lg text-sm text-[#263247] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D1B3D] focus:border-transparent transition-all"
                />
              </div>

              {/* Submit to WhatsApp */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-[#0D1B3D] hover:bg-[#152857] active:bg-[#081229] rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                >
                  <svg className="w-4 h-4 text-[#25D366] fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.006.568 1.777.783 2.806.783 3.182 0 5.768-2.587 5.768-5.766.001-3.181-2.585-5.766-5.768-5.766zm9.969 5.766c0 5.519-4.481 10-10 10-1.761 0-3.407-.464-4.848-1.268l-5.152 1.332 1.364-4.992c-.879-1.488-1.364-3.219-1.364-5.072 0-5.519 4.481-10 10-10 5.519 0 10 4.481 10 10z" />
                  </svg>
                  <span>Send Inquiry via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </button>
                <p className="mt-2 text-center text-[11px] text-[#647084]">
                  Opens official WhatsApp chat with pre-filled details. No sign-up required.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

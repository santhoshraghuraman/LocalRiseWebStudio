import React, { useState } from 'react';
import { getWhatsAppUrl, WHATSAPP_PHONE_DISPLAY } from '../utils/whatsapp';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  if (isDismissed) return null;

  return (
    <aside
      aria-label="WhatsApp quick chat"
      className="fixed bottom-6 right-5 sm:right-6 z-30 flex flex-col items-end pointer-events-auto"
    >
      {/* Tooltip / Prompt Preview */}
      {showTooltip && (
        <div className="mb-2 p-3 bg-white text-[#0D1B3D] border border-[#E0E5EC] rounded-xl shadow-lg text-xs max-w-[220px] animate-in fade-in slide-in-from-bottom-2 duration-150 relative">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute top-1 right-1 p-1 text-slate-400 hover:text-slate-600 rounded"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-bold text-[#0D1B3D]">Chat with Local Rise</p>
          <p className="mt-1 text-[11px] text-[#647084]">
            Quick project inquiries &amp; quote discussions on WhatsApp.
          </p>
          <div className="mt-1.5 text-[10px] text-emerald-600 font-semibold">
            {WHATSAPP_PHONE_DISPLAY}
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={getWhatsAppUrl("Hi Local Rise Web Studio, I'm interested in discussing a project.")}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex items-center gap-2.5 px-3.5 py-3 sm:px-4 sm:py-3.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
        aria-label="Chat with Local Rise Web Studio on WhatsApp Business at +91 95974 82991"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          Chat on WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border-2 border-white" />
        </span>
      </a>
    </aside>
  );
};

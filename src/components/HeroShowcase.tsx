import React from 'react';
import { LocalRiseLogo } from './LocalRiseLogo';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const HeroShowcase: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#0052CC]/15 via-[#F4B400]/20 to-[#0D1B3D]/10 rounded-3xl blur-xl opacity-75 pointer-events-none" />

      {/* Main Studio Showcase Card */}
      <div className="relative bg-white border border-[#E0E5EC] rounded-2xl p-6 sm:p-8 shadow-xl">
        {/* Card Header: Studio Live Status & Verification */}
        <div className="flex items-center justify-between pb-6 border-b border-[#F0F4F8]">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D1B3D]">
              Studio Active · Accepting Projects
            </span>
          </div>

          <span className="text-[11px] font-semibold text-[#647084] bg-[#F5F7FA] px-2.5 py-1 rounded-md border border-[#E0E5EC]">
            Official Agency
          </span>
        </div>

        {/* Center: Prominent Official Brand Logo Presentation */}
        <div className="py-8 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#FBFDFF] to-[#F5F8FC] rounded-xl border border-[#EDF2F7] my-5 px-4">
          <div className="relative p-2 transition-transform duration-300 hover:scale-[1.02]">
            <LocalRiseLogo variant="full" iconSize={56} />
          </div>
          <div className="mt-3 text-xs font-medium text-[#647084] tracking-wide">
            Empowering Local & Global Businesses with Modern Digital Infrastructure
          </div>
        </div>

        {/* Studio Core Performance Pillars */}
        <div className="grid grid-cols-2 gap-3 mt-5">
          <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
            <div className="text-[11px] font-bold text-[#647084] uppercase tracking-wider">Speed & Code</div>
            <div className="text-sm font-extrabold text-[#0D1B3D] mt-0.5">100% Handcrafted</div>
            <div className="text-[11px] text-[#647084] mt-0.5">Zero bloat, sub-second load</div>
          </div>

          <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
            <div className="text-[11px] font-bold text-[#647084] uppercase tracking-wider">Conversion</div>
            <div className="text-sm font-extrabold text-[#0D1B3D] mt-0.5">ROI-Focused UX</div>
            <div className="text-[11px] text-[#647084] mt-0.5">Built to turn visitors into sales</div>
          </div>
        </div>

        {/* Action Prompt */}
        <div className="mt-5 pt-5 border-t border-[#F0F4F8] flex items-center justify-between">
          <span className="text-xs text-[#647084] font-medium">Ready to discuss your project?</span>
          <a
            href={getWhatsAppUrl("Hi Local Rise Web Studio, I want a free quotation for my project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052CC] hover:text-[#0D1B3D] transition-colors"
          >
            <span>Get Free Quote</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

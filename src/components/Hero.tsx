import React from 'react';
import { HeroShowcase } from './HeroShowcase';
import { LocalRiseLogo } from './LocalRiseLogo';
import { getWhatsAppUrl, WHATSAPP_PHONE_DISPLAY } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#F5F7FA] via-white to-[#F5F7FA]"
    >
      {/* Subtle background ambient blur circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#F4B400]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#0052CC]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Logo, Value Proposition & CTAs (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Official Brand Logo */}
            <div className="mb-5 pb-1">
              <LocalRiseLogo variant="horizontal" iconSize={46} />
            </div>

            {/* Clean Descriptor (Zero Pills - Typographic Separators) */}
            <div className="flex items-center flex-wrap gap-2 text-xs md:text-sm font-bold tracking-[0.2em] text-[#0D1B3D] uppercase mb-4">
              <span>Websites</span>
              <span className="text-[#F4B400]" aria-hidden="true">·</span>
              <span>Mobile Apps</span>
              <span className="text-[#F4B400]" aria-hidden="true">·</span>
              <span>Marketing</span>
              <span className="text-[#F4B400]" aria-hidden="true">·</span>
              <span>Automation</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-extrabold text-[#0D1B3D] tracking-tight leading-[1.14] max-w-2xl [text-wrap:balance]">
              We Build Digital Experiences That Move Businesses{' '}
              <span className="text-[#F4B400]">Forward.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 text-base sm:text-lg text-[#647084] leading-relaxed max-w-xl [text-wrap:pretty]">
              From high-converting websites to mobile apps, performance marketing and AI-powered
              automation, Local Rise Web Studio helps businesses turn ideas into digital experiences.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href={getWhatsAppUrl("Hi Local Rise Web Studio, I want to start a project with you.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-[#0D1B3D] hover:bg-[#152857] active:bg-[#081229] rounded-lg shadow-md hover:shadow-lg transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400] whitespace-nowrap"
              >
                <span>Start Your Project</span>
                <svg
                  className="w-4 h-4 ml-2 text-[#F4B400]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-[#0D1B3D] bg-white hover:bg-slate-50 border border-[#E0E5EC] hover:border-[#0D1B3D]/30 rounded-lg shadow-sm transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400] whitespace-nowrap"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Factual Adjacency Proof & Official Contact Info */}
            <div className="mt-10 pt-6 border-t border-[#E0E5EC] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#647084]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium text-[#263247]">Available for new projects</span>
              </div>
              <span className="hidden sm:inline text-slate-300">|</span>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-[#0D1B3D]">WhatsApp:</span>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#0052CC] hover:underline"
                >
                  {WHATSAPP_PHONE_DISPLAY}
                </a>
              </div>
              <span className="hidden sm:inline text-slate-300">|</span>
              <div>
                <span className="font-medium text-[#263247]">Transparent quotations · No hidden costs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Agency Showcase (5 cols on desktop) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroShowcase />
          </div>
        </div>
      </div>
    </section>
  );
};


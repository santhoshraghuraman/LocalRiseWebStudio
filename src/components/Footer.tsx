import React from 'react';
import { LocalRiseLogo } from './LocalRiseLogo';
import { WHATSAPP_PHONE_DISPLAY, getWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle } from 'lucide-react';

interface FooterProps {
  // Footer props
}

export const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1B3D] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5">
            <LocalRiseLogo variant="horizontal" theme="dark" iconSize={40} />
            <p className="mt-4 text-sm text-slate-300 max-w-sm leading-relaxed">
              Building thoughtful digital experiences for businesses ready to grow.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-[#0D1B3D] bg-[#F4B400] hover:bg-[#ffc11a] rounded-lg transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#0D1B3D]" />
                <span>WhatsApp: {WHATSAPP_PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F4B400]">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio &amp; Showcase
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services Overview
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing Catalog
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Professional Experience
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Service Categories (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F4B400]">
              Our Digital Solutions
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Website Development &amp; Landing Pages
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Mobile App Engineering (iOS &amp; Android)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  E-Commerce Storefronts &amp; Payments
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Meta Ads Performance Management
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Business Automation &amp; AI WhatsApp Workflows
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Clarification & Legal Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-400">
          <p className="max-w-2xl leading-relaxed">
            Prices are starting prices where marked. Final project quotations depend on the agreed
            scope and requirements. Separate service and third-party charges may apply.
          </p>
          <div className="shrink-0 text-slate-400">
            &copy; {currentYear} Local Rise Web Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

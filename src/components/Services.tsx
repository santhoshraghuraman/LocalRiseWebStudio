import React from 'react';
import { SERVICES_DATA } from '../data/content';
import { getWhatsAppUrl } from '../utils/whatsapp';
import {
  Globe,
  Smartphone,
  ShoppingBag,
  TrendingUp,
  Cpu,
  Bot,
  ArrowRight,
} from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Globe,
  Smartphone,
  ShoppingBag,
  TrendingUp,
  Cpu,
  Bot,
};

interface ServicesProps {
  onSelectCategory?: (categoryId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectCategory }) => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#F5F7FA] border-t border-[#E0E5EC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#0D1B3D] uppercase">
            WHAT WE DO
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D1B3D] tracking-tight [text-wrap:balance]">
            Everything You Need to Grow Digitally.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#647084] leading-relaxed [text-wrap:pretty]">
            Practical digital solutions designed around your business goals.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || Globe;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-6 sm:p-8 bg-white border border-[#E0E5EC] rounded-xl shadow-xs hover:border-[#0D1B3D]/30 hover:shadow-md transition-all duration-200"
              >
                <div>
                  {/* Top Bar inside Card: Editorial Number and Functional Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono font-bold text-[#647084] group-hover:text-[#0D1B3D] transition-colors">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#F5F7FA] group-hover:bg-[#F4B400]/15 flex items-center justify-center text-[#0D1B3D] group-hover:text-[#0D1B3D] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-bold text-[#0D1B3D] tracking-tight group-hover:text-[#0052CC] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-[#647084] leading-relaxed [text-wrap:pretty]">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Actions: View Pricing link and Quick WhatsApp */}
                <div className="mt-8 pt-4 border-t border-[#E0E5EC]/80 flex items-center justify-between">
                  <a
                    href="#pricing"
                    onClick={() => {
                      if (onSelectCategory) {
                        onSelectCategory(service.pricingCategoryId);
                      }
                    }}
                    className="inline-flex items-center text-xs font-bold text-[#0D1B3D] hover:text-[#0052CC] group/link transition-colors focus:outline-none focus-visible:underline"
                  >
                    <span>View Packages</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/link:translate-x-1" />
                  </a>

                  <a
                    href={getWhatsAppUrl(`Hi Local Rise Web Studio, I want to inquire about ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#647084] hover:text-[#0D1B3D] transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

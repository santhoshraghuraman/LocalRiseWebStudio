import React from 'react';
import { SEPARATE_CHARGES_DATA } from '../data/content';
import {
  Server,
  UploadCloud,
  Compass,
  HardDrive,
  ShieldCheck,
  Layers,
  CreditCard,
  Info,
} from 'lucide-react';

const CHARGE_ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Server,
  UploadCloud,
  Compass,
  HardDrive,
  ShieldCheck,
  Layers,
  CreditCard,
};

export const SeparateCharges: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F5F7FA] border-t border-[#E0E5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#0D1B3D] uppercase">
            TRANSPARENT TERMS
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D1B3D] tracking-tight [text-wrap:balance]">
            A Few Things to Know Before You Start
          </h2>
          <p className="mt-4 text-base text-[#647084] leading-relaxed [text-wrap:pretty]">
            To ensure complete clarity, here are third-party and auxiliary services handled separately
            from core software development packages.
          </p>
        </div>

        {/* Charges Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SEPARATE_CHARGES_DATA.map((item) => {
            const Icon = CHARGE_ICON_MAP[item.iconName] || Info;

            return (
              <div
                key={item.id}
                className="p-5 sm:p-6 bg-white border border-[#E0E5EC] rounded-xl shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-[#0D1B3D]/5 flex items-center justify-center text-[#0D1B3D]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#0D1B3D] bg-slate-100 px-2 py-1 rounded">
                      {item.cost}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[#0D1B3D]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs text-[#647084] leading-relaxed [text-wrap:pretty]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prominent Mandatory Clarification Box */}
        <div className="mt-8 p-5 sm:p-6 bg-white border-l-4 border-[#F4B400] rounded-r-xl border-y border-r border-[#E0E5EC] shadow-xs">
          <div className="flex items-start gap-3.5">
            <Info className="w-5 h-5 text-[#F4B400] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#0D1B3D]">Important Clarification</h4>
              <p className="mt-1 text-xs sm:text-sm text-[#263247] leading-relaxed">
                “Package prices cover the agreed development scope only. Domain registration, hosting,
                maintenance, applicable publishing charges and external service costs are not included
                unless explicitly stated in the written quotation.”
              </p>
              <p className="mt-2 text-[11px] text-[#647084]">
                Note: We never double-charge publishing when deployment is already agreed upon in your
                written quotation. Maintenance and domain plans are tailored flexibly to your actual
                traffic and requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

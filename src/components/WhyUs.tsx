import React from 'react';
import { WHY_US_POINTS } from '../data/content';
import {
  Sliders,
  MonitorSmartphone,
  FileCheck,
  Zap,
  Gauge,
  Headphones,
} from 'lucide-react';

const WHY_ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Sliders,
  MonitorSmartphone,
  FileCheck,
  Zap,
  Gauge,
  Headphones,
};

export const WhyUs: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F5F7FA] border-t border-[#E0E5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#0D1B3D] uppercase">
            WHY LOCAL RISE
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D1B3D] tracking-tight [text-wrap:balance]">
            Your Goals. Our Digital Expertise.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#647084] leading-relaxed [text-wrap:pretty]">
            We operate with strict engineering integrity. No exaggerated claims, no opaque fees—just
            dependable digital systems designed to move your business forward.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_US_POINTS.map((pt, idx) => {
            const Icon = WHY_ICON_MAP[pt.icon] || Sliders;

            return (
              <div
                key={idx}
                className="p-6 sm:p-7 bg-white border border-[#E0E5EC] rounded-xl shadow-xs hover:border-[#0D1B3D]/30 transition-all duration-150"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0D1B3D]/5 flex items-center justify-center text-[#0D1B3D]">
                  <Icon className="w-5 h-5 text-[#0D1B3D]" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-[#0D1B3D] tracking-tight">
                  {pt.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-[#647084] leading-relaxed [text-wrap:pretty]">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

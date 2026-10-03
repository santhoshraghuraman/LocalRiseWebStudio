import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { Check } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-[#E0E5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#0D1B3D] uppercase">
            HOW WE WORK
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D1B3D] tracking-tight [text-wrap:balance]">
            From Initial Discovery to Confident Launch.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#647084] leading-relaxed [text-wrap:pretty]">
            A structured, transparent engineering process tailored to your business schedule and specifications.
          </p>
        </div>

        {/* 4 Steps Sequence */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-between p-6 sm:p-7 bg-[#F5F7FA] border border-[#E0E5EC] rounded-xl hover:border-[#0D1B3D]/30 transition-colors"
            >
              <div>
                {/* Step Number with Warm Orange Accent */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold font-mono text-[#0D1B3D] tracking-tight">
                    {step.number}
                  </span>
                  <span className="text-xs font-bold text-[#F4B400] uppercase tracking-wider">
                    Phase {idx + 1}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="mt-4 text-xl font-bold text-[#0D1B3D] tracking-tight">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-[#647084] leading-relaxed [text-wrap:pretty]">
                  {step.description}
                </p>

                {/* Deliverables Bullet List */}
                <div className="mt-6 pt-4 border-t border-[#E0E5EC] space-y-2">
                  <span className="text-[11px] font-bold text-[#0D1B3D] uppercase tracking-wider">
                    Key Outcomes:
                  </span>
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-[#263247]">
                      <Check className="w-3 h-3 text-[#F4B400] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

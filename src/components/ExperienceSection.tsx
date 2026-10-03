import React from 'react';
import { Calendar, Briefcase, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES_DATA } from '../data/content';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header matching Reference Screenshot 3 */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066FF]">
            Proven Track Record
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0D1B3D] tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#647084] max-w-2xl leading-relaxed">
            Hands-on software engineering delivering client solutions and startup architectures.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          {EXPERIENCES_DATA.map((exp) => (
            <div
              key={exp.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_2px_12px_rgba(13,27,61,0.03)] hover:shadow-[0_8px_24px_rgba(13,27,61,0.06)] transition-all duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Column: Date & Organization */}
                <div className="lg:col-span-4 flex flex-col items-start">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066FF] tracking-wider uppercase mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0D1B3D] tracking-tight">
                    {exp.company}
                  </h3>
                </div>

                {/* Right Column: Role, Narrative & Highlights */}
                <div className="lg:col-span-8 flex flex-col space-y-5">
                  {/* Role Title */}
                  <div className="flex items-center gap-2 text-base sm:text-lg font-bold text-[#0D1B3D]">
                    <Briefcase className="w-4 h-4 text-[#0066FF]" />
                    <span>{exp.role}</span>
                  </div>

                  {/* Narrative Description */}
                  <p className="text-sm sm:text-base text-[#647084] leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Achievement Highlights */}
                  <div className="pt-2 space-y-3">
                    <span className="text-xs font-bold text-[#0066FF] tracking-wider uppercase">
                      Key Achievement Highlights
                    </span>
                    <div className="space-y-2.5">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm text-[#475569]">
                          <CheckCircle2 className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ExternalLink, CheckCircle2, Rocket, GitFork, FileText } from 'lucide-react';
import { FEATURED_PROJECT_NEARVA } from '../data/content';
import { NearvaPhoneMockup } from './NearvaPhoneMockup';

export const FeaturedProjectShowcase: React.FC = () => {
  const project = FEATURED_PROJECT_NEARVA;

  return (
    <div className="space-y-6">
      {/* Section Header matching Reference Screenshot 2 */}
      <div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066FF]">
          Premier Product Spotlight
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0D1B3D] tracking-tight">
          Featured Project Showcase
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#647084] max-w-2xl leading-relaxed">
          An in-depth look at Santhosh R's premier startup marketplace built to facilitate
          hyperlocal transactions at scale.
        </p>
      </div>

      {/* Main Showcase Card */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-[0_4px_20px_rgba(13,27,61,0.04)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Pixel-Accurate Nearva Smartphone Mockup */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <NearvaPhoneMockup />
          </div>

          {/* Right Column: Project Details & Outcomes */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Startup Founder Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
              <Rocket className="w-3.5 h-3.5 text-blue-600" />
              <span>{project.badge}</span>
            </div>

            {/* Project Title & Narrative */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0D1B3D] tracking-tight">
                {project.name}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#647084] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Business Impact Box */}
            <div className="w-full p-4 sm:p-5 rounded-xl bg-[#F0F9FF] border border-[#BAE6FD]">
              <span className="text-[11px] font-bold text-[#0284C7] tracking-wider uppercase">
                Business Impact
              </span>
              <p className="mt-1 text-sm font-medium text-[#0C4A6E] leading-relaxed">
                {project.businessImpact}
              </p>
            </div>

            {/* Project Outcomes */}
            <div className="w-full space-y-3">
              <span className="text-xs font-bold text-[#0D1B3D] tracking-wider uppercase">
                Project Outcomes
              </span>
              <div className="space-y-2.5">
                {project.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[#475569]">
                    <CheckCircle2 className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0066FF] hover:bg-[#0052CC] active:bg-[#0040A8] rounded-lg shadow-sm transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]"
                aria-label={`Open ${project.name} live application in a new tab`}
              >
                <span>{project.primaryButtonLabel}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Secondary Reference Buttons (Accurate to requirements) */}
              <div
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-semibold text-slate-400 bg-slate-50 border border-slate-200 rounded-lg cursor-not-allowed select-none"
                title="Private proprietary repository"
              >
                <GitFork className="w-3.5 h-3.5" />
                <span>Repository (Private)</span>
              </div>

              <div
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-semibold text-slate-400 bg-slate-50 border border-slate-200 rounded-lg cursor-not-allowed select-none"
                title="Full case study coming soon"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Case Study</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

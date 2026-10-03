import React from 'react';
import { ProjectCards } from './ProjectCards';
import { FeaturedProjectShowcase } from './FeaturedProjectShowcase';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#F5F7FA] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-24">
        {/* Section B: Featured Project Showcase (Nearva) */}
        <div>
          <FeaturedProjectShowcase />
        </div>

        {/* Section A: Completed Project Cards Grid */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066FF]">
              Completed Projects
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0D1B3D] tracking-tight">
              Production Client Portfolio
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#647084] max-w-2xl leading-relaxed">
              Explore our live web deployments engineered for recruitment, organic e-commerce,
              creative agencies, and local real estate.
            </p>
          </div>

          <ProjectCards />
        </div>
      </div>
    </section>
  );
};

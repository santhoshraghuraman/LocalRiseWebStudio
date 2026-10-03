import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS_DATA } from '../data/content';

export const ProjectCards: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* 2-Column Responsive Grid matching Reference Screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(13,27,61,0.04)] hover:shadow-[0_12px_30px_rgba(13,27,61,0.08)] transition-all duration-300"
          >
            {/* Top Project Screenshot */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-slate-100">
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Card Content Body */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5">
              <div>
                <h3 className="text-xl font-bold text-[#0D1B3D] tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-[#647084] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-5 pt-2">
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200/80 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Primary Action Button */}
                <div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-[#0066FF] hover:bg-[#0052CC] active:bg-[#0040A8] rounded-lg shadow-sm transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]"
                    aria-label={`Open live demo of ${project.name} in a new tab`}
                  >
                    <span>{project.buttonLabel || 'Live Demo'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

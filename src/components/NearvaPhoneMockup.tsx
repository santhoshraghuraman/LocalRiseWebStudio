import React from 'react';

export const NearvaPhoneMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto select-none flex items-center justify-center">
      <img 
        src="/portfolio/nearva-mobile.jpg" 
        alt="Nearva Mobile App Interface" 
        className="w-full h-auto object-contain pointer-events-none mix-blend-multiply"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};



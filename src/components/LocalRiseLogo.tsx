import React from 'react';
import exactLogoImg from '../assets/images/logo_exact_1790997273823.jpeg';

interface LocalRiseLogoProps {
  variant?: 'horizontal' | 'full' | 'icon';
  theme?: 'light' | 'dark';
  className?: string;
  iconSize?: number;
}

export const LocalRiseLogo: React.FC<LocalRiseLogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  className = '',
  iconSize = 46,
}) => {
  const isDark = theme === 'dark';

  if (variant === 'full') {
    const computedWidth = iconSize ? iconSize * 4.2 : 220;
    return (
      <div className={`inline-flex flex-col items-center select-none ${className}`}>
        <img
          src={isDark ? '/logo-dark.svg' : exactLogoImg}
          alt="Local Rise Web Studio - Official Logo"
          style={{ width: `${computedWidth}px`, maxWidth: '100%' }}
          className={`h-auto object-contain drop-shadow-xs transition-transform duration-200 hover:scale-[1.02] ${!isDark ? 'mix-blend-multiply' : ''}`}
          loading="eager"
        />
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <div
        className={`inline-flex items-center justify-center overflow-hidden select-none ${className}`}
        style={{ width: iconSize, height: iconSize }}
      >
        <img
          src={isDark ? '/logo-dark.svg' : exactLogoImg}
          alt="Local Rise Brand Icon"
          className={`w-full h-full object-contain ${!isDark ? 'mix-blend-multiply' : ''}`}
          loading="eager"
        />
      </div>
    );
  }

  // Horizontal variant (Ideal for Top Navbar & Section Headers)
  const horizontalSrc = isDark ? '/logo-horizontal-dark.svg' : '/logo-horizontal.svg';
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={horizontalSrc}
        alt="Local Rise Web Studio"
        style={{ height: `${iconSize}px` }}
        className="w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
        loading="eager"
      />
    </div>
  );
};


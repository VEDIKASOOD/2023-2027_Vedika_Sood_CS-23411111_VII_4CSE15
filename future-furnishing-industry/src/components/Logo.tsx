import React from 'react';

interface LogoProps {
  className?: string;
  layout?: 'horizontal' | 'vertical' | 'icon';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({
  className = '',
  layout = 'horizontal',
  theme = 'light',
  size = 'md',
}: LogoProps) {
  // Color configuration
  const textColor = theme === 'dark' ? 'text-white' : 'text-[#0A192F]';
  const subTextColor = theme === 'dark' ? 'text-stone-300' : 'text-stone-600';
  const detailColor = theme === 'dark' ? 'text-stone-400' : 'text-stone-500';

  // Sizing definitions
  const iconSizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const textGroupSizeMap = {
    sm: 'space-y-0.5 ml-2.5',
    md: 'space-y-1 ml-3.5',
    lg: 'space-y-1.5 ml-5',
    xl: 'space-y-2 mt-4 text-center',
  };

  const titleSizeMap = {
    sm: 'text-sm font-black tracking-[0.25em] leading-none',
    md: 'text-lg font-black tracking-[0.25em] leading-none',
    lg: 'text-2xl font-black tracking-[0.25em] leading-none',
    xl: 'text-3xl font-black tracking-[0.25em] leading-none',
  };

  const subtitleSizeMap = {
    sm: 'text-[7px] tracking-[0.3em] font-extrabold uppercase',
    md: 'text-[9px] tracking-[0.3em] font-extrabold uppercase',
    lg: 'text-[11px] tracking-[0.35em] font-extrabold uppercase',
    xl: 'text-[12px] tracking-[0.35em] font-extrabold uppercase',
  };

  const tagSizeMap = {
    sm: 'hidden',
    md: 'text-[6px] tracking-[0.4em]',
    lg: 'text-[8px] tracking-[0.4em]',
    xl: 'text-[9px] tracking-[0.45em]',
  };

  const currentIconSize = iconSizeMap[size];

  // Beautiful gold-metallic SVG Icon
  const LogoIcon = () => (
    <svg
      id="ffi-logo-icon"
      viewBox="0 0 100 100"
      className={`${currentIconSize} select-none shrink-0 transition-transform duration-300`}
    >
      <defs>
        {/* Elite metallic gold linear gradient */}
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C5A059" />
          <stop offset="30%" stopColor="#F4D080" />
          <stop offset="65%" stopColor="#B38F46" />
          <stop offset="100%" stopColor="#8C6D2F" />
        </linearGradient>
        {/* Soft drop shadow for elements */}
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="1" dy="1.5" stdDeviation="1" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* The golden crescent arc wrapping the left and bottom */}
      <path
        d="M 68 14 A 38 38 0 1 0 68 86 C 54 86 36 78 28 64 C 20 50 20 34 32 19"
        fill="none"
        stroke="url(#goldGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#shadow)"
      />

      {/* Monogram F - Black (First character) */}
      <text
        x="33"
        y="65"
        fontFamily="'Playfair Display', 'Times New Roman', Georgia, serif"
        fontSize="44"
        fontWeight="800"
        fill={theme === 'dark' ? '#E2E8F0' : '#1A2E40'}
        className="transition-colors duration-300"
        style={{ letterSpacing: '-0.05em' }}
      >
        F
      </text>

      {/* Monogram F - Gold (Second character) */}
      <text
        x="53"
        y="65"
        fontFamily="'Playfair Display', 'Times New Roman', Georgia, serif"
        fontSize="44"
        fontWeight="800"
        fill="url(#goldGradient)"
        filter="url(#shadow)"
        style={{ letterSpacing: '-0.05em' }}
      >
        F
      </text>

      {/* Monogram I - Gold (Third character) */}
      <text
        x="72"
        y="65"
        fontFamily="'Playfair Display', 'Times New Roman', Georgia, serif"
        fontSize="44"
        fontWeight="800"
        fill="url(#goldGradient)"
        filter="url(#shadow)"
      >
        I
      </text>
    </svg>
  );

  if (layout === 'icon') {
    return <LogoIcon />;
  }

  if (layout === 'vertical' || size === 'xl') {
    return (
      <div id="ffi-logo-vertical" className={`flex flex-col items-center select-none text-center ${className}`}>
        <LogoIcon />
        <div className="space-y-1 mt-4">
          <div className={`flex items-center justify-center gap-1.5 ${titleSizeMap[size]} ${textColor}`}>
            <span>FUTURE</span>
            {/* The golden hamburger/accent bars next to FUTURE */}
            <div className="flex flex-col gap-[2px] justify-center mt-0.5">
              <span className="w-4 h-[2px] bg-amber-500 rounded-sm"></span>
              <span className="w-4 h-[2px] bg-amber-500 rounded-sm"></span>
              <span className="w-4 h-[2px] bg-amber-500 rounded-sm"></span>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-amber-500/50"></span>
            <span className={`${subtitleSizeMap[size]} ${subTextColor}`}>FURNISHING INDUSTRY</span>
            <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-amber-500/50"></span>
          </div>

          <div className="text-[7px] text-amber-500 font-extrabold uppercase tracking-[0.25em] mt-1 flex items-center justify-center gap-1.5">
            <span>INNOVATE</span>
            <span className="text-[5px] text-stone-400">•</span>
            <span>INSPIRE</span>
            <span className="text-[5px] text-stone-400">•</span>
            <span>ELEVATE</span>
          </div>
        </div>
      </div>
    );
  }

  // Horizontal layout (Icon and Text side-by-side) - Perfect for Navbars and Footers
  return (
    <div id="ffi-logo-horizontal" className={`flex items-center select-none ${className}`}>
      <LogoIcon />
      <div className={`flex flex-col text-left ${textGroupSizeMap[size]}`}>
        <div className={`flex items-center gap-1.5 ${titleSizeMap[size]} ${textColor}`}>
          <span>FUTURE</span>
          <div className="flex flex-col gap-[1.5px] justify-center mt-0.5">
            <span className="w-3 h-[1.5px] bg-amber-500 rounded-sm"></span>
            <span className="w-3 h-[1.5px] bg-amber-500 rounded-sm"></span>
            <span className="w-3 h-[1.5px] bg-amber-500 rounded-sm"></span>
          </div>
        </div>
        <span className={`${subtitleSizeMap[size]} ${subTextColor}`}>FURNISHING INDUSTRY</span>
        <span className={`${tagSizeMap[size]} uppercase text-amber-500 font-extrabold block`}>INNOVATE • INSPIRE • ELEVATE</span>
      </div>
    </div>
  );
}

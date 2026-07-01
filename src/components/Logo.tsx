import React from 'react';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export default function Logo({ className = '', isLight = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Hollow Triangle with exact Deep Blue to Turquoise Gradient */}
      <div className="relative w-11 h-11 md:w-14 md:h-14 flex-shrink-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoTriangleGrad" x1="10" y1="85" x2="90" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1a4cd2" />
              <stop offset="50%" stopColor="#2c69d8" />
              <stop offset="100%" stopColor="#00b0b9" />
            </linearGradient>
          </defs>
          {/* Exact recreated hollow delta shape */}
          <path
            d="M 50,15 L 88,82 L 12,82 Z M 50,33 L 28,73 L 72,73 Z"
            fill="url(#logoTriangleGrad)"
            fillRule="evenodd"
          />
        </svg>
      </div>

      {/* Crisp HTML Typography for NIS BPO */}
      <div className="text-left flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className={`text-lg md:text-xl font-black tracking-tight font-display transition-colors ${
            isLight ? 'text-white' : 'text-slate-900'
          }`}>
            NIS BPO
          </span>
          <span className={`text-[10px] md:text-xs font-bold tracking-tight font-sans transition-colors ${
            isLight ? 'text-[#00b0b9]' : 'text-slate-600'
          }`}>
            Services Pvt. Ltd.
          </span>
        </div>
        <span className={`text-[8.5px] md:text-[10px] font-black tracking-wide block mt-1 leading-tight italic font-sans whitespace-nowrap transition-colors ${
          isLight ? 'text-slate-300' : 'text-slate-500'
        }`}>
          Here Success is a journey, not a destination
        </span>
      </div>
    </div>
  );
}

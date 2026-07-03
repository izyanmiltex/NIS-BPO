import React from 'react';

interface LogoProps {
  className?: string;
  isLight?: boolean;
  align?: 'center' | 'left';
}

export default function Logo({ className = '', isLight = false, align = 'center' }: LogoProps) {
  const isLeft = align === 'left';
  return (
    <div className={`flex flex-col ${isLeft ? 'items-start' : 'items-center'} select-none ${className}`}>
      {/* Precision Integrated Triangle Emblem matching the uploaded logo */}
      <div className="relative w-[110px] h-[70px] md:w-[140px] md:h-[89px] flex-shrink-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 400 255"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Diagonal gradient flowing from bottom-left to top-right to match the uploaded logo colors */}
            <linearGradient id="logoTriangleGrad" x1="40" y1="270" x2="320" y2="95" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1444cc" />
              <stop offset="45%" stopColor="#1e68d7" />
              <stop offset="100%" stopColor="#00b0b9" />
            </linearGradient>
          </defs>
          
          {/* Outer Triangle */}
          <path
            d="M 200,10 L 360,270 L 40,270 Z"
            fill="url(#logoTriangleGrad)"
          />
          
          {/* Inner Hollow and Left Cutout combined into a single precise shape */}
          {/* This preserves the unbroken right leg of the triangle perfectly */}
          <path
            d="M 200,95 L 290,240 L 58.5,240 L 86,195 L 138,195 Z"
            fill="white"
          />

          {/* Precise horizontal underline matching the line in the uploaded logo */}
          <line
            x1="58.5"
            y1="240"
            x2="290"
            y2="240"
            stroke="#111827"
            strokeWidth="2.5"
          />

          {/* NIS BPO Ltd. - Large Serif Text matching the image exactly */}
          <text
            x="64"
            y="231"
            fontFamily="Georgia, Cambria, 'Times New Roman', Times, serif"
            fill="#111827"
          >
            <tspan fontWeight="bold" fontSize="38">NIS BPO</tspan>
            <tspan fontWeight="normal" fontSize="19" dx="10">Ltd.</tspan>
          </text>
        </svg>
      </div>

      {/* Slogan centered underneath the triangle in prominent royal blue, scaled down further by another 10% */}
      <div className={`text-[5.4px] md:text-[6.9px] lg:text-[8.4px] font-bold text-[#1444cc] font-serif ${isLeft ? 'text-left' : 'text-center'} mt-2 tracking-wide leading-none whitespace-nowrap`}>
        Here Success is a journey, not a destination
      </div>
    </div>
  );
}

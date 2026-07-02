import React from 'react';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export default function Logo({ className = '', isLight = false }: LogoProps) {
  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* Precision Integrated Triangle Emblem matching the uploaded logo */}
      <div className="relative w-[104px] h-[81px] md:w-[126px] md:h-[92px] flex-shrink-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoTriangleGrad" x1="40" y1="265" x2="360" y2="265" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1a4cd2" />
              <stop offset="50%" stopColor="#2c69d8" />
              <stop offset="100%" stopColor="#00b0b9" />
            </linearGradient>
          </defs>
          
          {/* Outer Triangle */}
          <path
            d="M 200,15 L 360,265 L 40,265 Z"
            fill="url(#logoTriangleGrad)"
          />
          
          {/* Inner Hollow Triangle Cutout */}
          <path
            d="M 200,80 L 115,225 L 285,225 Z"
            fill="white"
          />

          {/* White horizontal bar covering the text area */}
          <rect
            x="55"
            y="200"
            width="290"
            height="40"
            fill="white"
          />

          {/* NIS BPO - Large Serif Text matching the image */}
          <text
            x="70"
            y="234"
            fontFamily="Georgia, Cambria, 'Times New Roman', Times, serif"
            fontSize="38"
            fontWeight="bold"
            fill="#111827"
          >
            NIS BPO
          </text>

          {/* Services Pvt. Ltd. - Sans-Serif Suffix Text */}
          <text
            x="225"
            y="230"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="12"
            fontWeight="bold"
            fill="#374151"
          >
            Services Pvt. Ltd.
          </text>
        </svg>
      </div>
      
      {/* Tagline centered underneath the triangle in royal blue */}
      <span className="text-[8px] md:text-[10px] font-semibold tracking-wide text-[#1a4cd2] font-serif text-center mt-1 leading-none whitespace-nowrap">
        Here Success is a journey, not a destination
      </span>
    </div>
  );
}

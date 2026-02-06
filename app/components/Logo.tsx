"use client";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
}

export default function Logo({ className = "", size = "md", variant = "full" }: LogoProps) {
  const sizeClasses = {
    sm: "w-9 h-9",
    md: "w-12 h-12",
    lg: "w-20 h-20",
  };

  const textSizes = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-5xl",
  };

  if (variant === "icon") {
    return (
      <div
        className={`${sizeClasses[size]} ${className} transition-transform duration-200 hover:scale-105 flex items-center justify-center`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Brush texture filter for hand-painted effect - reduced intensity */}
            <filter id="brushTexture" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="turbulence"/>
              <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
            {/* Glow effect for brush strokes */}
            <filter id="brushGlow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* S - Clear, unmistakable S shape */}
          <path
            d="M8 20 C8 12, 16 10, 22 14 C28 18, 28 24, 24 28 C20 32, 14 32, 14 36 C14 40, 18 42, 22 40 C26 38, 28 42, 28 48 C28 54, 22 58, 16 58 C10 58, 6 54, 6 48"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#brushGlow)"
            opacity="1"
          />
          
          {/* J - Hand painted brush style */}
          <path
            d="M50 10 L70 10 L70 46 C70 56, 64 62, 54 62 C48 62, 44 58, 44 52"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#brushGlow)"
            opacity="1"
          />
          
          {/* Subtle brush texture overlay - reduced intensity */}
          <path
            d="M8 20 C8 12, 16 10, 22 14 C28 18, 28 24, 24 28 C20 32, 14 32, 14 36 C14 40, 18 42, 22 40 C26 38, 28 42, 28 48 C28 54, 22 58, 16 58 C10 58, 6 54, 6 48"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#brushTexture)"
            opacity="0.5"
          />
          <path
            d="M50 10 L70 10 L70 46 C70 56, 64 62, 54 62 C48 62, 44 58, 44 52"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#brushTexture)"
            opacity="0.5"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon */}
      <div className={`${sizeClasses[size]} flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="brushTextureFull" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="turbulence"/>
              <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
            <filter id="brushGlowFull">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* S - Base stroke - Clear, unmistakable S shape */}
          <path
            d="M8 20 C8 12, 16 10, 22 14 C28 18, 28 24, 24 28 C20 32, 14 32, 14 36 C14 40, 18 42, 22 40 C26 38, 28 42, 28 48 C28 54, 22 58, 16 58 C10 58, 6 54, 6 48"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#brushGlowFull)"
            opacity="1"
          />
          
          {/* J - Base stroke */}
          <path
            d="M50 10 L70 10 L70 46 C70 56, 64 62, 54 62 C48 62, 44 58, 44 52"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#brushGlowFull)"
            opacity="1"
          />
          
          {/* Subtle texture overlay - reduced intensity */}
          <path
            d="M8 20 C8 12, 16 10, 22 14 C28 18, 28 24, 24 28 C20 32, 14 32, 14 36 C14 40, 18 42, 22 40 C26 38, 28 42, 28 48 C28 54, 22 58, 16 58 C10 58, 6 54, 6 48"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#brushTextureFull)"
            opacity="0.5"
          />
          <path
            d="M50 10 L70 10 L70 46 C70 56, 64 62, 54 62 C48 62, 44 58, 44 52"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#brushTextureFull)"
            opacity="0.5"
          />
        </svg>
      </div>
      
      {/* Text with brush style */}
      <div 
        className={`${textSizes[size]} font-bold text-white dark:text-white`}
        style={{
          fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Comic Sans MS', cursive",
          fontWeight: "normal",
          letterSpacing: "0.08em",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5), 0 0 8px rgba(255,255,255,0.3)",
          filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))",
        }}
      >
        Shubham Jain
      </div>
    </div>
  );
}

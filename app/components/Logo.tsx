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
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  // Clean minimal monogram - SJ (inspired by MK-style portfolio logos: minimal, professional)
  const logoSvg = (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* S - minimal curved form */}
      <path
        d="M22 32 C22 24, 28 20, 36 22 C42 24, 44 28, 42 34 L42 42 C40 48, 36 50, 30 50 C24 50, 20 46, 20 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 50 C44 56, 42 62, 36 66 C28 70, 22 68, 22 62 L22 56 C22 52, 26 50, 30 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* J - minimal with hook */}
      <path
        d="M58 22 L78 22 L78 58 C78 68, 72 74, 62 74 C56 74, 52 70, 52 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (variant === "icon") {
    return (
      <div
        className={`${sizeClasses[size]} ${className} text-slate-800 dark:text-slate-100 transition-transform duration-200 hover:scale-105`}
      >
        {logoSvg}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} text-slate-800 dark:text-slate-100`}>
        {logoSvg}
      </div>
      <div className={`${textSizes[size]} font-semibold tracking-tight text-slate-800 dark:text-slate-100`}>
        Shubham Jain
      </div>
    </div>
  );
}

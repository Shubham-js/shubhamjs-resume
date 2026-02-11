"use client";
import Image from "next/image";
import "./logo.css";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
}

export default function Logo({
  className = "",
  size = "md",
  variant = "full",
}: LogoProps) {
  const getIcon = (size: "sm" | "md" | "lg") => (
    <div className="relative inline-block">
      <Image
        src="/icon.png"
        alt="SJ"
        className={`rounded-full animate-logo-glow`}
        width={size === "sm" ? 100 : size === "md" ? 300 : 500}
        height={size === "sm" ? 100 : size === "md" ? 300 : 500}
      />
    </div>
  );
  if (variant === "icon") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {getIcon(size)}
      </div>
    );
  }
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon */}
      <div className={`flex items-center justify-center`}>{getIcon(size)}</div>
    </div>
  );
}

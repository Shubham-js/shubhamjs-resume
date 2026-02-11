"use client";

import React from "react";
import { portfolioData } from "../data/portfolio";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const textSequence = [portfolioData.name, portfolioData.title];

  const currentFullText = textSequence[textIndex];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 2000;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentFullText) {
      // Pause at the end before deleting
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === "") {
      // Move to next text in sequence using callback
      timer = setTimeout(() => {
        const nextIndex = (textIndex + 1) % textSequence.length;
        setTextIndex(nextIndex);
        setIsDeleting(false);
      }, 100);
    } else {
      // Typing or deleting
      const nextText = isDeleting
        ? currentFullText.substring(0, displayText.length - 1)
        : currentFullText.substring(0, displayText.length + 1);

      timer = setTimeout(
        () => setDisplayText(nextText),
        isDeleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentFullText, textIndex, textSequence]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-black pt-20"
    >
      {/* Animated gradient background with neon accents */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15), transparent 50%)`,
        }}
      />

      {/* Neon accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20 dark:opacity-30"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20 dark:opacity-30"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-20 dark:opacity-30"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Animated neon orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Logo - Left Side */}
          <div className="flex justify-center lg:justify-start">
            <Logo size="lg" variant="icon" />
          </div>

          {/* Content - Right Side */}
          <div className="text-center lg:text-left">
            {/* Animated Typing Text - Name and Title Only */}
            <h1
              className={`font-extrabold text-gray-900 dark:text-white mb-4 flex items-center min-h-20 transition-all duration-300 ${
                textIndex === 0
                  ? "text-2xl md:text-3xl lg:text-4xl"
                  : "text-2xl md:text-3xl lg:text-4xl"
              }`}
            >
              <span className="inline-block">
                {displayText}
                <span className="animate-pulse ml-1">|</span>
              </span>
            </h1>
            {/* Static Bio */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-12 leading-relaxed">
              {portfolioData.bio}
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                Get In Touch
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg font-semibold hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                View My Work
              </a>
            </div>
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6">
              {portfolioData.socialLinks.map((social, idx) => {
                const getSocialIcon = (iconName: string) => {
                  const icons: Record<string, React.ReactNode> = {
                    github: (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    ),
                    linkedin: (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                    twitter: (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    ),
                    email: (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    ),
                  };
                  return (
                    icons[iconName.toLowerCase()] || (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    )
                  );
                };

                const getSocialColor = (iconName: string) => {
                  const colors: Record<
                    string,
                    { hover: string; default: string }
                  > = {
                    github: {
                      hover:
                        "hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900",
                      default: "text-gray-700 dark:text-gray-300",
                    },
                    linkedin: {
                      hover: "hover:bg-blue-600 hover:text-white",
                      default: "text-blue-600 dark:text-blue-400",
                    },
                    twitter: {
                      hover: "hover:bg-blue-400 hover:text-white",
                      default: "text-blue-400 dark:text-blue-500",
                    },
                    email: {
                      hover: "hover:bg-purple-600 hover:text-white",
                      default: "text-purple-600 dark:text-purple-400",
                    },
                  };
                  return (
                    colors[iconName.toLowerCase()] || {
                      hover: "hover:bg-gray-600 hover:text-white",
                      default: "text-gray-600 dark:text-gray-400",
                    }
                  );
                };

                const colorClasses = getSocialColor(social.icon);

                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-14 h-14 rounded-xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 flex items-center justify-center ${colorClasses.default} ${colorClasses.hover} transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-xl hover:border-transparent`}
                    aria-label={social.name}
                    style={{
                      animationDelay: `${idx * 100}ms`,
                    }}
                  >
                    {/* Animated background glow */}
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm ${
                        social.icon.toLowerCase() === "github"
                          ? "from-gray-800 to-gray-900"
                          : social.icon.toLowerCase() === "linkedin"
                            ? "from-blue-600 to-blue-700"
                            : social.icon.toLowerCase() === "twitter"
                              ? "from-blue-400 to-blue-500"
                              : "from-purple-600 to-purple-700"
                      }`}
                    />

                    {/* Icon */}
                    <div className="relative z-10 transform group-hover:rotate-6 transition-transform duration-300">
                      {getSocialIcon(social.icon)}
                    </div>

                    {/* Pulse animation */}
                    <div
                      className={`absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 animate-ping ${
                        social.icon.toLowerCase() === "github"
                          ? "border-gray-800"
                          : social.icon.toLowerCase() === "linkedin"
                            ? "border-blue-600"
                            : social.icon.toLowerCase() === "twitter"
                              ? "border-blue-400"
                              : "border-purple-600"
                      }`}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

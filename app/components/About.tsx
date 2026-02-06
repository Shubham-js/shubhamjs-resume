"use client";

import { portfolioData } from "../data/portfolio";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Crafting Digital Experiences
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image/Content */}
            <div className="space-y-6">
              {/* Profile Picture */}
              <div className="flex justify-center md:justify-start mb-6">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 neon-border">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center text-white text-6xl font-bold">
                    {portfolioData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  {/* You can replace the gradient div above with an actual image:
                  <img 
                    src="/profile.jpg" 
                    alt={portfolioData.name}
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                {portfolioData.bio}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm passionate about creating beautiful, functional, and user-centered digital solutions. 
                With a keen eye for detail and a commitment to excellence, I bring ideas to life through 
                clean code and thoughtful design.
              </p>
            </div>

            {/* Right Column - Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-800">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-800">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-800">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">30+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-800">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Awards Won</div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                  Location
                </div>
                <div className="text-lg text-gray-900 dark:text-white">{portfolioData.location}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                  Email
                </div>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="text-lg text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {portfolioData.email}
                </a>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                  Status
                </div>
                <div className="text-lg text-gray-900 dark:text-white">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

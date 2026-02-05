"use client";

import { portfolioData } from "../data/portfolio";
import { useEffect, useRef, useState } from "react";

export default function Education() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          portfolioData.education.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => new Set(prev).add(index));
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Academic Background
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioData.education.map((edu, index) => {
            const isVisible = visibleItems.has(index);
            
            return (
              <div
                key={edu.id}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="h-full p-8 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
                  {/* Duration Badge */}
                  <div className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold mb-4">
                    {edu.duration}
                  </div>

                  {/* Degree */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>

                  {/* Field */}
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {edu.field}
                  </p>

                  {/* Institution */}
                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
                    {edu.institution}
                  </p>

                  {/* Description */}
                  {edu.description && (
                    <ul className="space-y-2 mb-4">
                      {edu.description.map((item, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start text-sm">
                          <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">▸</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Achievements */}
                  {edu.achievements && (
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Achievements:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-200 dark:border-gray-700"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

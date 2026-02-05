"use client";

import { portfolioData } from "../data/portfolio";
import { useEffect, useRef, useState } from "react";

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          portfolioData.experiences.forEach((_, index) => {
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
      id="experience"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {portfolioData.experiences.map((exp, index) => {
              const isVisible = visibleItems.has(index);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-950 transform md:-translate-x-1/2 z-10" />

                  <div className={`grid md:grid-cols-2 gap-8 items-center ${
                    !isEven ? 'md:flex-row-reverse' : ''
                  }`}>
                    {/* Date */}
                    <div className={`md:text-right ${!isEven ? 'md:order-2 md:text-left' : ''}`}>
                      <div className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold">
                        {exp.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 ${!isEven ? 'md:order-1' : ''}`}>
                      <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.position}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
                          {exp.company}
                        </p>
                        <ul className="space-y-2 mb-4">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start">
                              <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">▸</span>
                              <span className="flex-1">{item}</span>
                            </li>
                          ))}
                        </ul>
                        {exp.technologies && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

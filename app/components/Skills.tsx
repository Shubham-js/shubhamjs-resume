"use client";

import React from "react";
import { portfolioData } from "../data/portfolio";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          portfolioData.skills.forEach((skill, index) => {
            setTimeout(() => {
              setVisibleSkills((prev) => new Set(prev).add(skill));
            }, index * 50);
          });
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillIcon = (skillName: string) => {
    const icons: Record<string, React.ReactNode> = {
      JavaScript: (
        <div className="w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center">
          <span className="text-black font-bold text-lg">JS</span>
        </div>
      ),
      TypeScript: (
        <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
          <span className="text-white font-bold text-sm">TS</span>
        </div>
      ),
      React: (
        <div className="w-12 h-12 rounded-lg bg-cyan-500 flex items-center justify-center">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <ellipse
              cx="12"
              cy="12"
              rx="11"
              ry="4.2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="11"
              ry="4.2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              transform="rotate(60 12 12)"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="11"
              ry="4.2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              transform="rotate(120 12 12)"
            />
          </svg>
        </div>
      ),
      "Next.js": (
        <div className="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center">
          <span className="text-white dark:text-black font-bold text-lg">
            N
          </span>
        </div>
      ),
      "Node.js": (
        <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.736-1.636c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.152,1.282c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.589c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.352C2.99,6.402,2.936,6.493,2.936,6.589v10.82c0,0.097,0.054,0.189,0.139,0.239l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.039c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v11.722 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.608V6.589 c0-0.665,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.939,0.924,1.603 v10.478c0,0.665-0.354,1.265-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,0.607c0.124,0.097,0.318,0.139,0.484,0.064l1.429-0.737c0.211-0.119,0.338-0.355,0.296-0.599 c-0.076-0.438-0.545-1.061-1.486-1.516c-1.005-0.484-2.382-0.63-3.676-0.514c-0.234,0.021-0.478,0.053-0.712,0.099V5.5 c0-0.142-0.114-0.236-0.256-0.236h-1.116c-0.142,0-0.255,0.094-0.255,0.236v1.709c-1.516,0.641-2.795,1.672-2.795,3.694 c0,2.015,1.27,2.504,3.954,2.841c2.878,0.361,3.011,0.685,3.011,1.186c0,0.771-0.441,1.292-2.365,1.292 c-1.897,0-2.662-0.435-3.02-0.688c-0.13-0.092-0.322-0.13-0.488-0.038l-1.5,0.721c-0.207,0.1-0.338,0.318-0.309,0.555 c0.062,0.515,0.552,1.14,1.571,1.633c1.02,0.494,2.31,0.636,3.669,0.514c0.234-0.021,0.478-0.059,0.712-0.112v1.749 c0,0.142,0.114,0.236,0.255,0.236h1.116c0.142,0,0.255-0.094,0.255-0.236v-1.764c1.632-0.536,2.925-1.659,2.925-3.644 L19.099,13.993z" />
          </svg>
        </div>
      ),
      Python: (
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-yellow-400 flex items-center justify-center">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.5 2.5c-1.537 0-2.5 1.12-2.5 2.5v2.5h-2.5v-2.5c0-1.38-.963-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v2.5H2v-2.5C2 1.12 3.463 0 5 0s3 1.12 3 2.5V5h2V2.5c0-1.38.963-2.5 2.5-2.5s2.5 1.12 2.5 2.5V5h2.5v-2.5c0-1.38.963-2.5 2.5-2.5s2.5 1.12 2.5 2.5V5H22v-2.5C22 1.12 20.537 0 19 0s-3 1.12-3 2.5V5h-2V2.5c0-1.38-.963-2.5-2.5-2.5zM2 7h20v15c0 1.38-1.463 2.5-3 2.5s-3-1.12-3-2.5V19h-2v2.5c0 1.38-.963 2.5-2.5 2.5S6 22.88 6 21.5V19H3.5v2.5c0 1.38-.963 2.5-2.5 2.5S-1.5 23.38-1.5 22V7H2zm1.5 2.5v2.5H6v-2.5c0-1.38.963-2.5 2.5-2.5s2.5 1.12 2.5 2.5v2.5h2.5v-2.5c0-1.38.963-2.5 2.5-2.5s2.5 1.12 2.5 2.5v2.5H22v-2.5c0-1.38.963-2.5 2.5-2.5s2.5 1.12 2.5 2.5V22c0 1.38-1.463 2.5-3 2.5s-3-1.12-3-2.5V19h-2v2.5c0 1.38-.963 2.5-2.5 2.5S6 22.88 6 21.5V19H3.5v2.5c0 1.38-.963 2.5-2.5 2.5S-1.5 23.38-1.5 22V9.5c0-1.38.963-2.5 2.5-2.5s2.5 1.12 2.5 2.5z" />
          </svg>
        </div>
      ),
      "HTML/CSS": (
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-blue-500 flex items-center justify-center">
          <span className="text-white font-bold text-xs">HTML</span>
        </div>
      ),
      "Tailwind CSS": (
        <div className="w-12 h-12 rounded-lg bg-cyan-500 flex items-center justify-center">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1.01 2.12 2.19 4.59 2.19 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1.01 2.12 2.19 4.59 2.19 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z" />
          </svg>
        </div>
      ),
      Git: (
        <div className="w-12 h-12 rounded-lg bg-orange-600 flex items-center justify-center">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.644-.223 1.387-.083 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.715.72.715 1.884 0 2.6-.719.721-1.884.721-2.599 0-.72-.719-.72-1.88 0-2.599.177-.178.384-.312.602-.402v-6.53c-.219-.09-.426-.224-.602-.402-.747-.748-1.977-.744-2.724.003-.746.746-.746 1.978 0 2.724.178.177.384.31.602.4v6.53c-.218.09-.424.223-.602.4-.72.72-.72 1.881 0 2.6.716.721 1.88.721 2.599 0 .744-.744.746-1.976.002-2.724-.174-.174-.38-.308-.6-.4v-6.525c.22-.092.426-.226.6-.404.147-.147.312-.264.488-.348l2.658-2.66c.224.64.082 1.38-.435 1.896-.516.515-1.258.658-1.9.438L9.35 5.687l-6.28 6.273c-.604.603-.604 1.582 0 2.188l10.479 10.477c.604.604 1.582.604 2.186 0l10.431-10.429c.605-.603.605-1.582 0-2.186z" />
          </svg>
        </div>
      ),
      MongoDB: (
        <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.533 5.682-4.533 10.653 0 7.642 5.712 8.245 6.004 8.269.113-.005.36-.056.646-.164.637-.245 1.196-.636 1.784-1.21 1.69-1.592 2.088-3.643 2.104-3.723-.024-.076-.366-1.533-1.27-3.464m-4.339 10.082c-.262.198-.57.417-.909.652-.163.121-.331.229-.491.325-.096.063-.194.122-.29.18-.015.01.275.023.69.023 5.093 0 7.68-4.794 7.71-4.842-.006-.013-1.15-3.563-3.74-7.89-.375-.514-1.204-1.516-1.204-1.516l-.004.002s.13.097.35.275c.596.48 1.825 1.75 2.38 3.13.234.57.44 1.15.61 1.72-.35-.58-.78-1.19-1.28-1.81-1.12-1.38-2.5-2.72-4.05-3.82-.71-.5-1.21-.82-1.21-.82l-.004.003s.08.073.214.198c.48.445 1.23 1.15 1.96 2.05 1.28 1.58 2.05 3.31 2.05 5.12-.01 2.72-1.33 5.08-1.33 5.08l.004-.002z" />
          </svg>
        </div>
      ),
      PostgreSQL: (
        <div className="w-12 h-12 rounded-lg bg-blue-700 flex items-center justify-center">
          <span className="text-white font-bold text-xs">SQL</span>
        </div>
      ),
      AWS: (
        <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center">
          <span className="text-white font-bold text-xs">AWS</span>
        </div>
      ),
    };

    return (
      icons[skillName] || (
        <div className="w-12 h-12 rounded-lg bg-gray-600 flex items-center justify-center">
          <span className="text-white font-bold text-sm">
            {skillName.charAt(0)}
          </span>
        </div>
      )
    );
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            Skills & Technologies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Over the years, I've developed and honed expertise in these
            technologies. Here's the stack that powers my work as a software
            developer.
          </p>
        </div>

        {/* Skills Grid with Icons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {portfolioData.skills.map((skill, index) => {
            const isVisible = visibleSkills.has(skill);

            return (
              <div
                key={skill}
                className={`group relative p-6 rounded-xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-500 dark:hover:border-blue-400 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {getSkillIcon(skill)}
                </div>

                {/* Skill Name */}
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill}
                  </h3>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

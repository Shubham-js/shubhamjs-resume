"use client";

import { portfolioData } from "../data/portfolio";

export default function Resume() {
  const resumeUrl = portfolioData.resumeUrl;

  return (
    <section
      id="resume"
      className="py-24 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            Resume
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Download My Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-800 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Get My Complete Resume
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Download my resume in PDF format to learn more about my experience, skills, and achievements.
            </p>
            
            {resumeUrl ? (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume PDF
              </a>
            ) : (
              <div className="p-6 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  To add your Google Drive resume link, update the <code className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm">resumeUrl</code> in <code className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm">app/data/portfolio.ts</code>
                </p>
                <div className="text-left p-4 rounded bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                  <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-2">Example:</p>
                  <p className="text-xs font-mono text-gray-700 dark:text-gray-300 break-all">
                    https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

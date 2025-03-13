import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {/* Reliance Jio */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex-1 md:text-right md:pr-10 mb-4 md:mb-0">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Graduate Engineer Trainee</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-2">Reliance Jio Infocomm Limited</p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Sep 2023 - Jan 2024</p>
                  <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
                    <li>Spearheaded troubleshooting and performance optimization of telecommunication networks, identifying key areas for improvement, which led to a 15% increase in system efficiency.</li>
                    <li>Collaborated with cross-functional teams to support the design and deployment of new network features, ensuring seamless integration and minimal downtime across multiple regions.</li>
                  </ul>
                </div>
              </div>
              
              <div className="hidden md:block z-10 bg-indigo-600 dark:bg-indigo-400 rounded-full w-6 h-6 border-4 border-white dark:border-gray-900"></div>
              
              <div className="flex-1 md:pl-10">
                <div className="md:hidden bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Graduate Engineer Trainee</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-2">Reliance Jio Infocomm Limited</p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Sep 2023 - Jan 2024</p>
                  <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
                    <li>Spearheaded troubleshooting and performance optimization of telecommunication networks, identifying key areas for improvement, which led to a 15% increase in system efficiency.</li>
                    <li>Collaborated with cross-functional teams to support the design and deployment of new network features, ensuring seamless integration and minimal downtime across multiple regions.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* High Radius */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex-1 md:text-right md:pr-10 mb-4 md:mb-0">
                <div className="md:hidden bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Software Development Intern</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-2">High Radius</p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Jan 2022 - Apr 2022</p>
                  <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
                    <li>Created & deployed an AI-Enabled Fintech B2B Cloud Application.</li>
                    <li>Gained expertise in full-stack web development, including UI/UX design, backend systems, and data modeling.</li>
                    <li>Built machine learning models for enhanced financial predictions.</li>
                  </ul>
                </div>
              </div>
              
              <div className="hidden md:block z-10 bg-indigo-600 dark:bg-indigo-400 rounded-full w-6 h-6 border-4 border-white dark:border-gray-900"></div>
              
              <div className="flex-1 md:pl-10">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Software Development Intern</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-2">High Radius</p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Jan 2022 - Apr 2022</p>
                  <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
                    <li>Created & deployed an AI-Enabled Fintech B2B Cloud Application.</li>
                    <li>Gained expertise in full-stack web development, including UI/UX design, backend systems, and data modeling.</li>
                    <li>Built machine learning models for enhanced financial predictions.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
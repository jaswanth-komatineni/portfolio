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
          
          
            {/* Copani LLC */}
            <div className="relative flex flex-col md:flex-row items-center">
              {/* Logo on the left, Company details on the right */}
              <div className="flex-1 md:text-left md:pl-10 mb-4 md:mb-0">
                {/* Logo beside the line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-24 z-10"style={{ top: '175px' }}>
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E0BAQGnSKRaa3sYHw/company-logo_200_200/B4EZUuqItKH0AI-/0/1740244552935?e=2147483647&v=beta&t=tkKxkwEkzybqTC7TDjuf-A_ZvG2xx0Uh7BihbFz7-dg"
                    alt="Copani LLC Logo"
                    className="h-20"
                  />
                </div>
              </div>
              {/* Company details on the right */}
              <div className="hidden md:block z-10 bg-indigo-600 dark:bg-indigo-400 rounded-full w-6 h-6 border-4 border-white dark:border-gray-900"></div>
              <div className="flex-1 md:text-left md:pl-10">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Software Engineer(AI Development)</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-2">Copani LLC</p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">July 2022 - Present</p>
                  <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
                    <li>Developed and maintained full-stack web applications and automation tools using Python (Flask), JavaScript, HTML, and CSS, significantly improving workflow efficiency and data integration across internal processes.</li>
                    <li>Designed and Implemented RESTful APIs, microservices, and backend systems to automate reporting, optimize performance, and support AI-driven decision workflows.</li>
                    <li>Collaborated with cross-functional teams using GitHub, and Agile methodologies, researching and integrating machine learning and cloud-based solutions to enhance software scalability and performance.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Reliance Jio */}
            <div className="relative flex flex-col md:flex-row items-center">
              {/* Company details on the left, Logo on the right */}
              <div className="flex-1 md:text-right md:pr-10 mb-4 md:mb-0">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Graduate Engineer</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-2">Reliance Jio Infocomm Limited</p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">May 2023 - Jan 2024</p>
                  <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
                    <li>Spearheaded troubleshooting and performance optimization of telecommunication networks, identifying key areas for improvement, which led to a 15% increase in system efficiency.</li>
                    <li>Collaborated with cross-functional teams to support the design and deployment of new network features, ensuring seamless integration and minimal downtime across multiple regions.</li>
                  </ul>
                </div>
              </div>

              {/* Logo on the right, beside the timeline line */}

              {/* Logo on the right */}
              <div className="hidden md:block z-10 bg-indigo-600 dark:bg-indigo-400 rounded-full w-6 h-6 border-4 border-white dark:border-gray-900"></div>
              <div className="flex-1 md:pl-10">
                <div className="flex justify-start items-center">
                  <img
                    src="https://www.mobigyaan.com/wp-content/uploads/2013/07/reliance.png"
                    alt="Reliance Jio Logo"
                    className="h-16"
                  />
                </div>
              </div>
            </div>

            {/* High Radius */}
            <div className="relative flex flex-col md:flex-row items-center">
              {/* Logo on the left, Company details on the right */}
              <div className="flex-1 md:text-left md:pl-10 mb-4 md:mb-0">
                {/* Logo beside the line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-24 z-10"style={{ top: '175px' }}>
                  <img
                    src="https://images.yourstory.com/cs/images/companies/HighRadiusEmblem-1628238775387.jpg?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=256&q=75"
                    alt="High Radius Logo"
                    className="h-20"
                  />
                </div>
              </div>
              {/* Company details on the right */}
              <div className="hidden md:block z-10 bg-indigo-600 dark:bg-indigo-400 rounded-full w-6 h-6 border-4 border-white dark:border-gray-900"></div>
              <div className="flex-1 md:text-left md:pl-10">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Software Development Intern</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-2">High Radius</p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Jan 2022 - Apr 2022</p>
                  <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
                    <li>Built a high-performance machine learning pipeline to accurately predict invoice payment dates, boosting prediction accuracy by 25% and enhancing financial forecasting efficiency.</li>
                    <li>Optimized backend performance using Java & SQL, streamlining query execution and cutting data retrieval time by 40% for 10,000+ transactions, ensuring faster and more reliable data access.</li>
                    <li>Designed and developed a dynamic React.js frontend with interactive visualizations, increasing user engagement by 30% and delivering a more intuitive and responsive user experience.</li>
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

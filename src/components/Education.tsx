import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-900"></div>

          {/* Education items */}
          <div className="space-y-12">
            {/* University at Buffalo */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex-1 md:text-right md:pr-10 mb-4 md:mb-0">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Master of Computer Science</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-2">University at Buffalo</p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Jan 2024 - May 2025</p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Course work</p>
                  <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
                    <li>Machine Learning, Data-Intensive Computing, Data Models and Query Languages, Algorithms Analysis and Design, Deep Learning, Computer Security, Operating Systems, Computer Vision and Image Processing</li>
                  </ul>
                </div>
              </div>

              {/* University Logo */}
              <div className="hidden md:block z-10 bg-indigo-600 dark:bg-indigo-400 rounded-full w-6 h-6 border-4 border-white dark:border-gray-900"></div>

              <div className="flex-1 md:pl-10">
                <div className="flex justify-start items-center">
                  <img
            
                    src="https://www.buffalo.edu/content/www/brand/identity/university-logo-and-marks/jcr:content/par/image_13.img.209.auto.png/1460123040155.png"
                    alt="University at Buffalo Logo"
                    className="h-16"
                  />
                </div>
              </div>
            </div>

            {/* Chandigarh University */}
            <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-left md:pl-10 mb-4 md:mb-0">
                    {/* Logo beside the line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-24 z-10"style={{ top: '95px' }}>
                    <img
                        src="https://faithoverseas.com/wp-content/uploads/2023/09/chandigarh-university-logo-1.png"
                        alt="Chandigarh university logo"
                        className="h-16"
                    />
                    </div>
                </div>
             

              <div className="hidden md:block z-10 bg-indigo-600 dark:bg-indigo-400 rounded-full w-6 h-6 border-4 border-white dark:border-gray-900"></div>

              <div className="flex-1 md:pl-10">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Bachelor of Engineering in Computer Science</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-2">Chandigarh University</p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Jun 2019 - May 2023</p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Coursework</p>
                  <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
                    <li>Data Structures, Design & Analysis of Algorithms, Operating Systems, Computer Networks, Database Management Systems, Theory of Computation, Artificial Intelligence & Machine Learning, Software Engineering, Java Programming, Introduction to Information Security.</li>
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

export default Education;

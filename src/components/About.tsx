import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Professional headshot" 
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </div>
          
          <div className="md:w-1/2">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="mb-4 text-xl text-gray-700 dark:text-gray-300">
              I am a graduate student in Computer Science at the University at Buffalo, with a strong foundation in software development, machine learning, and computer vision. My academic background has provided me with expertise in Machine Learning, Data-Intensive Computing, Algorithms Analysis and Design, and Computer Vision, which I have applied through professional experiences at Reliance Jio Infocomm Limited and during my internship at High Radius.
              </p>
              <p className="mb-4 text-xl text-gray-700 dark:text-gray-300">
              I am passionate about solving complex problems and developing technology that creates a positive impact. Whether optimizing telecommunication networks or creating AI-powered applications, I am committed to delivering high-quality solutions that meet and exceed expectations, driving innovation and addressing real-world challenges.
              </p>
              <p className="text-xl text-gray-700 dark:text-gray-300">
          
              </p>
            </div>
            
            <div className="mt-8">
              <div className="flex flex-wrap gap-3">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

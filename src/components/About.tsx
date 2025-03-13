import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
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
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                I'm a Software Developer & ML Engineer currently pursuing a Master's in Computer Science at the University at Buffalo. 
                With a passion for building innovative solutions, I specialize in software engineering, machine learning, 
                and full-stack development.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                My academic journey has equipped me with a strong foundation in Machine Learning, Data-Intensive Computing, 
                Algorithms Analysis and Design, and Computer Vision. I've applied these skills in real-world settings through 
                my work at Reliance Jio Infocomm Limited and during my internship at High Radius.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                I'm driven by the challenge of solving complex problems and creating technology that makes a difference. 
                Whether it's optimizing telecommunication networks or developing AI-enabled applications, I'm committed to 
                delivering high-quality solutions that meet and exceed expectations.
              </p>
            </div>
            
            <div className="mt-8">
              <div className="flex flex-wrap gap-3">
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300">Machine Learning</div>
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300">Full-Stack Development</div>
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300">Data Analysis</div>
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300">Problem Solving</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Automatic License Plate Recognition",
      description: "Built a system for detecting and recognizing license plates in images and videos, utilizing image pre-processing (grayscale conversion, noise removal, morphological operations) and edge detection (Sobel, Canny). Integrated Optical Character Recognition (OCR) and neural networks to ensure accurate character extraction and optimize real-time performance.",
      technologies: ["Python", "OpenCV", "Tesseract OCR", "Neural Networks", "Image Processing"],
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "eCommerce Web Application (Full Stack)",
      description: "Designed and developed a full stack eCommerce platform with user authentication, product browsing, dynamic cart management, and a secure admin dashboard for inventory control. Implemented complete CRUD operations, session handling, and real-time cart quantity updates with seamless frontend-backend integration using PHP and MySQL. Delivered a responsive and mobile-friendly UI using Tailwind CSS, optimized for user experience.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "Tailwind"],
      image: "https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=1024x1024&w=is&k=20&c=N5Fw7BZfKcYJMH9camA7rQ3q--7Ev7pKlQYEB_gPfo8=",
      githubLink: "https://github.com/jaswanth-komatineni/eCommerce-website",
      liveLink: "http://jaswanth.infinityfreeapp.com"
    },
    {
      title: "Online Restaurant Billing System",
      description: "Built a bill calculation and receipt generation system with PDF export, enabling users to download invoices. Integrated a mini calculator for quick total verification, improving user experience with instant feedback.",
      technologies: ["Python", "Tkinter", "Visual Studio Code", "PDF Generation", "Idle"],
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      githubLink: "#",
      liveLink: "#"
    },
    
    {
      title: "House Price Prediction",
      description: "Developed a regression model using Scikit-Learn to predict house prices based on key features. Built and deployed an interactive Streamlit app on a local machine for real-time predictions and analysis.",
      technologies: ["Machine Learning", "Streamlit", "Python", "Scikit-Learn", "Data Analysis"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      githubLink: "https://github.com/jaswanth-komatineni/house_price_prediction",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

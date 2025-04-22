import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, FileText } from 'lucide-react';

interface HeroProps {
  darkMode?: boolean;
}

const Hero = ({ darkMode }: HeroProps) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-600 via-gray-800 to-black dark:from-gray-900 dark:via-gray-900 dark:to-black text-white transition-colors duration-300">

      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Jaswanth Komatineni</h1>
        <h2 className="text-2xl md:text-3xl font-light mb-8">Computer Science Graduate Student</h2>
        <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Transforming challenges into opportunities through technology.
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://github.com/jaswanth-komatineni" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/komatineni-jaswanth-3021191a1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:jaswanthkomatineni2024@gmail.com"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
        <div className="mt-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 transition-all hover:bg-purple-500 dark:hover:bg-purple-700">Software Development</div>
            <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 transition-all hover:bg-purple-500 dark:hover:bg-purple-700">Machine Learning</div>
            <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 transition-all hover:bg-purple-500 dark:hover:bg-purple-700">Data Analysis</div>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-12">
          <a 
            href="https://drive.google.com/file/d/11axtMM6KOkgLD2DWMQp_QRsjKsWKRtpS/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-purple-700 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-colors"
          >
            Download Resume
          </a>
          <button 
            onClick={scrollToAbout}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-medium transition-colors"
          >
            Learn More
          </button>
        </div>
        {/* The Scroll Down Button */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={scrollToAbout}
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

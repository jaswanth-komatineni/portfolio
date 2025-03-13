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
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white-600 to-gray-700 dark:from-white-900 dark:to-gray-900 text-white transition-colors duration-300">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Jaswanth Komatineni</h1>
        <h2 className="text-2xl md:text-3xl font-light mb-8">Software Developer & ML Engineer</h2>
        <p className="text-xl max-w-3xl mx-auto mb-10">
          Graduate Student at University at Buffalo, passionate about AI/ML and Software Development
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://github.com" 
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
          <a 
            href="https://drive.google.com/file/d/1tzhqjbZQ3I-YlljRRkfU8KNc-c-oDakM/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            aria-label="Resume"
          >
            <FileText size={24} />
          </a>
        </div>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://drive.google.com/file/d/1tzhqjbZQ3I-YlljRRkfU8KNc-c-oDakM/view?usp=sharing" 
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
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
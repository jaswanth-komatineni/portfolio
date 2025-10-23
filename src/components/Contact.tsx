import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-colors duration-300">
          <div className="p-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="mr-4 mt-1 text-indigo-600 dark:text-indigo-400" size={24} />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <a href="mailto:jaswanthkomatineni2024@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      jaswanthkomatineni2024@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-4 mt-1 text-indigo-600 dark:text-indigo-400" size={24} />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                    <a href="tel:+17165471481" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      +1 716-547-1481
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="mr-4 mt-1 text-indigo-600 dark:text-indigo-400" size={24} />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Location</p>
                    <p className="text-gray-700 dark:text-gray-300">Buffalo, NY 14221</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Linkedin className="mr-4 mt-1 text-indigo-600 dark:text-indigo-400" size={24} />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/komatineni-jaswanth-3021191a1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      komatineni-jaswanth
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Github className="mr-4 mt-1 text-indigo-600 dark:text-indigo-400" size={24} />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">GitHub</p>
                    <a 
                      href="https://github.com/jaswanth-komatineni" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      jaswanthkomatineni
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FileText className="mr-4 mt-1 text-indigo-600 dark:text-indigo-400" size={24} />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Resume</p>
                    <a 
                      href="https://drive.google.com/file/d/1JAnzsZoZ2oGJ0_Ucw56uyqQGuI-DApeB/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 flex justify-center">
              <a 
                href="mailto:jaswanthkomatineni2024@gmail.com" 
                className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white py-3 px-8 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Send Me an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

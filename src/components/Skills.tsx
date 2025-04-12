import React from 'react';
import { 
  Code2, Database, Cpu, BarChart3, Globe, 
  FileCode, BrainCircuit, LineChart, Layers, 
  PenTool, Palette, Microscope, Lightbulb, 
  Cog, Eye
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 size={24} className="text-indigo-600 dark:text-indigo-400" />,
      skills: ["C++", "Java", "Python", "JavaScript", "R", "SQL", "PHP"]
    },
    {
      title: "AI/ML Frameworks",
      icon: <BrainCircuit size={24} className="text-indigo-600 dark:text-indigo-400" />,
      skills: ["TensorFlow", "PyTorch", "Keras", "Pandas", "NumPy"]
    },
    {
      title: "Web Development",
      icon: <Globe size={24} className="text-indigo-600 dark:text-indigo-400" />,
      skills: ["HTML5", "CSS", "JavaScript", ,"PHP", "React.js", "Angular", "Tailwind CSS"]
    },
    {
      title: "Data Visualization",
      icon: <BarChart3 size={24} className="text-indigo-600 dark:text-indigo-400" />,
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
              <div className="flex items-center justify-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-2">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transition-colors duration-300">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Domain Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Machine Learning", icon: <BrainCircuit size={18} /> },
              { name: "Exploratory Data Analysis", icon: <LineChart size={18} /> },
              { name: "Life Sciences", icon: <Microscope size={18} /> },
              { name: "Computer Engineering", icon: <Cpu size={18} /> },
              { name: "Data Structures", icon: <Layers size={18} /> },
              { name: "Artificial Intelligence", icon: <Lightbulb size={18} /> },
              { name: "Web Development", icon: <Globe size={18} /> },
              { name: "Database Management", icon: <Database size={18} /> },
              { name: "Computer Vision", icon: <Eye size={18} /> },
              { name: "Image Processing", icon: <PenTool size={18} /> }
            ].map((domain, index) => (
              <div 
                key={index} 
                className="bg-indigo-50 dark:bg-indigo-900/50 p-4 rounded-lg text-center text-indigo-700 dark:text-indigo-300 font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors flex flex-col items-center justify-center gap-2"
              >
                {domain.icon}
                {domain.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

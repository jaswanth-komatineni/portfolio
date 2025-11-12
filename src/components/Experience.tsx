import React from 'react';

const Experience = () => {
  // Define the data for the timeline
  const experienceData = [
    {
      company: 'Copani LLC',
      title: 'Software Engineer (AI Development)',
      date: 'July 2022 - Present',
      description: [
        'Developed and maintained full-stack web applications and automation tools using Python (Flask), JavaScript, HTML, and CSS, significantly improving workflow efficiency and data integration across internal processes.',
        'Designed and Implemented RESTful APIs, microservices, and backend systems to automate reporting, optimize performance, and support AI-driven decision workflows.',
        'Collaborated with cross-functional teams using GitHub, and Agile methodologies, researching and integrating machine learning and cloud-based solutions to enhance software scalability and performance.',
      ],
      logoUrl: 'https://media.licdn.com/dms/image/v2/D4E0BAQGnSKRaa3sYHw/company-logo_200_200/B4EZUuqItKH0AI-/0/1740244552935?e=2147483647&v=beta&t=tkKxkwEkzybqTC7TDjuf-A_ZvG2xx0Uh7BihbFz7-dg',
    },
    {
      company: 'Reliance Jio Infocomm Limited',
      title: 'Graduate Engineer',
      date: 'May 2023 - Jan 2024',
      description: [
        'Spearheaded troubleshooting and performance optimization of telecommunication networks, identifying key areas for improvement, which led to a 15% increase in system efficiency.',
        'Collaborated with cross-functional teams to support the design and deployment of new network features, ensuring seamless integration and minimal downtime across multiple regions.',
      ],
      logoUrl: 'https://www.mobigyaan.com/wp-content/uploads/2013/07/reliance.png',
    },
    {
      company: 'High Radius',
      title: 'Software Development Intern',
      date: 'Jan 2022 - Apr 2022',
      description: [
        'Built a high-performance machine learning pipeline to accurately predict invoice payment dates, boosting prediction accuracy by 25% and enhancing financial forecasting efficiency.',
        'Optimized backend performance using Java & SQL, streamlining query execution and cutting data retrieval time by 40% for 10,000+ transactions, ensuring faster and more reliable data access.',
        'Designed and developed a dynamic React.js frontend with interactive visualizations, increasing user engagement by 30% and delivering a more intuitive and responsive user experience.',
      ],
      logoUrl: 'https://images.yourstory.com/cs/images/companies/HighRadiusEmblem-1628238775387.jpg?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=256&q=75',
    },
  ];

  const TimelineItem = ({ data, index }) => {
    // Determine if the item is on the left (odd index) or right (even index) of the timeline
    const isLeft = index % 2 !== 0;

    // Class to align the content (text container)
    const contentAlignmentClass = isLeft ? 'md:justify-start' : 'md:justify-end';
    
    // Class to order the elements for the alternating layout
    // On even (0, 2, 4...) indexes, order: [DETAILS, TIMELINE_DOT, LOGO] -> Content on Right
    // On odd (1, 3, 5...) indexes, order: [LOGO, TIMELINE_DOT, DETAILS] -> Content on Left
    const detailOrderClass = isLeft ? 'md:order-3' : 'md:order-1';
    const logoOrderClass = isLeft ? 'md:order-1' : 'md:order-3';

    return (
      <div className="relative flex flex-col md:flex-row items-center w-full my-8">
        
        {/* Empty Placeholder for the non-content side (Left or Right) */}
        <div className={`hidden md:block w-full md:w-1/2 ${contentAlignmentClass}`}></div>

        {/* Logo Container (Left side for odd index, Right side for even index) */}
        <div className={`hidden md:flex w-full md:w-1/2 justify-center items-center py-4 ${logoOrderClass}`}>
            <img
              src={data.logoUrl}
              alt={`${data.company} Logo`}
              className="h-24 w-auto object-contain max-h-24"
            />
        </div>

        {/* Timeline Marker Dot (Always in the middle) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-indigo-600 dark:bg-indigo-400 rounded-full w-6 h-6 border-4 border-white dark:border-gray-900"></div>

        {/* Details/Content Box (Right side for odd index, Left side for even index) */}
        <div className={`w-full md:w-1/2 ${detailOrderClass} p-4 ${isLeft ? 'md:pl-10' : 'md:pr-10'}`}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl transition-colors duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{data.title}</h3>
            <p className="text-indigo-600 dark:text-indigo-400 mb-2">{data.company}</p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{data.date}</p>
            <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
              {data.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line - absolute positioning is safe here */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          {/* Experience items using the mapped component */}
          <div className="space-y-4 md:space-y-0">
            {experienceData.map((item, index) => (
              <TimelineItem key={index} data={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

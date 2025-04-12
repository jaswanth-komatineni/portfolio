import React from 'react';
import { ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Coursera",
      date: "2023",
      image: "https://53.fs1.hubspotusercontent-na1.net/hubfs/53/image8-2.jpg",
      link: "https://coursera.org/verify/professional-cert/EQ94S6JKSKJE"
    },
    {
      title: "R Programming",
      issuer: "Johns Hopkins University via Coursera",
      date: "2022",
      image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/93/57fd6a96044c4bad3139afd3e87fd6/jhu-shield.png?auto=format%2Ccompress&dpr=2&w=80&h=80",
      link: "https://coursera.org/share/56c7d2efb7cc8e50ebad02bdd6807fab"
    },
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      issuer: "Coursera",
      date: "2022",
      image: "https://about.coursera.org/static/blueC-65d0362f0b397e64f6a007c7eee7e090.svg",
      link: "https://coursera.org/share/b057e44a414f8bb83ce45e04bb774dfb"
    },
    {
      title: "Programming with Python",
      issuer: "Internshala trainings",
      date: "2021",
      image: "https://media.licdn.com/dms/image/v2/D5612AQE2CCPv7FrsEw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1687969459909?e=1747872000&v=beta&t=xIIFhvwFgQUeK2OkbUVv-qp4TbDe4RW613Sw5h9iao8",
      link: "https://drive.google.com/file/d/1VHtkhiTMX1upPWFz5566dpC1HftWBf83/view?usp=sharing"
    },
    {
      title: "Deloitte Australia - Data Analytics Job Simulation",
      issuer: "Forage",
      date: "2025",
      image: "https://logos-world.net/wp-content/uploads/2021/08/Deloitte-Logo.png",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_KgJuuCa3faZPHvEmx_1740970348007_completion_certificate.pdf"
    },
    {
      title: "Career Essentials in Software Development by Microsoft and LinkedIn",
      issuer: "Microsoft",
      date: "2025",
      image: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
      link: "https://www.linkedin.com/learning/certificates/5b38473e4b696b0a39c145f0644db741386b201d12cf86905b183a0f5fb3f06c"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                  <p className="text-gray-300 mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm">{cert.date}</p>
                </div>
              </div>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md z-20 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ExternalLink size={18} className="text-indigo-600" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

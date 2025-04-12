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
      image: "https://bookface-images.s3.us-west-2.amazonaws.com/logos/06f37a2c3431748d0ddb96f49cb39db93035c618.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQC4NIECAPB3TEGUG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwgKFGkucDbgr7pxPDszIz08AMWNxgPYV%2Fw7I74ZCxoAiB9HLnD7bTQp84AOkoZXLG%2BgdOoX3%2FSGcQqHioCdUqpqCrlAwg4EAAaDDAwNjIwMTgxMTA3MiIMxxdsLT%2FPw8Igv7iqKsIDKOdE5uysZtaxypYuO6a12Qng7UpaTj6QhFsrOHdAV7j8kIqdpEWv2j%2FO172l0T4%2B03uFL86P0bObmNf9Y%2BJB3oU7Fr2laP%2FRatZMs%2B2rE4culvOkqxTDMjxkImjWpbUdk4x7rfJIOA%2BOT1fNPZ5Z%2FGn8xxRCDher2%2Fmols0TaWTTe0N9tLlq%2Fg4AgNt4kJi8FLk7juiYX5rvt23aQqAnFjOrM%2Ba5UsXRZXi1IeeydlPC2AAG5zIeYOeDODcDikuHAnv3vtsduEVeJu9KeQh3MhzrX7fQ%2FpQclQxFOrQEcazcfqgkxlRb2ql0DyNKAVerePiouwSyX4VRpoJHtBI%2F1O59j7mgrWU88ImErAf%2FOCzPqUDCWOCrQ5sj1X0fCz6mSpZeE1qZ%2BnE8NTDxgdBi3GvGHRPmP7G5ZtmvqmuKG4TN5KcuITqdh5oZJZQO3iVpGWrs8O9LAbS2laKilo%2BMbgAaJgLtqC%2B1hY5IguPGjCr8JDdWaa1FQVHj7Yj1M%2BqghtxprFJd4cJ8str7tp9miRXbpIlFbgNEBLfAuq%2BkhFq6EaRdzaPAxuTuj7LkdpsbnUT1XjZ4W%2BLrYkaw%2FtHhVDQ0MK6u3b4GOqYBj3GFbYvFOZFFFNpSpDwL05RrDq7fgztGgxHlvfPMWDSjqJubuDXJleV7r6B2OVn4pF5uLrOHO%2FuWwYPYF5O5UTNUTY59bfr2e3a%2B%2FGQ%2FvOIU8CLemOOXfllxi0aIFq4W1SK%2BZoCNy4MdNr5fvejGJy%2Fr5gYbytnT7EjFZ74WEqO9vwl6yKcSvAjBAqB1RoGRpFh9i7efZw76llzjl9mav%2BiKhMcGnA%3D%3D&X-Amz-SignedHeaders=host&X-Amz-Signature=b4e3fb093c8a7d1637e5f116390bf1acfdc0a4cf06b317281dd67f59c3c52c9b",
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

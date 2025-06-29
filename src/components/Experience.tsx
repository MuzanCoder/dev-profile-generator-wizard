
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead development of scalable web applications serving 100K+ users. Architect microservices infrastructure and mentor junior developers.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led team of 5 developers on major product redesign",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Developer",
      location: "New York, NY",
      period: "2020 - 2022",
      description: "Developed MVP and scaled platform from 0 to 50K users. Built both frontend and backend systems using modern technologies.",
      achievements: [
        "Built complete platform architecture from scratch",
        "Integrated payment systems processing $1M+ annually",
        "Implemented real-time features using WebSocket technology"
      ]
    },
    {
      company: "Digital Agency Pro",
      position: "Frontend Developer",
      location: "Los Angeles, CA",
      period: "2018 - 2020",
      description: "Created responsive websites and web applications for diverse clients. Collaborated closely with designers and project managers.",
      achievements: [
        "Delivered 50+ client projects on time and within budget",
        "Improved website performance scores by average 35%",
        "Established component library used across all projects"
      ]
    },
    {
      company: "FreelanceHub",
      position: "Junior Developer",
      location: "Remote",
      period: "2017 - 2018",
      description: "Worked on various client projects while building expertise in modern web development technologies and best practices.",
      achievements: [
        "Completed 25+ freelance projects with 5-star ratings",
        "Specialized in React and Node.js development",
        "Built long-term relationships with repeat clients"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            My journey through the world of software development
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Content */}
                <div className="ml-20 bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-4">
                    <div className="flex flex-wrap items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold text-slate-800">
                        {exp.position}
                      </h3>
                      <div className="flex items-center text-slate-600 bg-blue-100 px-3 py-1 rounded-full">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-slate-600 mb-2">
                      <Building className="h-4 w-4 mr-2" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center text-slate-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-slate-600">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

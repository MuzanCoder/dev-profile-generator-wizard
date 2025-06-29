
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Bachelor of Technology in Computer Science",
      position: "Recent Graduate",
      location: "XYZ University",
      period: "2020 - 2024",
      description: "Completed comprehensive computer science program with focus on software development, data structures, algorithms, and web technologies.",
      achievements: [
        "Graduated with 8.5/10 CGPA",
        "Led final year project on E-commerce Web Application",
        "Active member of Coding Club and participated in hackathons",
        "Completed courses in Data Structures, Algorithms, DBMS, and Web Development"
      ],
      type: "education"
    },
    {
      company: "TechStart Solutions",
      position: "Web Development Intern",
      location: "Remote",
      period: "Jun 2023 - Aug 2023",
      description: "3-month internship focusing on frontend development and learning industry best practices. Worked on real client projects under senior developer guidance.",
      achievements: [
        "Developed responsive landing pages for 3 client projects",
        "Learned React.js and implemented component-based architecture",
        "Collaborated with design team to implement pixel-perfect UI",
        "Gained exposure to version control and team development workflows"
      ],
      type: "internship"
    },
    {
      company: "Personal Project Development",
      position: "Self-Learning & Building",
      location: "Home",
      period: "2022 - Present",
      description: "Continuously learning new technologies through online courses, tutorials, and building personal projects to strengthen development skills.",
      achievements: [
        "Built 8+ personal projects showcasing different technologies",
        "Completed 50+ hours of online courses on web development",
        "Contributing to open source projects on GitHub",
        "Practicing coding challenges and improving problem-solving skills"
      ],
      type: "personal"
    },
    {
      company: "College Technical Events",
      position: "Participant & Volunteer",
      location: "University Campus",
      period: "2021 - 2024",
      description: "Active participation in coding competitions, hackathons, and technical workshops to enhance programming skills and network with peers.",
      achievements: [
        "Participated in 5+ hackathons with team placements",
        "Volunteered in organizing college tech fest",
        "Won 2nd place in college-level coding competition",
        "Conducted web development workshop for junior students"
      ],
      type: "activities"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return GraduationCap;
      case 'internship':
        return Building;
      default:
        return Building;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Education & Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            My academic journey and early professional experiences in software development
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {experiences.map((exp, index) => {
              const IconComponent = getIcon(exp.type);
              return (
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
                        <IconComponent className="h-4 w-4 mr-2" />
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
                      <h4 className="font-semibold text-slate-800 mb-2">Key Highlights:</h4>
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

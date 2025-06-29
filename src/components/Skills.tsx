
import { Code, Database, Globe, Smartphone, Cloud, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Backend Development", 
      skills: ["Node.js", "Python", "Express.js", "REST APIs", "JSON", "Basic PHP"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Database & Storage",
      skills: ["MySQL", "MongoDB", "SQLite", "Firebase", "Basic PostgreSQL", "Database Design"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Tools & Deployment",
      skills: ["Git", "GitHub", "VS Code", "Netlify", "Vercel", "Basic AWS"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "C++", "TypeScript (Learning)", "SQL"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Smartphone,
      title: "Other Skills",
      skills: ["Responsive Design", "Problem Solving", "Debugging", "Testing", "Agile Basics", "Team Collaboration"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A solid foundation in modern web development technologies gained through academics and personal projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

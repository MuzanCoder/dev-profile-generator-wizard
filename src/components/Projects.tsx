import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS to showcase my skills and projects. Features smooth animations and modern design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "TypeScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/MuzanCoder/dev-profile-generator-wizard"
    },
    {
      title: "Dashboard",
      description: "Interactive impact dashboard: charts for total points converted, carbon offset, donations raised.",
      image: "https://image.shutterstock.com/shutterstock/photos/1938829057/display_1500/stock-vector-dashboard-ui-ux-kit-great-design-for-any-site-purposes-business-infographic-template-vector-1938829057.jpg",
      technologies: ["JavaScript", "REST API", "CSS3", "HTML5", "D3"],
      liveUrl: "https://testingggggggggggg.netlify.app/",
      githubUrl: "https://github.com/MuzanCoder/impact-arena-dashboard"
    },
    {
      title: "Dashboard using shadCn",
      description: "Build a dashboard using ShadCN components with features like search and sort.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      technologies: ["Java", "shadcn", "Tailwind CSS"],
      liveUrl: "https://articleshad.netlify.app/",
      githubUrl: "https://github.com/MuzanCoder/Dashboard"
    },
    {
      title: "Soft Sell Car-Review",
      description: "A car insurance review landing page built with Bootstrap and JavaScript.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
      liveUrl: "https://softsells.netlify.app/",
      githubUrl: "https://github.com/MuzanCoder/softsell"
    },
    {
      title: "Pokemon Search App",
      description: "A simple React app to search and display information about Pokémon using the PokeAPI.",
      image: "https://i.pinimg.com/originals/fd/72/1f/fd721f81cf12ebf7b3234c2c665b584c.png",
      technologies: ["React", "PokeAPI", "JavaScript", "CSS3", "HTML5"],
      liveUrl: "https://pokemon-search-app.netlify.app/",
      githubUrl: "https://github.com/MuzanCoder/FCC"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Academic & Personal Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of projects built during my learning journey to practice and demonstrate my skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

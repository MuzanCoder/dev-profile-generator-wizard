
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-6xl font-bold">
              JS
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          John Smith
        </h1>
        
        <h2 className="text-2xl md:text-3xl mb-6 text-gray-300">
          Full Stack Developer
        </h2>
        
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Passionate about creating exceptional digital experiences through clean code and innovative solutions. 
          Specialized in React, Node.js, and modern web technologies.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
            View Projects
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Github className="h-8 w-8" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="h-8 w-8" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Mail className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

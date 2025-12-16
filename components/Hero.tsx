import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-medium">
            <span className="w-8 h-[1px] bg-gray-400 dark:bg-gray-600"></span>
            Open for new projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight transition-colors">
            Hey! <br />
            I'm <span className="text-gray-500 dark:text-gray-400">Pacondo</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium transition-colors">
            Your Automation Specialist
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed transition-colors">
            Passionate about building efficient, automated workflows that save time, reduce errors, and keep your systems running smoothly. Let's streamline your operations and create smart solutions together.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#contact" className="px-8 py-3 bg-dark-900 text-white dark:bg-white dark:text-dark-900 font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center gap-2">
              Hire me <ArrowRight size={18} />
            </a>
            <button className="px-8 py-3 bg-transparent border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-medium rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors flex items-center gap-2">
              <FileText size={18} /> Resume
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center md:justify-end">
          {/* Decorative Elements behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-brand-500/10 rounded-full blur-3xl"></div>
          
          {/* Icons orbiting (Static decoration for now) */}
          <div className="absolute top-10 left-10 text-gray-400 dark:text-gray-600 opacity-30 dark:opacity-20"><ArrowRight size={32} /></div>
          <div className="absolute bottom-10 right-20 text-gray-400 dark:text-gray-600 opacity-30 dark:opacity-20"><FileText size={40} /></div>

          {/* Profile Image Wrapper */}
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-gray-100 dark:border-white/5 shadow-2xl">
            <img 
              src="https://picsum.photos/id/64/800/800" 
              alt="Pacondo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
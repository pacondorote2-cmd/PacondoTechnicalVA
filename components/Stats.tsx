import React from 'react';
import { Star } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-dark-800 py-10 border-y border-gray-100 dark:border-white/5 transition-colors">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2 transition-colors">
            4.9 <Star className="text-yellow-400" fill="currentColor" size={24} />
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 transition-colors">Client Rating</p>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-gray-200 dark:bg-white/10 transition-colors"></div>

        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">
            100%
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 transition-colors">Success Rate</p>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-gray-200 dark:bg-white/10 transition-colors"></div>

        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">
            24/7
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 transition-colors">Support Available</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;
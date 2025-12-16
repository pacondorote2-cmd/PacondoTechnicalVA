import React from 'react';

const tools = [
  { name: 'Zapier', color: '#FF4A00' },
  { name: 'Make', color: '#663399' },
  { name: 'GoHighLevel', color: '#1877F2' },
  { name: 'HubSpot', color: '#FF7A59' },
  { name: 'Monday', color: '#F24E4E' },
  { name: 'ClickUp', color: '#7B68EE' },
  { name: 'Shopify', color: '#96BF48' },
];

const Tools: React.FC = () => {
  return (
    <section className="py-20 overflow-hidden bg-white dark:bg-dark-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Tools & Platforms</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors">Technologies I use to build exceptional digital products.</p>
      </div>
      
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-dark-900 to-transparent z-10 transition-colors"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-dark-900 to-transparent z-10 transition-colors"></div>
        
        <div className="flex justify-center gap-6 flex-wrap px-6">
            {/* 
              In a real app, these would be SVG logos. 
              Simulating the visual style with styled text/boxes.
            */}
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center h-16 px-8 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <span className="font-bold text-xl" style={{ color: tool.color }}>{tool.name}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
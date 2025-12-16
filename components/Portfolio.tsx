import React, { useState } from 'react';
import { PortfolioItem } from '../types';

const filters = ['All', 'Zapier Automation', 'Make Automation', 'GHL Funnel', 'GHL Automation', 'NBN', 'Shopify'];

const projects: PortfolioItem[] = [
  { id: '1', title: 'Lead Gen Workflow', category: 'Zapier Automation', image: 'https://picsum.photos/id/48/800/600' },
  { id: '2', title: 'E-commerce Sync', category: 'Make Automation', image: 'https://picsum.photos/id/3/800/600' },
  { id: '3', title: 'Agency Dashboard', category: 'GHL Automation', image: 'https://picsum.photos/id/60/800/600' },
  { id: '4', title: 'Sales Funnel V1', category: 'GHL Funnel', image: 'https://picsum.photos/id/119/800/600' },
  { id: '5', title: 'Network Setup', category: 'NBN', image: 'https://picsum.photos/id/180/800/600' },
  { id: '6', title: 'Store Migration', category: 'Shopify', image: 'https://picsum.photos/id/20/800/600' },
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-dark-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">My Portfolio</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto transition-colors">
            Take a look at the automation systems and funnels I've built to make work easier, faster, and more effective.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm rounded-full transition-all border ${
                activeFilter === filter
                  ? 'bg-dark-900 dark:bg-white text-white dark:text-dark-900 border-transparent font-medium'
                  : 'bg-transparent text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/30 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5 bg-white dark:bg-dark-800 shadow-sm dark:shadow-none">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 dark:opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 dark:from-dark-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-medium text-brand-500 mb-1 block uppercase tracking-wider">{project.category}</span>
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
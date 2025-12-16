import React from 'react';
import { 
  GitBranch, 
  Link2, 
  BarChart3, 
  Database, 
  Zap, 
  Bot 
} from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Workflow Automation',
    icon: GitBranch,
    tools: ['Zapier', 'Make.com', 'GoHighLevel']
  },
  {
    id: '2',
    title: 'API Integration',
    icon: Link2,
    tools: ['REST APIs', 'Webhooks', 'API Connections']
  },
  {
    id: '3',
    title: 'CRM & Marketing',
    icon: BarChart3,
    tools: ['HubSpot', 'GoHighLevel', 'ActiveCampaign']
  },
  {
    id: '4',
    title: 'Data Management',
    icon: Database,
    tools: ['Google Sheets', 'Airtable', 'Notion']
  },
  {
    id: '5',
    title: 'Process Optimization',
    icon: Zap,
    tools: ['Workflow Design', 'Efficiency Analysis', 'Automation Strategy']
  },
  {
    id: '6',
    title: 'AI Automation',
    icon: Bot,
    tools: ['AI-Powered Workflows', 'Smart Automation', 'Machine Learning']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-dark-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            From workflow automation to AI-powered processes, I deliver cutting-edge technical solutions that transform how you work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white dark:bg-dark-800 p-8 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-brand-200 dark:hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/5 group"
            >
              <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-300 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <service.icon size={24} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors">{service.title}</h3>
              
              <ul className="space-y-2">
                {service.tools.map((tool, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full group-hover:bg-brand-500 transition-colors"></span>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
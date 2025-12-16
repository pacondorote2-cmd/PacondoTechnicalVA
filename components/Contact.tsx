import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Globe, 
  Briefcase, 
  MessageSquare, 
  Linkedin, 
  Mail,
} from 'lucide-react';

const CalendarMock = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(16);

  // Simple static generation of a month view for visual replication
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row">
      {/* Left Info Panel */}
      <div className="p-8 md:w-1/3 border-r border-gray-100 flex flex-col">
        <div className="mb-6">
          <p className="text-gray-500 text-sm mb-1">Pacondo Rote</p>
          <h3 className="text-2xl font-bold text-gray-900">30 Minute Meeting</h3>
        </div>
        
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <Clock size={16} />
          <span className="text-sm">30 min</span>
        </div>
        <div className="flex-1"></div>
        <div className="text-xs text-gray-400 mt-8">
            Cookie settings
        </div>
      </div>

      {/* Right Calendar Panel */}
      <div className="p-8 md:w-2/3">
        <h4 className="text-lg font-bold text-gray-900 mb-6">Select a Date & Time</h4>
        
        {/* Month Navigator */}
        <div className="flex justify-center items-center gap-4 mb-6">
           <button className="p-1 hover:bg-gray-100 rounded-full"><ChevronLeft size={20} className="text-gray-600"/></button>
           <span className="text-gray-700 font-medium">December 2025</span>
           <button className="p-1 hover:bg-gray-100 rounded-full"><ChevronRight size={20} className="text-gray-600"/></button>
        </div>

        {/* Calendar Grid */}
        <div className="mb-4">
          <div className="grid grid-cols-7 mb-2">
            {weekDays.map(d => (
              <div key={d} className="text-center text-[10px] text-gray-400 font-medium">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-y-2">
            {/* Empty slots for start of month alignment (mock) */}
            <div className="h-10"></div>
            
            {days.map(day => (
              <div key={day} className="flex justify-center">
                <button
                  onClick={() => setSelectedDate(day)}
                  className={`w-9 h-9 rounded-full text-sm font-medium transition-colors flex items-center justify-center
                    ${day === selectedDate 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-700 hover:bg-blue-50'
                    }
                  `}
                >
                  {day}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Time Zone */}
        <div className="mt-8 text-sm text-gray-500 flex items-center gap-2">
          <Globe size={14} />
          Philippine Time (12:36pm)
        </div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Let's Connect</h2>
          <p className="text-gray-600 dark:text-gray-400 transition-colors">Have a project in mind? Let's discuss how we can work together to bring your ideas to life.</p>
        </div>

        <div className="mb-8 text-center">
           <span className="text-gray-900 dark:text-white font-semibold transition-colors">Schedule a Call</span>
        </div>

        {/* Calendar Widget */}
        <div className="mb-24 px-4">
          <CalendarMock />
        </div>

        {/* Contact Links */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Other Ways to Reach Me</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
              I'm always open to connecting about new automation projects, process optimization opportunities, and potential collaborations. Whether you need workflow automation, systems integration, or custom solutions to streamline operations, I'm here to help bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#" className="flex items-center gap-4 p-4 bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-white group-hover:bg-brand-600 transition-colors">
                <Briefcase size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 dark:text-gray-400">Upwork</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Hire me on Upwork</div>
              </div>
            </a>

            <a href="#" className="flex items-center gap-4 p-4 bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors group">
               <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-white group-hover:bg-brand-600 transition-colors">
                <Briefcase size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 dark:text-gray-400">OnlineJobs.ph</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">View my profile</div>
              </div>
            </a>

            <a href="#" className="flex items-center gap-4 p-4 bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors group">
               <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-white group-hover:bg-brand-600 transition-colors">
                <MessageSquare size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 dark:text-gray-400">WhatsApp</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">+639107742327</div>
              </div>
            </a>

            <a href="#" className="flex items-center gap-4 p-4 bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors group">
               <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-white group-hover:bg-brand-600 transition-colors">
                <Linkedin size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 dark:text-gray-400">LinkedIn</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Connect with me</div>
              </div>
            </a>
            
             <a href="#" className="flex items-center gap-4 p-4 bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors group col-span-1 md:col-span-2">
               <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-white group-hover:bg-brand-600 transition-colors">
                <Mail size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 dark:text-gray-400">Email</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">pacondorote43@gmail.com</div>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
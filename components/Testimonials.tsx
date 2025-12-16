import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: '1',
    quote: "Pacondo completely transformed our lead management process. The Zapier automation he built saves us 15+ hours every week and our response time improved dramatically.",
    author: "Sarah Mitchell",
    role: "E-commerce Business Owner",
    avatar: "https://picsum.photos/id/64/100/100",
    rating: 5
  },
  {
    id: '2',
    quote: "Pacondo's GHL funnel expertise is incredible. He built our entire sales funnel from scratch and the conversion rates exceeded our expectations. Highly recommended!",
    author: "David Thompson",
    role: "Marketing Agency Director",
    avatar: "https://picsum.photos/id/91/100/100",
    rating: 5
  },
  {
    id: '3',
    quote: "As a technical VA, Pacondo is top-tier. His Make.com automations streamlined our entire workflow. Professional, reliable, and always delivers quality work.",
    author: "Jennifer Lee",
    role: "Startup Founder",
    avatar: "https://picsum.photos/id/65/100/100",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-dark-800/30 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">What Clients Say</h2>
          <p className="text-gray-600 dark:text-gray-400 transition-colors">Don't just take my word for it — here's what my clients have to say about working with me.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-gray-50 dark:bg-dark-800 p-8 rounded-2xl border border-gray-100 dark:border-white/5 relative transition-colors">
              <Quote className="text-gray-200 dark:text-white/10 absolute top-6 left-6 transition-colors" size={48} />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm leading-relaxed min-h-[80px] transition-colors">
                  "{item.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={item.avatar} 
                    alt={item.author} 
                    className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-white/10"
                  />
                  <div>
                    <h4 className="text-gray-900 dark:text-white text-sm font-semibold transition-colors">{item.author}</h4>
                    <p className="text-gray-500 text-xs">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
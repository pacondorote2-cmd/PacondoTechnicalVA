import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Tools from './components/Tools';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 font-sans selection:bg-brand-500 selection:text-white transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Services />
          <Tools />
          <Portfolio />
          <Testimonials />
          <Stats />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-white/5 text-center transition-colors">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} PacondoTechVA. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
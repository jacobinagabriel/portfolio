import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep border-t border-surface py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-ink-link font-bold text-xl">GJ<span className="text-ink-bright">Portfolio</span></p>
            <p className="text-ink-muted mt-2">Transforming data into actionable insights</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/gabriel-jacobina" target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-ink-link transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-jacobina/" target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-ink-link transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:gabriel.jacobina@gmail.com" className="text-ink-muted hover:text-ink-link transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-surface mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ink-faint text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Gabriel Jacobina. All rights reserved.
          </p>
          
          <div className="flex space-x-4 text-sm text-ink-faint">
            <a href="#" className="hover:text-ink-link transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ink-link transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
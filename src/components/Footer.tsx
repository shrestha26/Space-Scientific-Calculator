import React from 'react';
import { GithubIcon, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-space-darker/80 border-t border-space-indigo/20 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">Cosmic Calculator</h3>
            <p className="text-white/70 text-sm">
              An advanced space scientific calculator for measuring distances and 
              calculating space-related information between celestial bodies.
            </p>
            <p className="text-white/70 text-sm mt-2">
              Created by Shrestha Behera
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com" className="text-white/60 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-white/60 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:contact@example.com" className="text-white/60 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Astronomical Database</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">NASA Open APIs</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Educational Materials</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Our Mission</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Data Sources</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Contribute</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-space-indigo/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Cosmic Calculator by Shrestha Behera. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-white/50">
            <span>Data provided by NASA, ESA, and other astronomical sources</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
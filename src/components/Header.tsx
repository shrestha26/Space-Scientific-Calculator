import React from 'react';
import { Plane as Planet, Moon, Sun, Stars } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-space-darker/70 backdrop-blur-md border-b border-space-indigo/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex">
              <Sun className="h-8 w-8 text-space-accent animate-pulse-slow" />
              <Planet className="h-6 w-6 text-space-earth -ml-3 mt-2 animate-pulse-slow" style={{ animationDelay: '1s' }} />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gradient">Cosmic Calculator</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#calculator" className="text-white/80 hover:text-white transition-colors">Calculator</a>
            <a href="#objects" className="text-white/80 hover:text-white transition-colors">Celestial Objects</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="button-secondary hidden sm:flex items-center space-x-2">
              <Stars className="h-4 w-4" />
              <span>Explore</span>
            </button>
            <button className="button-primary flex items-center space-x-2">
              <Moon className="h-4 w-4" />
              <span>Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
import React, { useEffect, useRef } from 'react';

export const StarField: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clean up any existing stars
    container.innerHTML = '';

    // Create stars
    const numStars = 150;
    
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random star properties
      const size = Math.random() * 3;
      const opacity = Math.random() * 0.7 + 0.3;
      const duration = Math.random() * 8 + 2; // 2-10s
      const delay = Math.random() * 10;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      // Set star styles
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${posX}%`;
      star.style.top = `${posY}%`;
      star.style.setProperty('--opacity', opacity.toString());
      star.style.setProperty('--duration', `${duration}s`);
      star.style.setProperty('--delay', `${delay}s`);
      
      container.appendChild(star);
    }
  }, []);

  return <div ref={containerRef} className="stars-container" />;
};
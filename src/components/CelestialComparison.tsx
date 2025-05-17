import React from 'react';
import { motion } from 'framer-motion';
import type { CelestialObject } from '../types/spaceTypes';

interface CelestialComparisonProps {
  firstObject: CelestialObject;
  secondObject: CelestialObject;
}

export const CelestialComparison: React.FC<CelestialComparisonProps> = ({
  firstObject,
  secondObject,
}) => {
  // Calculate comparison metrics
  const getDiameterRatio = () => {
    if (!firstObject.diameter || !secondObject.diameter) return 'N/A';
    const ratio = firstObject.diameter / secondObject.diameter;
    return ratio > 1 
      ? `${firstObject.name} is ${ratio.toFixed(2)}x larger than ${secondObject.name}`
      : `${secondObject.name} is ${(1/ratio).toFixed(2)}x larger than ${firstObject.name}`;
  };

  const getMassComparison = () => {
    if (!firstObject.mass || !secondObject.mass) return 'N/A';
    // For simplicity, we assume mass is given in a comparable unit
    return `Mass difference: ${Math.abs(firstObject.mass - secondObject.mass).toExponential(2)} kg`;
  };

  const getTravelTime = () => {
    // Just a simple placeholder calculation
    return {
      lightSpeed: '8.3 minutes',
      spacecraft: '7 months'
    };
  };

  const comparisonMetrics = [
    {
      title: 'Size Comparison',
      value: getDiameterRatio(),
      icon: '📏'
    },
    {
      title: 'Mass Comparison',
      value: getMassComparison(),
      icon: '⚖️'
    },
    {
      title: 'Travel Time',
      value: getTravelTime().spacecraft + ' at 60,000 km/h',
      icon: '🚀'
    },
    {
      title: 'Light Travel Time',
      value: getTravelTime().lightSpeed,
      icon: '💫'
    }
  ];

  return (
    <div className="space-y-6">
      <p className="text-white/80">
        Compare key properties between {firstObject.name} and {secondObject.name} to better understand their relationship in space.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {comparisonMetrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            className="bg-space-darker/70 rounded-lg p-4 flex items-start space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="text-2xl">{metric.icon}</div>
            <div>
              <h4 className="font-medium text-white">{metric.title}</h4>
              <p className="text-white/70 text-sm mt-1">{metric.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6">
        <h4 className="font-medium mb-3">Fun Facts</h4>
        <motion.ul 
          className="space-y-2 text-sm text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <li className="flex items-start space-x-2">
            <span className="text-space-accent">•</span>
            <span>If {firstObject.name} was the size of a basketball, {secondObject.name} would be roughly the size of {firstObject.diameter && secondObject.diameter ? (secondObject.diameter / firstObject.diameter > 0.5 ? 'a tennis ball' : 'a marble') : 'another object'}.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-space-accent">•</span>
            <span>Light takes {getTravelTime().lightSpeed} to travel between these objects at 299,792 km per second.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-space-accent">•</span>
            <span>The Voyager spacecraft would take approximately {getTravelTime().spacecraft} to travel between these two celestial bodies.</span>
          </li>
        </motion.ul>
      </div>
    </div>
  );
};
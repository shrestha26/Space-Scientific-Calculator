import React from 'react';
import { motion } from 'framer-motion';
import type { CelestialObject } from '../types/spaceTypes';
import { formatDistance } from '../utils/calculationUtils';

interface ResultDisplayProps {
  firstObject: CelestialObject | null;
  secondObject: CelestialObject | null;
  result: number | null;
  unit: 'km' | 'mi' | 'au' | 'ly';
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({
  firstObject,
  secondObject,
  result,
  unit,
}) => {
  if (!firstObject || !secondObject || result === null) {
    return null;
  }

  // Calculate the size ratio for visual representation (with limits to avoid too small objects)
  const maxRadius = 100;
  const minRadius = 20;
  let radius1 = 0;
  let radius2 = 0;
  
  if (firstObject.diameter && secondObject.diameter) {
    const maxDiameter = Math.max(firstObject.diameter, secondObject.diameter);
    radius1 = Math.max(minRadius, (firstObject.diameter / maxDiameter) * maxRadius);
    radius2 = Math.max(minRadius, (secondObject.diameter / maxDiameter) * maxRadius);
  } else {
    radius1 = 50;
    radius2 = 50;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-center items-center h-32 md:h-48 relative">
        <motion.div
          className="absolute"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div 
            className="rounded-full flex items-center justify-center relative overflow-hidden"
            style={{ 
              width: `${radius1}px`, 
              height: `${radius1}px`,
              background: firstObject.color || '#4c9aff'
            }}
          >
            {firstObject.type === 'planet' && (
              <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-black/40 to-transparent" />
            )}
          </div>
          <div className="text-center mt-2 text-sm font-medium">{firstObject.name}</div>
        </motion.div>

        <motion.div 
          className="mx-6 text-space-accent text-sm font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="w-20 h-0.5 bg-space-accent/30" />
        </motion.div>

        <motion.div
          className="absolute"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div 
            className="rounded-full flex items-center justify-center relative overflow-hidden"
            style={{ 
              width: `${radius2}px`, 
              height: `${radius2}px`,
              background: secondObject.color || '#f9d423'
            }}
          >
            {secondObject.type === 'planet' && (
              <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-black/40 to-transparent" />
            )}
          </div>
          <div className="text-center mt-2 text-sm font-medium">{secondObject.name}</div>
        </motion.div>
      </div>

      <motion.div 
        className="card bg-space-indigo/30 p-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="text-sm text-white/70 mb-1">Distance between {firstObject.name} and {secondObject.name}</div>
        <div className="text-3xl font-bold text-gradient">
          {formatDistance(result, unit)}
        </div>
        <div className="text-sm text-white/60 mt-2">
          {unit === 'ly' ? 'Light travels this distance in ' + result.toFixed(2) + ' years' : 
           unit === 'au' ? `${(result * 8.3).toFixed(0)} light minutes` : 
           ''}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <InfoCard title={firstObject.name} object={firstObject} />
        <InfoCard title={secondObject.name} object={secondObject} />
      </div>
    </div>
  );
};

interface InfoCardProps {
  title: string;
  object: CelestialObject;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, object }) => {
  return (
    <motion.div 
      className="bg-space-darker/70 rounded-lg p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      <h4 className="font-medium mb-2">{title}</h4>
      <ul className="space-y-1 text-sm text-white/70">
        <li className="flex justify-between">
          <span>Type:</span>
          <span className="text-white">{object.type}</span>
        </li>
        {object.diameter && (
          <li className="flex justify-between">
            <span>Diameter:</span>
            <span className="text-white">{object.diameter.toLocaleString()} km</span>
          </li>
        )}
        {object.mass && (
          <li className="flex justify-between">
            <span>Mass:</span>
            <span className="text-white">{object.mass}</span>
          </li>
        )}
        {object.temperature && (
          <li className="flex justify-between">
            <span>Temperature:</span>
            <span className="text-white">{object.temperature} K</span>
          </li>
        )}
      </ul>
    </motion.div>
  );
};
import type { CelestialObject, DistanceUnit } from '../types/spaceTypes';

/**
 * Calculate the straight-line distance between two celestial objects
 * @param obj1 First celestial object
 * @param obj2 Second celestial object
 * @returns Distance in kilometers
 */
export const calculateDistance = (obj1: CelestialObject, obj2: CelestialObject): number => {
  // For simplicity, we'll use the basic distance formula in 3D space
  const dx = obj1.coordinates.x - obj2.coordinates.x;
  const dy = obj1.coordinates.y - obj2.coordinates.y;
  const dz = obj1.coordinates.z - obj2.coordinates.z;
  
  // If both are planets/moons in our solar system, we approximate using AU
  if ((obj1.type === 'planet' || obj1.type === 'moon') && 
      (obj2.type === 'planet' || obj2.type === 'moon')) {
    // Convert AU to kilometers (1 AU = 151.29 million km)
    return Math.sqrt(dx*dx + dy*dy + dz*dz) * 151290000;
  }
  
  // For stars, we use light years
  if (obj1.type === 'star' || obj2.type === 'star') {
    // Simplified calculation, normally would use proper parsec/light year calculations
    return Math.sqrt(dx*dx + dy*dy + dz*dz) * 9460730472580.8; // km in a light year
  }
  
  // For galaxies and other large scale objects
  if (obj1.type === 'galaxy' || obj2.type === 'galaxy' || 
      obj1.type === 'constellation' || obj2.type === 'constellation') {
    return Math.sqrt(dx*dx + dy*dy + dz*dz) * 3.08567758128e16; // km in a parsec
  }
  
  // Fallback for other cases
  return Math.sqrt(dx*dx + dy*dy + dz*dz) * 151290000;
};

/**
 * Convert distance from one unit to another
 * @param value Value to convert
 * @param fromUnit Original unit
 * @param toUnit Target unit
 * @returns Converted value
 */
export const convertUnit = (
  value: number, 
  fromUnit: DistanceUnit,
  toUnit: DistanceUnit
): number => {
  // Convert to kilometers first
  let kmValue = value;
  if (fromUnit === 'mi') kmValue = value * 1.60934;
  if (fromUnit === 'au') kmValue = value * 151290000;
  if (fromUnit === 'ly') kmValue = value * 9460730472580.8;
  
  // Convert kilometers to target unit
  if (toUnit === 'km') return kmValue;
  if (toUnit === 'mi') return kmValue / 1.60934;
  if (toUnit === 'au') return kmValue / 151290000;
  if (toUnit === 'ly') return kmValue / 9460730472580.8;
  
  return kmValue; // fallback to km
};

/**
 * Format a distance value with the appropriate unit
 * @param value Distance value
 * @param unit Unit of measurement
 * @returns Formatted string
 */
export const formatDistance = (value: number, unit: DistanceUnit): string => {
  if (value === 0) return '0 ' + getUnitLabel(unit);
  
  // Format based on magnitude
  if (value < 0.001) {
    return `${(value * 1000).toFixed(6)} ${getUnitLabel(unit, true)}`;
  }
  
  if (value < 1) {
    return `${value.toFixed(6)} ${getUnitLabel(unit)}`;
  }
  
  if (value < 1000) {
    return `${value.toFixed(2)} ${getUnitLabel(unit)}`;
  }
  
  if (value < 1000000) {
    return `${(value / 1000).toFixed(2)}k ${getUnitLabel(unit)}`;
  }
  
  if (value < 1000000000) {
    return `${(value / 1000000).toFixed(2)}M ${getUnitLabel(unit)}`;
  }
  
  return `${(value / 1000000000).toFixed(2)}B ${getUnitLabel(unit)}`;
};

/**
 * Get the label for a distance unit
 * @param unit Unit of measurement
 * @param milli Whether to use milli prefix
 * @returns Unit label
 */
const getUnitLabel = (unit: DistanceUnit, milli = false): string => {
  switch (unit) {
    case 'km': return milli ? 'm' : 'km';
    case 'mi': return milli ? 'ft' : 'mi';
    case 'au': return 'AU';
    case 'ly': return 'light years';
    default: return unit;
  }
};
export interface Coordinates {
  x: number;
  y: number;
  z: number;
}

export interface CelestialObject {
  id: string;
  name: string;
  type: 'planet' | 'moon' | 'star' | 'galaxy' | 'constellation';
  diameter?: number; // in kilometers
  mass?: number; // in kilograms
  temperature?: number; // in Kelvin
  coordinates: Coordinates; // in astronomical units or relative position
  color?: string; // for visualization
  description?: string;
}

export type DistanceUnit = 'km' | 'mi' | 'au' | 'ly';
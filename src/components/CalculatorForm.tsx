import React from 'react';
import { Calculator as Calculate, RefreshCw } from 'lucide-react';
import type { CelestialObject } from '../types/spaceTypes';

interface CalculatorFormProps {
  celestialObjects: CelestialObject[];
  firstObject: CelestialObject | null;
  secondObject: CelestialObject | null;
  unit: 'km' | 'mi' | 'au' | 'ly';
  setFirstObject: (object: CelestialObject | null) => void;
  setSecondObject: (object: CelestialObject | null) => void;
  setUnit: (unit: 'km' | 'mi' | 'au' | 'ly') => void;
  onCalculate: () => void;
  onReset: () => void;
}

export const CalculatorForm: React.FC<CalculatorFormProps> = ({
  celestialObjects,
  firstObject,
  secondObject,
  unit,
  setFirstObject,
  setSecondObject,
  setUnit,
  onCalculate,
  onReset,
}) => {
  const handleFirstObjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const objectId = e.target.value;
    if (!objectId) {
      setFirstObject(null);
      return;
    }
    
    const selectedObject = celestialObjects.find(obj => obj.id === objectId);
    setFirstObject(selectedObject || null);
  };

  const handleSecondObjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const objectId = e.target.value;
    if (!objectId) {
      setSecondObject(null);
      return;
    }
    
    const selectedObject = celestialObjects.find(obj => obj.id === objectId);
    setSecondObject(selectedObject || null);
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(e.target.value as 'km' | 'mi' | 'au' | 'ly');
  };

  const groupedObjects = celestialObjects.reduce((acc, obj) => {
    if (!acc[obj.type]) {
      acc[obj.type] = [];
    }
    acc[obj.type].push(obj);
    return acc;
  }, {} as Record<string, CelestialObject[]>);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="firstObject" className="block text-sm font-medium text-white/90 mb-2">
            First Celestial Object
          </label>
          <select
            id="firstObject"
            value={firstObject?.id || ''}
            onChange={handleFirstObjectChange}
            className="input-field w-full"
          >
            <option value="">Select an object</option>
            {Object.entries(groupedObjects).map(([type, objects]) => (
              <optgroup key={type} label={type.charAt(0).toUpperCase() + type.slice(1)}>
                {objects.map(obj => (
                  <option key={obj.id} value={obj.id}>
                    {obj.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="secondObject" className="block text-sm font-medium text-white/90 mb-2">
            Second Celestial Object
          </label>
          <select
            id="secondObject"
            value={secondObject?.id || ''}
            onChange={handleSecondObjectChange}
            className="input-field w-full"
          >
            <option value="">Select an object</option>
            {Object.entries(groupedObjects).map(([type, objects]) => (
              <optgroup key={type} label={type.charAt(0).toUpperCase() + type.slice(1)}>
                {objects.map(obj => (
                  <option key={obj.id} value={obj.id}>
                    {obj.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="unit" className="block text-sm font-medium text-white/90 mb-2">
            Distance Unit
          </label>
          <select
            id="unit"
            value={unit}
            onChange={handleUnitChange}
            className="input-field w-full"
          >
            <option value="km">Kilometers (km)</option>
            <option value="mi">Miles (mi)</option>
            <option value="au">Astronomical Units (AU)</option>
            <option value="ly">Light Years (ly)</option>
          </select>
        </div>
      </div>

      <div className="flex space-x-4 pt-4">
        <button
          className="button-primary flex-1 flex items-center justify-center"
          onClick={onCalculate}
          disabled={!firstObject || !secondObject}
        >
          <Calculate className="mr-2 h-4 w-4" />
          Calculate
        </button>
        <button
          className="button-secondary flex items-center justify-center px-4"
          onClick={onReset}
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { CalculatorForm } from './CalculatorForm';
import { ResultDisplay } from './ResultDisplay';
import { CelestialComparison } from './CelestialComparison';
import { celestialObjects } from '../data/celestialObjects';
import { calculateDistance, convertUnit } from '../utils/calculationUtils';
import type { CelestialObject } from '../types/spaceTypes';

export const Calculator: React.FC = () => {
  const [firstObject, setFirstObject] = useState<CelestialObject | null>(null);
  const [secondObject, setSecondObject] = useState<CelestialObject | null>(null);
  const [unit, setUnit] = useState<'km' | 'mi' | 'au' | 'ly'>('km');
  const [result, setResult] = useState<number | null>(null);
  const [calculationPerformed, setCalculationPerformed] = useState(false);

  const handleCalculate = () => {
    if (!firstObject || !secondObject) return;
    
    let distance = calculateDistance(firstObject, secondObject);
    distance = convertUnit(distance, 'km', unit);
    
    setResult(distance);
    setCalculationPerformed(true);
  };

  const handleReset = () => {
    setFirstObject(null);
    setSecondObject(null);
    setResult(null);
    setCalculationPerformed(false);
  };

  return (
    <div className="space-y-8 py-6">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
          Space Scientific Calculator
        </h2>
        <p className="text-white/80 text-lg">
          Calculate distances between celestial bodies, compare their properties,
          and explore the vast universe with scientific precision.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="bg-space-indigo/50 rounded-full w-8 h-8 flex items-center justify-center mr-2">1</span>
            Select Objects & Calculate
          </h3>
          <CalculatorForm
            celestialObjects={celestialObjects}
            firstObject={firstObject}
            secondObject={secondObject}
            unit={unit}
            setFirstObject={setFirstObject}
            setSecondObject={setSecondObject}
            setUnit={setUnit}
            onCalculate={handleCalculate}
            onReset={handleReset}
          />
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="bg-space-indigo/50 rounded-full w-8 h-8 flex items-center justify-center mr-2">2</span>
            Results & Comparison
          </h3>
          {calculationPerformed ? (
            <ResultDisplay 
              firstObject={firstObject}
              secondObject={secondObject}
              result={result}
              unit={unit}
            />
          ) : (
            <div className="h-64 flex items-center justify-center text-white/60">
              <p>Select two celestial objects and calculate to see results</p>
            </div>
          )}
        </div>
      </div>

      {calculationPerformed && firstObject && secondObject && (
        <div className="card mt-8">
          <h3 className="text-xl font-semibold mb-6">Celestial Comparison</h3>
          <CelestialComparison 
            firstObject={firstObject}
            secondObject={secondObject}
          />
        </div>
      )}
    </div>
  );
};
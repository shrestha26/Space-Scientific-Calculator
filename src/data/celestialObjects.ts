import { CelestialObject } from '../types/spaceTypes';

export const celestialObjects: CelestialObject[] = [
  // Planets
  {
    id: 'earth',
    name: 'Earth',
    type: 'planet',
    diameter: 12742,
    mass: 5.97e24,
    temperature: 288,
    coordinates: { x: 1, y: 0, z: 0 }, // 1 AU from Sun
    color: '#4c9aff',
    description: 'Our home planet and the only known celestial body to harbor life.'
  },
  {
    id: 'mars',
    name: 'Mars',
    type: 'planet',
    diameter: 6779,
    mass: 6.39e23,
    temperature: 210,
    coordinates: { x: 1.5, y: 0, z: 0 },
    color: '#d94e33',
    description: 'The fourth planet from the Sun, known as the Red Planet due to iron oxide on its surface.'
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    type: 'planet',
    diameter: 139820,
    mass: 1.89e27,
    temperature: 165,
    coordinates: { x: 5.2, y: 0, z: 0 },
    color: '#e0ae6f',
    description: 'The largest planet in our solar system, a gas giant with a Great Red Spot.'
  },
  {
    id: 'saturn',
    name: 'Saturn',
    type: 'planet',
    diameter: 116460,
    mass: 5.68e26,
    temperature: 134,
    coordinates: { x: 9.5, y: 0, z: 0 },
    color: '#e1c78f',
    description: 'Known for its prominent ring system, Saturn is the sixth planet from the Sun.'
  },
  {
    id: 'venus',
    name: 'Venus',
    type: 'planet',
    diameter: 12104,
    mass: 4.86e24,
    temperature: 737,
    coordinates: { x: 0.7, y: 0, z: 0 },
    color: '#ffd89b',
    description: 'The second planet from the Sun and the hottest planet in our solar system.'
  },
  {
    id: 'mercury',
    name: 'Mercury',
    type: 'planet',
    diameter: 4879,
    mass: 3.30e23,
    temperature: 440,
    coordinates: { x: 0.4, y: 0, z: 0 },
    color: '#b8b8b8',
    description: 'The smallest and innermost planet in the Solar System.'
  },
  {
    id: 'uranus',
    name: 'Uranus',
    type: 'planet',
    diameter: 50724,
    mass: 8.68e25,
    temperature: 76,
    coordinates: { x: 19.2, y: 0, z: 0 },
    color: '#9fe3de',
    description: 'The seventh planet from the Sun, named after the Greek god of the sky.'
  },
  {
    id: 'neptune',
    name: 'Neptune',
    type: 'planet',
    diameter: 49244,
    mass: 1.02e26,
    temperature: 72,
    coordinates: { x: 30.1, y: 0, z: 0 },
    color: '#3e66f9',
    description: 'The eighth and farthest-known Solar planet from the Sun.'
  },

  // Moons
  {
    id: 'moon',
    name: 'Moon',
    type: 'moon',
    diameter: 3474,
    mass: 7.34e22,
    temperature: 220,
    coordinates: { x: 1.00257, y: 0, z: 0 }, // Relative to Earth's position
    color: '#d6d6d6',
    description: "Earth's only natural satellite, the fifth largest moon in the Solar System."
  },
  {
    id: 'europa',
    name: 'Europa',
    type: 'moon',
    diameter: 3121,
    mass: 4.80e22,
    temperature: 102,
    coordinates: { x: 5.2, y: 0.02, z: 0 },
    color: '#d1c8bd',
    description: "One of Jupiter's Galilean moons with a smooth surface and a water-ice crust."
  },
  {
    id: 'titan',
    name: 'Titan',
    type: 'moon',
    diameter: 5149,
    mass: 1.34e23,
    temperature: 94,
    coordinates: { x: 9.5, y: 0.04, z: 0 },
    color: '#f0d077',
    description: "Saturn's largest moon and the only moon known to have a dense atmosphere."
  },

  // Stars
  {
    id: 'sun',
    name: 'Sun',
    type: 'star',
    diameter: 1392700,
    mass: 1.989e30,
    temperature: 5778,
    coordinates: { x: 0, y: 0, z: 0 }, // Center of our coordinate system
    color: '#ffcd3c',
    description: 'The star at the center of our Solar System, a nearly perfect sphere of hot plasma.'
  },
  {
    id: 'proxima_centauri',
    name: 'Proxima Centauri',
    type: 'star',
    diameter: 214900,
    mass: 2.45e29,
    temperature: 3042,
    coordinates: { x: 4.246, y: 0, z: 0 },
    color: '#ff6a4c',
    description: 'The closest known star to the Sun, a red dwarf in the Alpha Centauri system.'
  },
  {
    id: 'sirius',
    name: 'Sirius',
    type: 'star',
    diameter: 2370000,
    mass: 4.02e30,
    temperature: 9940,
    coordinates: { x: 8.6, y: 0, z: 0 },
    color: '#c3e4ff',
    description: 'The brightest star in the night sky, also known as the Dog Star.'
  },
  {
    id: 'betelgeuse',
    name: 'Betelgeuse',
    type: 'star',
    diameter: 1234000000,
    mass: 1.39e31,
    temperature: 3600,
    coordinates: { x: 642.5, y: 0, z: 0 },
    color: '#ff3e00',
    description: 'A red supergiant in the constellation Orion, one of the largest visible stars.'
  },

  // Galaxies
  {
    id: 'milky_way',
    name: 'Milky Way',
    type: 'galaxy',
    diameter: 100000000000000,
    mass: 1.5e42,
    coordinates: { x: 0, y: 0, z: 0 },
    color: '#ede0ff',
    description: 'Our home galaxy, a spiral galaxy containing our Solar System.'
  },
  {
    id: 'andromeda',
    name: 'Andromeda Galaxy',
    type: 'galaxy',
    diameter: 220000000000000,
    mass: 1.5e42,
    coordinates: { x: 2530000, y: 0, z: 0 },
    color: '#d0bbec',
    description: 'The nearest spiral galaxy to the Milky Way, also known as Messier 31.'
  },
  {
    id: 'triangulum',
    name: 'Triangulum Galaxy',
    type: 'galaxy',
    diameter: 60000000000000,
    mass: 5e40,
    coordinates: { x: 2730000, y: 500000, z: 0 },
    color: '#b77ae4',
    description: 'The third-largest galaxy in the Local Group, also known as Messier 33.'
  },

  // Constellations (for representation - these don't have physical dimensions but we approximate for visualization)
  {
    id: 'orion',
    name: 'Orion',
    type: 'constellation',
    coordinates: { x: 1000, y: 500, z: 200 },
    color: '#82c4ff',
    description: 'One of the most recognizable constellations, named after a hunter in Greek mythology.'
  },
  {
    id: 'ursa_major',
    name: 'Ursa Major',
    type: 'constellation',
    coordinates: { x: 1200, y: 700, z: 300 },
    color: '#9eceff',
    description: 'The Great Bear constellation, contains the Big Dipper asterism.'
  }
];
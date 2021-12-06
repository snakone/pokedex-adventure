import { Pokedex, Pokemon } from "../interfaces/pokemon.interface";

const KANTO_ROUTE1_LIST: Pokemon[] = [
  {
    name: 'Pidgey',
    pokedex: 16,
    rate: 600,
    image: 'Pidgey.gif',
    scale: .6,
    type1: 'Normal',
    type2: 'Flying',
    min: 24,
    max: 540
  },
  {
    name: 'Rattata',
    pokedex: 19,
    rate: 1000,
    image: 'Rattata.gif',
    scale: .5,
    type1: 'Normal',
    min: 32,
    max: 480
  }
];

const KANTO_ROUTE2_LIST: Pokemon[] = [
  {
    name: 'Pidgey',
    rate: 600,
    pokedex: 16,
    image: 'Pidgey.gif',
    scale: .6,
    type1: 'Normal',
    type2: 'Flying',
    min: 24,
    max: 540
  },
  {
    name: 'Caterpie',
    pokedex: 10,
    rate: 1000,
    image: 'Caterpie.gif',
    scale: .5,
    type1: 'Bug',
    min: 12,
    max: 380
  }
];

const KANTO_POWER_PLANT_LIST: Pokemon[] = [
  {
    name: 'Voltorb',
    pokedex: 100,
    rate: 1000,
    image: 'Voltorb.gif',
    scale: .6,
    type1: 'Electric',
    min: 124,
    max: 630
  },
  {
    name: 'Magnemite',
    pokedex: 81,
    rate: 500,
    image: 'Magnemite.gif',
    scale: .8,
    type1: 'Electric',
    type2: 'Steel',
    min: 110,
    max: 540
  },
  {
    name: 'Zapdos',
    pokedex: 145,
    rate: 20,
    image: 'Zapdos.gif',
    scale: 2.2,
    type1: 'Electric',
    type2: 'Flying',
    spacing: '-28px',
    min: 1850,
    max: 3540
  }
];

export const DUMMY_POKEDEX: Pokedex[] = [
  {
    region: 'Kanto',
    locations: [
      { name: 'Route 1', list: KANTO_ROUTE1_LIST, background: 'grass.jpg' },
      { name: 'Route 2', list: KANTO_ROUTE2_LIST, background: 'field.jpg' },
      { name: 'Power Plant', list: KANTO_POWER_PLANT_LIST, background: 'electric.jpg' }
    ]
  }
];



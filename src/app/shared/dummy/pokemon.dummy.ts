import { Pokedex, Pokemon } from "../interfaces/pokemon.interface";

const KANTO_ROUTE1_LIST: Pokemon[] = [
  {
    name: 'Pidgey',
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
    image: 'Pidgey.gif',
    scale: .6,
    type1: 'Normal',
    type2: 'Flying',
    min: 24,
    max: 540
  },
  {
    name: 'Caterpie',
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
    rate: 1000,
    image: 'Voltorb.gif',
    scale: .6,
    type1: 'Electric',
    min: 124,
    max: 630
  },
  {
    name: 'Magnemite',
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

const JOHTO_ROUTE29_LIST: Pokemon[] = [
  {
    name: 'Sentret',
    rate: 1000,
    image: 'Sentret.gif',
    scale: .6,
    type1: 'Normal',
    min: 33,
    max: 395
  },
  {
    name: 'Rattata',
    rate: 200,
    image: 'Rattata.gif',
    scale: .6,
    type1: 'Normal',
    min: 32,
    max: 480
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
  },
  // {
  //   region: 'Johto',
  //   locations: [
  //     { name: 'Route 29', list: JOHTO_ROUTE29_LIST, background: 'autumn.png' }
  //   ]
  // }
];



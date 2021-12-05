import { Pokedex, Pokemon } from "../interfaces/pokemon.interface";

const KANTO_ROUTE1_LIST: Pokemon[] = [
  {
    name: 'Pidgey',
    rate: 600,
    image: 'Pidgey.gif',
    scale: .6,
    type1: 'Normal',
    type2: 'Flying'
  },
  {
    name: 'Rattata',
    rate: 1000,
    image: 'Rattata.gif',
    scale: .6,
    type1: 'Normal'
  }
];

const KANTO_ROUTE2_LIST: Pokemon[] = [
  {
    name: 'Pidgey',
    rate: 600,
    image: 'Pidgey.gif',
    scale: .6,
    type1: 'Normal',
    type2: 'Flying'
  },
  {
    name: 'Caterpie',
    rate: 900,
    image: 'Caterpie.gif',
    scale: .5,
    type1: 'Bug'
  }
];

const KANTO_POWER_PLANT_LIST: Pokemon[] = [
  {
    name: 'Voltorb',
    rate: 1000,
    image: 'Voltorb.gif',
    scale: .6,
    type1: 'Electric'
  },
  {
    name: 'Magnemite',
    rate: 500,
    image: 'Magnemite.gif',
    scale: .8,
    type1: 'Electric',
    type2: 'Steel'
  },
  {
    name: 'Zapdos',
    rate: 400,
    image: 'Zapdos.gif',
    scale: 2.2,
    type1: 'Electric',
    type2: 'Flying',
    spacing: '-25px'
  }
];

const JOHTO_ROUTE29_LIST: Pokemon[] = [
  {
    name: 'Sentret',
    rate: 1000,
    image: 'Sentret.gif',
    scale: .6,
    type1: 'Normal',
  },
  {
    name: 'Rattata',
    rate: 200,
    image: 'Rattata.gif',
    scale: .6,
    type1: 'Normal'
  }
];

export const DUMMY_POKEDEX: Pokedex[] = [
  {
    region: 'Kanto',
    locations: [
      { name: 'Route 1', list: KANTO_ROUTE1_LIST, background: 'grass.png' },
      { name: 'Route 2', list: KANTO_ROUTE2_LIST, background: 'field.jpg' },
      { name: 'Power Plant', list: KANTO_POWER_PLANT_LIST, background: 'electric.png' }
    ]
  },
  {
    region: 'Johto',
    locations: [
      { name: 'Route 29', list: JOHTO_ROUTE29_LIST, background: 'autumn.png' }
    ]
  }
];



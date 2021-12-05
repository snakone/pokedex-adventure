export interface Pokemon {
  name: string;
  rate: number;
  image: string;
  scale: number;
  type1: string;
  type2?: string | undefined;
  spacing?: string;
}

export interface Pokedex {
  region: string;
  locations: GameLocation[]
}

export interface GameLocation {
  name: string;
  background: string;
  list: Pokemon[];
}
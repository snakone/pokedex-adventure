export interface Pokemon {
  name: string;
  pokedex: number;
  rate: number;
  image: string;
  scale: number;
  type1: string;
  type2?: string | undefined;
  spacing?: string;
  pc?: number;
  min: number;
  max: number;
  seen?: boolean;
  catch?: boolean;
  route?: string;
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
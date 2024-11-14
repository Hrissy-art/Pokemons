export interface Pokemon {
  id: string;
  name: string;
  supertype?: string;
  subtypes?: string[];
  hp?: string;
  types?: string[];
  flavorText?: string;
  rarity?: string;
}

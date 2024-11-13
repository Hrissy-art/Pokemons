import { Type } from "@angular/core";
import { Ability } from "./ability.model";
import { Item } from "./item.model";
import { Move } from "./move.model";
import { Sound } from "./sound.model";
import { Kind } from "./type.model";

export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    is_default: boolean;
    order: number;
    abilities: Ability[];
    items: Item[];
    sounds: Sound;
    moves: Move[];
    types: Kind[];
    location_area_encounters: string;
    species: {
      name: string;
      url: string;
    };
  }
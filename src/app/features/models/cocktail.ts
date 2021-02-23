import { Ingredient } from "./ingredient";

export interface Cocktail {
  name: string;
  timeToMake: number; // min
  withAlcohol: boolean;
  ingredients: Ingredient[];
}

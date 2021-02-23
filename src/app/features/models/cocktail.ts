import { Ingredient } from "./ingredient";

export enum CocktailEnum {
  MOHITO,
  WHISKEY_SOUR,
  GIMLET,
  DAIKIRI,
  DJIN_TONIK,
  KUBA_LIBRE,
  MOHITO_FA,
  PINA_KOLADA,
}

export interface Cocktail {
  id: CocktailEnum;
  name: string;
  timeToMake: number; // min
  withAlcohol: boolean;
  ingredients: Ingredient[];
}

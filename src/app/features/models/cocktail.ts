import { Ingredient } from "./ingredient";

export enum CocktailEnum {
  WHISKEY_SOUR,
  CUBE_LIBRE,
  MOJITO,
  MOJITO_AF,
  ROMAN_HOLIDAY,
  GIMLET,
  PINA_COLADA,
  PINA_COLADA_AF,
  MILKY_TODDY,
  DAIQUIRI,
  SEX_ON_THE_BEACH,
  SEX_ON_THE_BEACH_AF,
  GIN_TONIC,
  MILKY_ALAN,
  PUSSYFRUIT,
  CUCUMBER,
  LEOS_COCKTAIL,
}

export interface Cocktail {
  id: CocktailEnum;
  name: string;
  timeToMake: number; // min
  withAlcohol: boolean;
  ingredients: Ingredient[];
}

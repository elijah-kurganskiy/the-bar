import { Cocktail, CocktailEnum } from "../features/models/cocktail";
import { IngredientEnum } from "../features/models/ingredient";

export const cocktails: Cocktail[] = [
  {
    id: CocktailEnum.WHISKEY_SOUR,
    name: "Виски Сауэр",
    timeToMake: 3,
    ingredients: [
      {
        id: IngredientEnum.EGG_WHITE,
      },
      {
        id: IngredientEnum.WHISKEY,
      },
      {
        id: IngredientEnum.LEMON_JUICE,
      },
      {
        id: IngredientEnum.SUGAR_SYRUP,
      },
    ],
    withAlcohol: true,
  },
  {
    id: CocktailEnum.GIMLET,
    name: "Гимлет",
    timeToMake: 3,
    ingredients: [],
    withAlcohol: true,
  },
  {
    id: CocktailEnum.GIMLET,
    name: "Дайкири",
    timeToMake: 3,
    ingredients: [],
    withAlcohol: true,
  },
  {
    id: CocktailEnum.DJIN_TONIK,
    name: "Джин-Тоник",
    timeToMake: 3,
    ingredients: [],
    withAlcohol: true,
  },
  {
    id: CocktailEnum.KUBA_LIBRE,
    name: "Куба-Либре",
    timeToMake: 3,
    ingredients: [],
    withAlcohol: true,
  },
  {
    id: CocktailEnum.MOHITO,
    name: "Мохито",
    timeToMake: 3,
    ingredients: [],
    withAlcohol: true,
  },
  {
    id: CocktailEnum.MOHITO_FA,
    name: "Мохито",
    timeToMake: 3,
    ingredients: [],
    withAlcohol: false,
  },
  {
    id: CocktailEnum.PINA_KOLADA,
    name: "Пина Колада",
    timeToMake: 3,
    ingredients: [],
    withAlcohol: false,
  },
];

export function getCocktailById(id: number): Cocktail | undefined {
  return cocktails.find((item) => item.id === id);
}

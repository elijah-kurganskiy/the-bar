import { Cocktail, CocktailEnum } from "../features/models/cocktail";
import { IngredientEnum } from "../features/models/ingredient";

export const cocktails: Cocktail[] = [
  {
    id: CocktailEnum.WHISKEY_SOUR,
    name: "Whiskey Sour",
    timeToMake: 4,
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
      {
        id: IngredientEnum.ICE,
      },
    ],
    withAlcohol: true,
  },
  {
    id: CocktailEnum.CUBE_LIBRE,
    name: "Cuba Libre",
    timeToMake: 3,
    ingredients: [
      {
        id: IngredientEnum.LIME_JUICE,
      },
      {
        id: IngredientEnum.WHITE_RUM,
      },
      { id: IngredientEnum.COCA_COLA },
      { id: IngredientEnum.ICE },
    ],
    withAlcohol: true,
  },
  {
    id: CocktailEnum.MOJITO,
    name: "Mojito",
    timeToMake: 3,
    ingredients: [
      {
        id: IngredientEnum.LIME_JUICE,
      },
      {
        id: IngredientEnum.WHITE_RUM,
      },
      {
        id: IngredientEnum.SUGAR_SYRUP,
      },
      {
        id: IngredientEnum.ICE,
      },
    ],
    withAlcohol: true,
  },
  {
    id: CocktailEnum.MOJITO_AF,
    name: "Mojito",
    timeToMake: 3,
    ingredients: [
      {
        id: IngredientEnum.LIME_JUICE,
      },
      {
        id: IngredientEnum.SUGAR_SYRUP,
      },
      {
        id: IngredientEnum.ICE,
      },
    ],
    withAlcohol: false,
  },
  {
    id: CocktailEnum.ROMAN_HOLIDAY,
    name: "Roman Holiday",
    timeToMake: 3,
    ingredients: [
      {
        id: IngredientEnum.GIN,
      },
      {
        id: IngredientEnum.MARTINI,
      },
      {
        id: IngredientEnum.WHITE_WINE,
      },
      {
        id: IngredientEnum.SPRITE,
      },
      {
        id: IngredientEnum.ICE,
      },
    ],
    withAlcohol: true,
  },
  {
    id: CocktailEnum.GIMLET,
    name: "Gimlet",
    timeToMake: 3,
    ingredients: [
      {
        id: IngredientEnum.LIME_JUICE,
      },
      {
        id: IngredientEnum.GIN,
      },
      {
        id: IngredientEnum.ICE,
      },
    ],
    withAlcohol: true,
  },
  {
    id: CocktailEnum.PINA_COLADA,
    name: "Pina Colada",
    timeToMake: 3,
    ingredients: [
      {
        id: IngredientEnum.PINEAPPLE_JUICE,
      },
      {
        id: IngredientEnum.COCONUT_MILK,
      },
      {
        id: IngredientEnum.WHITE_RUM,
      },
      {
        id: IngredientEnum.ICE,
      },
    ],
    withAlcohol: true,
  },
  {
    id: CocktailEnum.PINA_COLADA_AF,
    name: "Pina Colada",
    timeToMake: 3,
    ingredients: [
      {
        id: IngredientEnum.PINEAPPLE_JUICE,
      },
      {
        id: IngredientEnum.COCONUT_MILK,
      },

      {
        id: IngredientEnum.ICE,
      },
    ],
    withAlcohol: false,
  },
  {
    id: CocktailEnum.MILKY_TODDY,
    name: "Milky Toddy",
    timeToMake: 3,
    ingredients: [
      {
        id: IngredientEnum.EGG_YOLK,
      },
      {
        id: IngredientEnum.WHISKEY,
      },
      {
        id: IngredientEnum.SUGAR_SYRUP,
      },
      {
        id: IngredientEnum.MILK,
      },
      {
        id: IngredientEnum.ICE,
      },
    ],
    withAlcohol: true,
  },
  {
    id: CocktailEnum.DAIQUIRI,
    name: "Daiquiri",
    timeToMake: 3,
    ingredients: [
      {
        id: IngredientEnum.LIME_JUICE,
      },
      {
        id: IngredientEnum.WHITE_RUM,
      },
      {
        id: IngredientEnum.SUGAR_SYRUP,
      },

      {
        id: IngredientEnum.ICE,
      },
    ],
    withAlcohol: true,
  },
  {
    id: CocktailEnum.SEX_ON_THE_BEACH,
    name: "Sex On The Beach",
    timeToMake: 3,
    ingredients: [
      {
        id: IngredientEnum.PINEAPPLE_JUICE,
      },
      {
        id: IngredientEnum.PEACH_JUICE,
      },
      {
        id: IngredientEnum.WHITE_RUM,
      },
      {
        id: IngredientEnum.GRENADINE,
      },
      {
        id: IngredientEnum.ICE,
      },
    ],
    withAlcohol: true,
  },
  {
    id: CocktailEnum.SEX_ON_THE_BEACH_AF,
    name: "Sex On The Beach",
    timeToMake: 3,
    ingredients: [
      {
        id: IngredientEnum.PINEAPPLE_JUICE,
      },
      {
        id: IngredientEnum.PEACH_JUICE,
      },
      {
        id: IngredientEnum.MINT,
      },
      {
        id: IngredientEnum.GRENADINE,
      },
      {
        id: IngredientEnum.ICE,
      },
    ],
    withAlcohol: false,
  },
  {
    id: CocktailEnum.GIN_TONIC,
    name: "Gin Tonic",
    timeToMake: 3,
    ingredients: [
      {
        id: IngredientEnum.LIME,
      },
      {
        id: IngredientEnum.GIN,
      },
      {
        id: IngredientEnum.TONIC,
      },
      {
        id: IngredientEnum.ICE,
      },
    ],
    withAlcohol: true,
  },
  {
    id: CocktailEnum.MILKY_ALAN,
    name: "Milky Alan",
    timeToMake: 3,
    ingredients: [
      {
        id: IngredientEnum.ICE_CREAM,
      },
      {
        id: IngredientEnum.WHISKEY,
      },
      {
        id: IngredientEnum.CREAM,
      },
      {
        id: IngredientEnum.ICE,
      },
    ],
    withAlcohol: true,
  },
  {
    id: CocktailEnum.PUSSYFRUIT,
    name: "Pussi fruit",
    timeToMake: 3,
    ingredients: [
      {
        id: IngredientEnum.ORANGE_JUICE,
      },
      {
        id: IngredientEnum.LEMON_JUICE,
      },
      {
        id: IngredientEnum.LIME_JUICE,
      },
      {
        id: IngredientEnum.EGG_YOLK,
      },
      {
        id: IngredientEnum.ICE,
      },
    ],
    withAlcohol: false,
  },
  {
    id: CocktailEnum.CUCUMBER,
    name: "Cucumber",
    timeToMake: 3,
    ingredients: [
      {
        id: IngredientEnum.CUCUMBER,
      },
      {
        id: IngredientEnum.MARTINI,
      },
      {
        id: IngredientEnum.SPRITE,
      },
      {
        id: IngredientEnum.ICE,
      },
    ],
    withAlcohol: true,
  },
  {
    id: CocktailEnum.LEOS_COCKTAIL,
    name: "Leo's cocktail",
    timeToMake: 3,
    ingredients: [
      {
        id: IngredientEnum.ORANGE_JUICE,
      },
      {
        id: IngredientEnum.CRANBERRY_JUICE,
      },
      {
        id: IngredientEnum.MARTINI_FIERO,
      },
      {
        id: IngredientEnum.ICE,
      },
    ],
    withAlcohol: true,
  },
];

export function getCocktailById(id: number): Cocktail | undefined {
  return cocktails.find((item) => item.id === id);
}

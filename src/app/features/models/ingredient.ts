export enum IngredientEnum {
  PINEAPPLE_JUICE,
  ORANGE_JUICE,
  LEMON_JUICE,
  LIME_JUICE,
  LIME,
  CRANBERRY_JUICE,
  PEACH_JUICE,
  EGG_WHITE,
  EGG_YOLK,
  ICE_CREAM,
  COCONUT_MILK,
  CUCUMBER,
  MINT,
  GIN,
  WHITE_RUM,
  WHISKEY,
  MARTINI,
  MARTINI_FIERO,
  WHITE_WINE,
  SPRITE,
  COCA_COLA,
  SUGAR_SYRUP,
  GRENADINE,
  TONIC,
  MILK,
  CREAM,
}

export interface Ingredient {
  id: IngredientEnum;
  count?: number;
  measure?: "count" | "ml";
}

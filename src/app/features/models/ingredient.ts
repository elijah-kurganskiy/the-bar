export enum IngredientEnum {
  EGG_WHITE,
  WHISKEY,
  LEMON_JUICE,
  SUGAR_SYRUP,
}

export interface Ingredient {
  id: IngredientEnum;
  count?: number;
  measure?: "count" | "ml";
}

import React from "react";
import { ReactComponent as EggWhiteIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-egg-white.svg";
import { ReactComponent as LemonJuiceIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-lemon-juice.svg";
import { ReactComponent as WhiskeyIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-whiskey.svg";
import { ReactComponent as SugarSyrupIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-sugar-syrup.svg";
import { Ingredient, IngredientEnum } from "../../../models/ingredient";
import "./ingredient-item.scss";

export interface IngredientItemProps {
  ingredient: Ingredient;
}

function getIconByIngredient(id: IngredientEnum): React.FunctionComponent {
  switch (id) {
    case IngredientEnum.EGG_WHITE:
      return EggWhiteIcon;
    case IngredientEnum.WHISKEY:
      return WhiskeyIcon;
    case IngredientEnum.LEMON_JUICE:
      return LemonJuiceIcon;
    case IngredientEnum.SUGAR_SYRUP:
      return SugarSyrupIcon;
    default:
      return EggWhiteIcon;
  }
}

function getNameByIngredient(id: IngredientEnum) {
  switch (id) {
    case IngredientEnum.EGG_WHITE:
      return "Яичный белок";
    case IngredientEnum.WHISKEY:
      return "Виски";
    case IngredientEnum.LEMON_JUICE:
      return "Лимонный сок";
    case IngredientEnum.SUGAR_SYRUP:
      return "Сахарный сироп";
  }
}

function IngredientItem(props: IngredientItemProps) {
  const id = props.ingredient.id;
  const Icon = getIconByIngredient(id);
  return (
    <div className="ingredient-item line">
      <div className="ingredient-item_icon">
        <Icon />
      </div>
      <span className="ingredient-item_title text">
        {getNameByIngredient(id)}
      </span>
    </div>
  );
}
export const IngredientItemComponent = React.memo(IngredientItem);

import React from "react";
import { ReactComponent as EggWhiteIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-egg-white.svg";
import { ReactComponent as LemonJuiceIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-lemon-juice.svg";
import { ReactComponent as WhiskeyIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-whiskey.svg";
import { ReactComponent as SugarSyrupIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-sugar-syrup.svg";
import { ReactComponent as PinappleIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-pinapple.svg";
import { ReactComponent as OrangeJuiceIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-orange-juice.svg";
import { ReactComponent as LimeJuiceIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-lime-juice.svg";
import { ReactComponent as LimeIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-lime-juice.svg";
import { ReactComponent as CranberryJuiceIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-cranberry-juice.svg";
import { ReactComponent as PeachJuice } from "../../../../../assets/icons/ingredients/icon-ingredient-peach-juice.svg";
import { ReactComponent as EggYolkIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-egg-yolk.svg";
import { ReactComponent as IceCreamIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-ice-cream.svg";
import { ReactComponent as CoconutMilkIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-coconut-milk.svg";
import { ReactComponent as CucumberIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-cucumber.svg";
import { ReactComponent as MintIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-mint.svg";
import { ReactComponent as GinIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-gin.svg";
import { ReactComponent as WhiteRumIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-white-rum.svg";
import { ReactComponent as MartiniIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-martini.svg";
import { ReactComponent as MartiniFieroIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-martini-fiero.svg";
import { ReactComponent as WhiteWineIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-white-wine.svg";
import { ReactComponent as SpriteIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-sprite.svg";
import { ReactComponent as CocaColaIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-coca-cola.svg";
import { ReactComponent as GrenadineIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-grenadine.svg";
import { ReactComponent as TonicIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-tonic.svg";
import { ReactComponent as MilkIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-milk.svg";
import { ReactComponent as CreamIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-milk.svg";
import { ReactComponent as IceIcon } from "../../../../../assets/icons/ingredients/icon-ingredient-ice.svg";
import { Ingredient, IngredientEnum } from "../../../models/ingredient";
import "./ingredient-item.scss";

export interface IngredientItemProps {
  ingredient: Ingredient;
}

function getIconByIngredient(id: IngredientEnum): React.FunctionComponent {
  switch (id) {
    case IngredientEnum.PINEAPPLE_JUICE:
      return PinappleIcon;
    case IngredientEnum.ORANGE_JUICE:
      return OrangeJuiceIcon;
    case IngredientEnum.LIME_JUICE:
      return LimeJuiceIcon;
    case IngredientEnum.LIME:
      return LimeIcon;
    case IngredientEnum.CRANBERRY_JUICE:
      return CranberryJuiceIcon;
    case IngredientEnum.PEACH_JUICE:
      return PeachJuice;
    case IngredientEnum.EGG_YOLK:
      return EggYolkIcon;
    case IngredientEnum.ICE_CREAM:
      return IceCreamIcon;
    case IngredientEnum.COCONUT_MILK:
      return CoconutMilkIcon;
    case IngredientEnum.CUCUMBER:
      return CucumberIcon;
    case IngredientEnum.MINT:
      return MintIcon;
    case IngredientEnum.GIN:
      return GinIcon;
    case IngredientEnum.WHITE_RUM:
      return WhiteRumIcon;
    case IngredientEnum.MARTINI:
      return MartiniIcon;
    case IngredientEnum.MARTINI_FIERO:
      return MartiniFieroIcon;
    case IngredientEnum.WHITE_WINE:
      return WhiteWineIcon;
    case IngredientEnum.SPRITE:
      return SpriteIcon;
    case IngredientEnum.COCA_COLA:
      return CocaColaIcon;
    case IngredientEnum.GRENADINE:
      return GrenadineIcon;
    case IngredientEnum.TONIC:
      return TonicIcon;
    case IngredientEnum.MILK:
      return MilkIcon;
    case IngredientEnum.CREAM:
      return CreamIcon;
    case IngredientEnum.ICE:
      return IceIcon;
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

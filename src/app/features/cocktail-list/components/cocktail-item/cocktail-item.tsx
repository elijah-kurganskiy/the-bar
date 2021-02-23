import React from "react";
import { Cocktail } from "../../../models/cocktail";
import "./cocktail-item.scss";

export interface CocktailItemProps {
  cocktail: Cocktail;
}

function CocktailItem(props: CocktailItemProps) {
  return (
    <button className="cocktail-item back">
      <span className="cocktail-item_title text">{props.cocktail.name}</span>
    </button>
  );
}

export const CocktailItemComponent = React.memo(CocktailItem);

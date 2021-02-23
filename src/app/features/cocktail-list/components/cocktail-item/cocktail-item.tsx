import React, { useCallback } from "react";
import { Cocktail } from "../../../models/cocktail";
import "./cocktail-item.scss";

export interface CocktailItemProps {
  cocktail: Cocktail;
  onClick: (id: number) => void;
}

function CocktailItem(props: CocktailItemProps) {
  const onClick = useCallback(() => props.onClick(props.cocktail.id), [
    props.cocktail.id,
  ]);

  return (
    <button onClick={onClick} className="cocktail-item back">
      <span className="cocktail-item_title text">{props.cocktail.name}</span>
    </button>
  );
}

export const CocktailItemComponent = React.memo(CocktailItem);

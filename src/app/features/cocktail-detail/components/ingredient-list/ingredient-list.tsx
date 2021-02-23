import React from "react";
import { Ingredient } from "../../../models/ingredient";
import { IngredientItemComponent } from "../ingredient-item/ingredient-item";
import "./ingredient-list.scss";

export interface IngredientListProps {
  ingredients: Ingredient[];
}
function IngredientList(props: IngredientListProps) {
  return (
    <ul className="ingredient-list">
      {props.ingredients.map((ingredient) => (
        <li className="ingredient-list_item" key={ingredient.id}>
          <IngredientItemComponent ingredient={ingredient} />
        </li>
      ))}
    </ul>
  );
}

export const IngredientListComponent = React.memo(IngredientList);

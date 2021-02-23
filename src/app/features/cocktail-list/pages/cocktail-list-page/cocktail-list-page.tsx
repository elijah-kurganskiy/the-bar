import React from "react";
import { Cocktail } from "../../../models/cocktail";
import { CocktailListComponent } from "../../components/cocktail-list/cocktail-list";
import "./cocktail-list-page.scss";

const cocktails: Cocktail[] = [
  {
    name: "Виски Сауэр",
    timeToMake: 3,
    ingredients: [],
    withAlcohol: true,
  },
  {
    name: "Гимлет",
    timeToMake: 3,
    ingredients: [],
    withAlcohol: true,
  },
  {
    name: "Дайкири",
    timeToMake: 3,
    ingredients: [],
    withAlcohol: true,
  },
  {
    name: "Джин-Тоник",
    timeToMake: 3,
    ingredients: [],
    withAlcohol: true,
  },
  {
    name: "Куба-Либре",
    timeToMake: 3,
    ingredients: [],
    withAlcohol: true,
  },
  {
    name: "Мохито",
    timeToMake: 3,
    ingredients: [],
    withAlcohol: true,
  },
  {
    name: "Мохито",
    timeToMake: 3,
    ingredients: [],
    withAlcohol: false,
  },
  {
    name: "Пина Колада",
    timeToMake: 3,
    ingredients: [],
    withAlcohol: false,
  },
];

function CocktailListPage() {
  return (
    <CocktailListComponent
      cocktails={cocktails}
      className="cocktail-list-page"
    />
  );
}

export const CocktailListPageComponent = React.memo(CocktailListPage);

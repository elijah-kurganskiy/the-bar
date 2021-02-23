import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { cocktails } from "../../../../store/cocktails";
import { CocktailListComponent } from "../../components/cocktail-list/cocktail-list";
import "./cocktail-list-page.scss";

function CocktailListPage() {
  const history = useHistory();

  const onSelectCocktail = useCallback((id) => {
    history.push(`/cocktails/${id}`);
  }, []);

  return (
    <CocktailListComponent
      onClick={onSelectCocktail}
      cocktails={cocktails}
      className="cocktail-list-page"
    />
  );
}

export const CocktailListPageComponent = React.memo(CocktailListPage);

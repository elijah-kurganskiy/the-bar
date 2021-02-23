import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { cocktails } from "../../../../store/cocktails";
import { HeaderComponent } from "../../../common/components/header/header";
import { CocktailListComponent } from "../../components/cocktail-list/cocktail-list";
import "./cocktail-list-page.scss";

function CocktailListPage() {
  const history = useHistory();

  const onSelectCocktail = useCallback((id) => {
    history.push(`/cocktails/${id}`);
  }, []);

  return (
    <div className="cocktail-list-page">
      <HeaderComponent className="cocktail-list-page_header" />
      <main className="main">
        <CocktailListComponent
          onClick={onSelectCocktail}
          cocktails={cocktails}
          className="cocktail-list-page_list"
        />
      </main>
    </div>
  );
}

export const CocktailListPageComponent = React.memo(CocktailListPage);

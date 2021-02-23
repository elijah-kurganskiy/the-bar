import cn from "classnames";
import React, { useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { cocktails } from "../../../../store/cocktails";
import { HeaderComponent } from "../../../common/components/header/header";
import { CocktailListComponent } from "../../components/cocktail-list/cocktail-list";
import "./cocktail-list-page.scss";

function CocktailListPage() {
  const history = useHistory();
  const location = useLocation();
  const modalIsOpen = /cocktails\/\d/.test(location.pathname);
  const onSelectCocktail = useCallback((id) => {
    history.push(`/cocktails/${id}`);
  }, []);

  return (
    <div
      className={cn("cocktail-list-page", {
        "cocktail-list-page--block-scroll": modalIsOpen,
      })}
    >
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

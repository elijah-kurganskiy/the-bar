import React, { useCallback } from "react";
import { getCocktailById } from "../../../store/cocktails";
import { Cocktail } from "../../models/cocktail";
import { useHistory, useParams } from "react-router-dom";
import { HeaderWithNavigationComponent } from "../components/header-with-navigation/header-with-navigation";
import { IngredientListComponent } from "../components/ingredient-list/ingredient-list";
import { PreviewComponent } from "../components/preview/preview";
import "./cocktail-detail-page.scss";

export interface CocktailDetailProps {
  cocktail: Cocktail;
}

function CocktailDetailPage() {
  const history = useHistory();
  const navigateBack = useCallback(() => history.push("/cocktails"), []);
  const { id } = useParams<{ id: string }>();
  const cocktail = getCocktailById(parseInt(id, 10));
  if (!cocktail) {
    return <div>No found</div>;
  }
  return (
    <div className="cocktail-detail-page fancy">
      <HeaderWithNavigationComponent
        onClose={navigateBack}
        title={cocktail.name}
      />
      <PreviewComponent
        className="cocktail-detail-page_preview"
        type={cocktail.id}
      />
      <IngredientListComponent ingredients={cocktail.ingredients} />
    </div>
  );
}

export const CocktailDetailPageComponent = React.memo(CocktailDetailPage);

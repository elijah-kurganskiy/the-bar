import React, { useCallback, useState } from "react";
import { getCocktailById } from "../../../../store/cocktails";
import { useHistory, useParams } from "react-router-dom";
import { HeaderWithNavigationComponent } from "../../components/header-with-navigation/header-with-navigation";
import { IngredientListComponent } from "../../components/ingredient-list/ingredient-list";
import { PreviewComponent } from "../../components/preview/preview";
import "./cocktail-detail-page.scss";

function CocktailDetailPage() {
  const history = useHistory();
  const navigateBack = useCallback(() => history.push("/cocktails"), []);
  const [lastId, setLastId] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  if (id && id !== lastId) {
    setLastId(id);
  }
  const cocktail = getCocktailById(parseInt(id ?? lastId, 10));
  if (!cocktail) {
    return null;
  }
  return (
    <dialog
      role="dialog"
      open
      aria-modal={true}
      className="cocktail-detail-page fancy"
    >
      <HeaderWithNavigationComponent
        className="cocktail-detail-page_navigation"
        onClose={navigateBack}
        title={cocktail.name}
      />
      <PreviewComponent
        className="cocktail-detail-page_preview"
        type={cocktail.id}
      />
      <IngredientListComponent ingredients={cocktail.ingredients} />
    </dialog>
  );
}

export const CocktailDetailPageComponent = React.memo(CocktailDetailPage);

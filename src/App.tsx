import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { CocktailDetailPageComponent } from "./app/features/cocktail-detail/pages/cocktail-detail-page/cocktail-detail-page";
import { CocktailListPageComponent } from "./app/features/cocktail-list/pages/cocktail-list-page/cocktail-list-page";
import { BottomModalRoute } from "./app/features/common/components/bottom-modal-route/bottom-modal-route";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <CocktailListPageComponent />
      <BottomModalRoute exact path="/cocktails/:id">
        <CocktailDetailPageComponent />
      </BottomModalRoute>
    </BrowserRouter>
  );
}

export default App;

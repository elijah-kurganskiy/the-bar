import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { CocktailDetailPageComponent } from "./app/features/cocktail-detail/pages/cocktail-detail-page/cocktail-detail-page";
import { CocktailListPageComponent } from "./app/features/cocktail-list/pages/cocktail-list-page/cocktail-list-page";
import { BottomModalRoute } from "./app/features/common/components/bottom-modal-route/bottom-modal-route";
import { HeaderComponent } from "./app/features/common/components/header/header";

function App(): JSX.Element {
  return (
    <div className="app">
      <HeaderComponent />
      <main className="main">
        <BrowserRouter>
          <CocktailListPageComponent />
          <BottomModalRoute exact path="/cocktails/:id">
            <CocktailDetailPageComponent />
          </BottomModalRoute>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;

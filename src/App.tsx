import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { CocktailDetailPageComponent } from "./app/features/cocktail-detail/pages/cocktail-detail-page";
import { CocktailListPageComponent } from "./app/features/cocktail-list/pages/cocktail-list-page/cocktail-list-page";
import { HeaderComponent } from "./app/features/common/components/header/header";

function App() {
  return (
    <div className="app">
      <HeaderComponent />
      <main className="main">
        <BrowserRouter>
          <CocktailListPageComponent />
          <Route
            path="/cocktails/:id"
            component={CocktailDetailPageComponent}
          />
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;

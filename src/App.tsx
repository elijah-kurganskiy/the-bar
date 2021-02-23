import React from "react";
import "./App.scss";
import { CocktailListPageComponent } from "./app/features/cocktail-list/pages/cocktail-list-page/cocktail-list-page";
import { HeaderComponent } from "./app/features/common/components/header/header";

function App() {
  return (
    <div className="app">
      <HeaderComponent />
      <main className="main">
        <CocktailListPageComponent />
      </main>
    </div>
  );
}

export default App;

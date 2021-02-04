import React from "react";
import "./App.scss";
import Footer from "./Footer/Footer";

import Homepage from "../Homepage/homepage";
import StockPage from "../StockPage/StockPage";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/:stock">
          <StockPage />
        </Route>
      </Switch>
      <Footer marginTop={"47%"} />
    </main>
  );
}

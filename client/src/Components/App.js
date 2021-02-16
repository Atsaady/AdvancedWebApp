import React from "react";
import "./App.scss";
import Footer from "./Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Homepage from "../Homepage/homepage";
import StockPage from "../StockPage/StockPage";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Dictionary from "../Dictionary/dictionary";
import Calculator from "../Calculator/calculator";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/calc">
            <Calculator />
          </Route>
          <Route exact path="/dic">
            <Dictionary />
          </Route>
          <Route exact path="/:stock">
            <StockPage />
          </Route>
        </Switch>
        <Footer marginTop={"47%"} />
      </BrowserRouter>
    </main>
  );
}

import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import Homepage from "../Homepage/homepage";
import StockPage from "../StockPage/StockPage";
import Socket from "../socket";
import { useParams, Switch, Route, Link } from "react-router-dom";

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
    </main>
  );
}

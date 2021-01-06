import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import {
  BrowserRouter,
  useParams,
  Switch,
  Route,
  Link,
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

{
  /* <Homepage /> 
    <StockPage stockName={"MSFT"} />
    <Socket /> vv */
}

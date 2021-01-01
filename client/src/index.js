import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Homepage from "./Homepage/homepage";
import StockPage from "./StockPage/StockPage";

ReactDOM.render(
  <>
    {/* <Homepage /> */}
    <StockPage stockName={"MSFT"} />
  </>,
  document.getElementById("root")
);

import React from "react";
import Cards from "../StockPage/Cards";
import "./StockPage.scss";
import StockChart from "./StockChart";
// import CanvasJSReact from "../assets/canvasjs.stock.react";
// //var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function StockPage(props) {
  return (
    <>
      <h1>{props.stockName}</h1>
      <Cards stockName={props.stockName} />

      <StockChart stockName={props.stockName} />
    </>
  );
}

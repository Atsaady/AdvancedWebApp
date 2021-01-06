import React from "react";
import Cards from "../StockPage/Cards";
import Footer from "../Components/Footer/Footer";
import "./StockPage.scss";
import StockChart from "./StockChart";
import Comments from "./Comments";
import Details from "./Details";
import { useParams } from "react-router-dom";

// import CanvasJSReact from "../assets/canvasjs.stock.react";
// //var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function StockPage(props) {
  let { stock } = useParams();
  return (
    <>
      <h1 className="Stockname" style={{ marginTop: "50px" }}>
        {stock}
      </h1>
      <Cards stockName={stock} />
      <StockChart stockName={stock} />
      <Comments />
      <Details stockName={stock} />
      <Footer marginTop={"37%"} />
    </>
  );
}

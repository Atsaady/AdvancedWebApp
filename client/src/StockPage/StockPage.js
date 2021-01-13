import React, { useState, useEffect } from "react";
import Cards from "../StockPage/Cards";
import Footer from "../Components/Footer/Footer";
import "./StockPage.scss";
import StockChart from "./StockChart";
import Comments from "./Comments";
import Details from "./Details";
import { useParams } from "react-router-dom";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5000/";
var socket = socketIOClient(ENDPOINT);

export default function StockPage(props) {
  let { stock } = useParams();
  const [response, setResponse] = useState("");

  useEffect(() => {
    socket.on("hello", (data) => {
      setResponse(data);
    });
  }, []);

  return (
    <>
      <h1 className="Stockname" style={{ marginTop: "50px" }}>
        {stock}
      </h1>
      <Cards stockName={stock} />
      <StockChart stockName={stock} />
      <Comments stockName={stock} socket={socket} />
      <Details stockName={stock} />
      <Footer marginTop={"37%"} />
    </>
  );
}

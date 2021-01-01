import React from "react";
import CardDetail from "../Components/CardDetail/CardDetail";
import "../StockPage/StockPage";

function retrieve(stockName) {
  return fetch(
    `http://localhost:5000/stocks/stockrate/${stockName}`
  ).then((response) => response.json());
}

function rate(data, title) {
  if (data != null) {
    var date = Object.keys(data["Time Series (5min)"])[0];
    if (title == "Open") return data["Time Series (5min)"][date]["1. open"];
    else if (title == "Close")
      return data["Time Series (5min)"][date]["4. close"];
    else return data["Time Series (5min)"][date]["2. high"];
  }
}

const StockPage = ({ stockName }) => {
  const [stockDetails, setStockDetails] = React.useState(null);
  React.useEffect(() => {
    if (stockName !== "") {
      console.log("fetching");
      retrieve(stockName).then((data) => setStockDetails(data));
    }
  }, [stockName]);
  console.log(rate(stockDetails, "Open"));
  console.log(rate(stockDetails, "Close"));

  if (stockName === null || stockDetails === null) return "";

  return (
    <div className="cards">
      <CardDetail title={"Current Rate"} rate={2} />
      <CardDetail title={"Open"} rate={rate(stockDetails, "Open")} />
      <CardDetail title={"High"} rate={rate(stockDetails, "High")} />
      <CardDetail title={"Close"} rate={rate(stockDetails, "Close")} />
    </div>
  );
};

export default StockPage;

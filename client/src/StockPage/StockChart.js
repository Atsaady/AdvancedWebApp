import React from "react";
import FinancialItem from "../Components/Financialitem/FinancialItem";

import { Provider } from "react-redux";
import store from "../store";

function StockChart(props) {
  return (
    <Provider store={store}>
      <div className="StockChart">
        <FinancialItem stockName={props.stockName} />
      </div>
    </Provider>
  );
}

export default StockChart;

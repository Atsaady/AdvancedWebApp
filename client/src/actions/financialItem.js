import { GET_FINANCIAL_ITEM } from "./types";

export const getFinancialItem = (symbol) => async (dispatch) => {
  const API_KEY = "GWODV4ZB7TPUMHKL";
  let finItemSymbol = symbol;

  let financialChartXValuesFunction = [];
  let financialChartCloseValuesFunction = [];
  let financialChartOpenValuesFunction = [];
  let financialChartHighValuesFunction = [];
  let financialChartLowValuesFunction = [];

  try {
    await fetch(
      `http://localhost:5000/stocks/historicalstockrate/${finItemSymbol}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (let key in data["Time Series (Daily)"]) {
          financialChartXValuesFunction.push(key);
          financialChartCloseValuesFunction.push(
            data["Time Series (Daily)"][key]["4. close"]
          );
          financialChartOpenValuesFunction.push(
            data["Time Series (Daily)"][key]["1. open"]
          );
          financialChartHighValuesFunction.push(
            data["Time Series (Daily)"][key]["2. high"]
          );
          financialChartLowValuesFunction.push(
            data["Time Series (Daily)"][key]["3. low"]
          );
        }
      });

    const financialItem = {
      symbol: finItemSymbol,
      financialChartXValues: financialChartXValuesFunction,
      financialChartCloseValues: financialChartCloseValuesFunction,
      financialChartOpenValues: financialChartOpenValuesFunction,
      financialChartHighValues: financialChartHighValuesFunction,
      financialChartLowValues: financialChartLowValuesFunction,
    };

    dispatch({
      type: GET_FINANCIAL_ITEM,
      payload: financialItem,
    });
  } catch (e) {
    console.log(e);
  }
};

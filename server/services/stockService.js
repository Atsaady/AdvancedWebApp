const stockModel = require("../models/stockSchema");

const getAllStocks = async () => {
  const stocks = await stockModel.find({});
  return stocks;
};

const getStockByName = async (req) => {
  const stockname = req.params.stockName;
  return stockname;
};

module.exports = { getAllStocks, getStockByName };

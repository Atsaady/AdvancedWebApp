const StockService = require("../services/stockService");

exports.getAllStocks = async (req, res) => {
  var stocks = await StockService.getAllStocks();
  try {
    res.send(`This is the stocks: ${stocks}`);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getStockByName = async (req, res) => {
  var stockname = await StockService.getStockByName(req);
  res.send(`This is the stock that you wanted: ${stockname}`);
};

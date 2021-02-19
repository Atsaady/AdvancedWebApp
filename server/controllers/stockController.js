/* Manager/Supervisor - Controller Will Interact With The User and Handle Redirections:
    - Manages the incoming work HTTP requests
    - Decides which worker (service) should do the work
    - Splits up the work into sizable units
    - Does some checking/validation to figure out to which service(s) should the data from the request be sent to
    - Passes that work the necessary data from the HTTP requests off to the service(s)
    - But does not do the work himself/herself (the controller shouldn't be doing the entire work)
*/

const StockService = require("../services/stockService");

// Getting All Stocks From the Database - Really Needed?
exports.getAllStocks = async (req, res) => {
  var stocks = await StockService.getAllStocks();
  try {
    res.send(stocks);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Create and Insert New Stock to DB
exports.createStock = async (req, res) => {
  try {
    var stock = StockService.createStock(req);
    res.send(stock);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteStock = async (req, res) => {
  try {
    var stock = StockService.createStock(req);
    res.send(stock);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Get all Comments of Specific Stock
exports.getStockComments = async (req, res) => {
  var comments = await StockService.getStockComments(req);
  try {
    if(comments) res.send(comments);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Add Comment To Specific Stock
exports.addCommentToStock = async (req, res) => {
  try {
    StockService.addCommentToStock(req);
    return res.status(200).json({ message: "message received" });
  } catch (error) {
    console.log("error message:", error);
    return res
      .status(500)
      .json({ message: "Oops... looks like something went wrong" });
  }
};

// Getting Specific Stock Fundamentals By Name From The API
exports.getStockDataByName = async (req, res) => {
  var stockData = await StockService.getStockDataByName(req);
  res.send(stockData);
};

exports.getStockRankById= async (req, res) => {
  var stockRank = await StockService.getStockRankById(req);
  res.send(stockRank);
};


// Getting Specific Stock Rates From API - NOT REAL TIME RATES
exports.getTodayStockRateByName = async (req, res) => {
  var stockRate = await StockService.getTodayStockRateByName(req);
  res.send(stockRate);
};

// Getting Historical Stock Rates From API - For Charts
exports.getHistoricalStockRateByName = async (req, res) => {
  var stockRate = await StockService.getHistoricalStockRateByName(req);
  res.send(stockRate);
};

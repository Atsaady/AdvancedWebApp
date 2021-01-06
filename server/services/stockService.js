/* Worker - Service Will take care of the hard work and the business logic:
    - Handle CRUD Operations
    - Fetching Data From DB 
    - Will execute and run algorithms
    - Receives the request data it needs from the manager in order to perform its tasks
    - Is generally only concerned with the tasks he/she has to complete
    - Not responsible for making decisions about the "bigger" picture orchestrating the different service calls
    - Returns the completed work a response to the manager (Controller)
*/

const stockModel = require("../models/stockSchema");
const commentModel = require("../models/commentSchema");
const fetch = require("node-fetch");
const { json } = require("body-parser");
const { connection } = require("mongoose");
var AlphaVantageAPI = require("alpha-vantage-cli").AlphaVantageAPI;

var yourApiKey = "GWODV4ZB7TPUMHKL";
var alphaVantageAPI = new AlphaVantageAPI(yourApiKey, "compact", true);

const getAllStocks = async () => {
  const stocks = await stockModel.find({});
  return stocks;
};

const createStock = async (req) => {
  var query = req.body.name;
  stockModel.findOne({ name: query }, function (err, stock) {
    if (err) console.log(err);
    if (stock) console.log("This stock already been saved");
    else {
      var stock = new stockModel(req.body);
      stock.save(function (err, example) {
        if (err) console.log(err);
        console.log("New stock created");
        return stock;
      });
    }
  });
};

const getStockComments = async (req) => {};

const addCommentToStock = async (req) => {
  const { username, comment, created } = req.body;
  // create a new message and save
  let newComment = new commentModel({ username, comment, created });
  newComment = await newComment.save();
  // get the associated user and add new message to user's messages array
  let stock = await stockModel.findOne({ name: req.params.stockName });
  stock.comments.push(newComment._id);
  stock = await stock.save();
};

const getStockDataByName = async (req) => {
  const stockname = req.params.stockName;
  var fetchData = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockname}&apikey=${yourApiKey}`
  );
  var data = await fetchData.json();
  // console.log(data);
  return data;
};

const getTodayStockRateByName = async (req) => {
  const stockname = req.params.stockName;
  var fetchData = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockname}&interval=5min&apikey=${yourApiKey}`
  );
  var data = await fetchData.json();
  // console.log(data);
  return data;
};

const getHistoricalStockRateByName = async (req) => {
  const stockname = req.params.stockName;
  var fetchData = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockname}&outputsize=compact&apikey=${yourApiKey}`
  );
  var data = await fetchData.json();
  // console.log(data);
  return data;
};

module.exports = {
  getAllStocks,
  getStockDataByName,
  getTodayStockRateByName,
  createStock,
  addCommentToStock,
  getStockComments,
  getHistoricalStockRateByName,
};

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
const rankModel = require("../models/rankSchema");
const fetch = require("node-fetch");
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

const getStockComments = async (req) => {
  const stockname = req.params.stockName;
  var comments = [];
  var data = [];
  const stock = await stockModel.findOne({ name: stockname });
  comments = stock.comments;
  if(comments[0]!==null){
    for (const comment in comments) {
      const comm = await commentModel.findOne({ _id: comments[comment] });
      data.push(comm);
    }
  }
  return data;
};

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
  let stock = await stockModel.findOne({ name: req.params.stockName });
  var fetchData = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${req.params.stockName}&apikey=${yourApiKey}`
  );
  var data = await fetchData.json();
  if(stock.rank[0]==null){
    let rank = new rankModel({stockrank: Math.floor(Math.random() * (10 - 3 + 1)) + 3, 
      companyrank: Math.floor(Math.random() * (10 - 3 + 1)) + 3});
    rank = await rank.save();
    stock.rank.push(rank._id);
    stock = await stock.save();
  }
  let rank = await rankModel.findOne({ _id: stock.rank[0] });
  data.stockrank = rank.stockrank;
  data.companyrank = rank.companyrank;
  return data;
};

const getTodayStockRateByName = async (req) => {
  const stockname = req.params.stockName;
  var fetchData = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockname}&interval=5min&apikey=${yourApiKey}`
  );
  var data = await fetchData.json();
  return data;
};

const getHistoricalStockRateByName = async (req) => {
  const stockname = req.params.stockName;
  var fetchData = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockname}&outputsize=compact&apikey=${yourApiKey}`
  );
  var data = await fetchData.json();
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

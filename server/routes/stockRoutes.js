// Defines the way in which the client requests are handled by the application endpoints

const express = require("express");
const router = express.Router();

const StockController = require("../controllers/stockController");

router.get("/stocks", StockController.getAllStocks);
router.get("/stocks/:stockName", StockController.getStockDataByName);
router.get("/stockrank/:id", StockController.getStockRankById);
router.get("/stocks/:stockName/comments", StockController.getStockComments);
router.get(
  "/stocks/stockrate/:stockName",
  StockController.getTodayStockRateByName
);
router.get(
  "/stocks/historicalstockrate/:stockName",
  StockController.getHistoricalStockRateByName
);

router.post("/stocks", StockController.createStock);

router.put("/stocks/:stockName/comment", StockController.addCommentToStock);

router.delete("/stocks/:stockName", StockController.deleteStock);


module.exports = router;
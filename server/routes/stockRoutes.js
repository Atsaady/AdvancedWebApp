// Defines the way in which the client requests are handled by the application endpoints

const express = require("express");
const router = express.Router();

const StockController = require("../controllers/stockController");

router.get("/stocks", StockController.getAllStocks);
router.get("/stocks/:stockName", StockController.getStockDataByName);
router.get("/stocks/:stockName/comments", StockController.getStockComments);
router.get("/stocks/stockrate/:stockName", StockController.getStockRateByName);

router.post("/stocks", StockController.createStock);

router.put("/stocks/:stockName/comment", StockController.addCommentToStock);

module.exports = router;

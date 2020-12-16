const express = require("express");
const router = express.Router();

const StockController = require("../controllers/stockController");

router.get("/stocks", StockController.getAllStocks);
router.get("/stocks/:stockName", StockController.getStockByName);

module.exports = router;

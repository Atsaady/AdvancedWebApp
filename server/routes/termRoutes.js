const router = express.Router();

const StockController = require("../controllers/tremController");

router.get("/stocks", StockController.getAllStocks);
router.get("/stocks/:stockName", StockController.getStockDataByName);
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

module.exports = router;
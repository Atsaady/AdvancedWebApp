const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
  },
  comments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
});

const Stock = mongoose.model("Stock", StockSchema);
module.exports = Stock;

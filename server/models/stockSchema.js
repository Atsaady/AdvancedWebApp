const mongoose = require("mongoose");
const Comments = require("./commentSchema");

var Schema = mongoose.Schema;

const StockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
  },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
});

const Stock = mongoose.model("Stock", StockSchema);
module.exports = Stock;

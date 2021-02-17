const mongoose = require("mongoose");
const Comments = require("./commentSchema");

var Schema = mongoose.Schema;

const RankSchema = new mongoose.Schema({
  stockrank: {
    type: Number,
    required: true,
  },
  companyrank: {
    type: Number,
    required: true,
  },
});

const Rank = mongoose.model("Rank", RankSchema);
module.exports = Rank;
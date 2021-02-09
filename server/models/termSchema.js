const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const termSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
  },
  description: String,
  urlVideo : String
  
});

const term = mongoose.model("Term", termSchema);
module.exports = Stock;
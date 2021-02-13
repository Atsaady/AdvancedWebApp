const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const termSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
    unique: true
  },
  description: String,
  urlVideo : String,
  firstLetter:String
  
});

const Term = mongoose.model("Term", termSchema);
module.exports = Term;
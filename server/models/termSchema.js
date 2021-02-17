const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const termSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: { type: String},
  urlVideo : { type: String},
  firstLetter: { type: String},
});

const Term = mongoose.model("Term", termSchema);
module.exports = Term;
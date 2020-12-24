const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema({
  // stockname: {
  //   type: String,
  //   default: "",
  // },
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    default: "",
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Comments = mongoose.model("Comments", CommentSchema);
module.exports = Comments;

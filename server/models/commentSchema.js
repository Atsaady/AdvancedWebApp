const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  stockname: {
    type: String,
    default: "",
  },
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

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;

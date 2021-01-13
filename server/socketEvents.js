const commentModel = require("../server/models/commentSchema");
const stockModel = require("../server/models/stockSchema");

module.exports = function (server) {
  const io = require("socket.io")(server);

  io.on("connection", (socket) => {
    socket.emit("hello", "world");
    console.log("New Connection");

    socket.on("new-comment", (username, comment, stockname) => {
      socket.join(stockname);

      // create a new message and save
      let newComment = new commentModel({ username, comment });
      let id = newComment._id;
      let time = newComment.created;
      newComment = newComment.save();

      // get the associated user and add new message to user's messages array
      stockModel.findOne({ name: stockname }).then((doc) => {
        doc.comments.push(id);
        doc.save();
      });

      io.to(stockname).emit("comment", {
        user: username,
        text: comment,
        date: time,
      });
    });
  });

  // put other things that use io here
};

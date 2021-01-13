const commentModel = require("../server/models/commentSchema");
const stockModel = require("../server/models/stockSchema");

module.exports = function (server) {
  const io = require("socket.io")(
    server /*, {
    cors: {
      origins: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: false,
    },
  }*/
  );

  io.on("connection", (socket) => {
    console.log("New Connection");

    socket.on("new-comment", (username, comment, stockname) => {
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

      io.emit("comment", {
        user: username,
        text: comment,
        date: time,
        stockname: stockname,
      });
    });
  });
};

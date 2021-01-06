module.exports = function (server) {
  const io = require("socket.io")(server);

  io.on("connection", (socket) => {
    socket.emit("hello", "world");
    console.log("New Connection");
  });

  // put other things that use io here
};

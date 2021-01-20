var app = require("express")();
var server = require("http").createServer(app);
var io = require("socket.io")(server);
const mongoose = require("mongoose");
const stocks = require("./routes/stockRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./socketEvents")(server);
require("dotenv").config({
  path:
    "/Users/maoragai/Desktop/Studies/Advanced Web Applications/Investock/config/.env",
});

const port = process.env.PORT;

app.use(cors());
app.use(stocks);
app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

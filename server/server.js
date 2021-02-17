var app = require("express")();
var server = require("http").createServer(app);
var io = require("socket.io")(server);
const mongoose = require("mongoose");
const stocks = require("./routes/stockRoutes");
const terms = require("./routes/termRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./socketEvents")(server);

const uri =
  "mongodb+srv://admin:admin1234@investockcluster0.jp2wh.mongodb.net/<stocks_data>?retryWrites=true&w=majority";
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(stocks);
app.use(terms);



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

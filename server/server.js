const express = require("express");
const mongoose = require("mongoose");
const stocks = require("./routes/stockRoutes");
const home = require("./routes/homepageRouter");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(express.json());
app.use(stocks);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("client"));

const uri =
  "mongodb+srv://admin:admin1234@investockcluster0.jp2wh.mongodb.net/<sample_restaurants>?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

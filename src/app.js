require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const recordRouter = require("./routes/record");

const port = process.env.PORT || 3000;
const dbUri = process.env.MONGODB_URI;

mongoose.connect(dbUri);

const app = express();

app.use(bodyParser.json());

app.use(recordRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
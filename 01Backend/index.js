require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("This is the starting route.");
});
app.get("/jatin", (req, res) => {
  res.send("Jatin learning backend");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});

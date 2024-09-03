const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("jahidhasanbau");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login Jahid hasan</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

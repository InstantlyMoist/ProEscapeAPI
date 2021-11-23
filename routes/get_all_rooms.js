const express = require("express");
const api = express.Router();
const fs = require("fs");

api.get("/", (req, res) => {
  const data = fs.readFileSync("./data/data.json");
  res.send(data);
});

module.exports = api;

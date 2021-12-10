const api = require("express").Router();
const Puzzle = require("../../models/puzzle");

api.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(Puzzle.prototype.getAllpuzzles);
});

module.exports = api;

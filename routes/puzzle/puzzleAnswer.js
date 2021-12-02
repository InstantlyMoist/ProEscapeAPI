const api = require("express").Router();
const Puzzle = require("../../models/puzzle");

//The route I think it takes dashboard -> api -> hub -> puzzle ?

//perhaps change this to a GET request 
api.post("/", (req, res) => {
  const data = req.body;

  puzzles = Puzzle.prototype.getAllpuzzles;
  const hubIp = puzzles["hub"].ip;

  const packet = {
    answer: data.answer,
    hub: hubIp,
    puzzle: data.puzzleID,
  };

  res.send(packet);
});
module.exports = api;

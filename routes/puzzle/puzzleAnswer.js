const api = require("express").Router();
const Puzzle = require("../../models/puzzle");

//The route I think it takes dashboard -> api -> hub -> puzzle ?
api.post("/", (req, res) => {
  const data = req.body;
  const answer = data.answer;
  const puzzleId = data.puzzleId; // not sure how the dashboard will know this

  puzzles = Puzzle.prototype.getAllpuzzles;
  const hubIp = puzzles["hub"].ip;

  const packet = {
    answer: answer,
    hub: hubIp,
    puzzle: puzzleId,
  };

  res.send(packet);
});
module.exports = api;

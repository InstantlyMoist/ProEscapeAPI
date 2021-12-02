const api = require("express").Router();
const Puzzle = require("../../../models/puzzle");

//The route I think it takes puzzle -> hub -> api -> dashboard
api.get("/", (req, res) => {
  console.log("De puzzel is compleet!");
  const puzzleIP = req.query["puzzleIP"];
  const puzzles = Puzzle.prototype.getAllpuzzles;

  // TODO: Call to puzzle if needed.

  let foundPuzzle = Puzzle.prototype.findPuzzle(puzzleIP);
  if (!foundPuzzle) {
    res.sendStatus(404);
    return;
  }

  puzzles[puzzleIP].status = 100;
  Puzzle.prototype.updatePuzzle(puzzles);

  res.sendStatus(200);
});
module.exports = api;

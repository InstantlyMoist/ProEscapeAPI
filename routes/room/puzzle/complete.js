const api = require("express").Router();
const Puzzle = require("../../../models/puzzle");
const Room = require("../../../models/room")
//The route I think it takes puzzle -> hub -> api -> dashboard
api.get("/", (req, res) => {
  console.log("De puzzel is compleet!");
  const puzzleIP = req.query["puzzleIP"];
  const puzzles = Puzzle.prototype.getAllpuzzles;

  let foundPuzzle = Puzzle.prototype.findPuzzle(puzzleIP);
  if (!foundPuzzle) {
    res.sendStatus(404);
    return;
  }

  puzzles[puzzleIP].status = 100;
  Puzzle.prototype.updatePuzzle(puzzles);
  const roomID = Room.prototype.getpuzzleRoom(puzzleIP);
  Room.prototype.nextPuzzle(puzzleIP,roomID,puzzles)
  res.sendStatus(200);
});
module.exports = api;

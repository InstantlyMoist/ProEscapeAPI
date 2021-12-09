const api = require("express").Router();
const Puzzle = require("../../../models/puzzle");

//The route I think it takes puzzle -> hub -> api -> dashboard
api.get("/", (req, res) => {
  console.log("De puzzel is compleet!");
  const puzzleIP = req.query["puzzleIP"];
  const puzzles = Puzzle.prototype.getAllpuzzles;

  // TODO: Call to puzzle if needed.
  // Need to give the start call to the next puzzle.
  /* Currently the order is stored in the room data but a problem is that a puzzle doesnt known in which room it is. zo the puzzle 
  doesnt which puzzle is next. Possible fix might be to give de order array to the puzzle so it knowns when all its done and then create a 
  function that activates the next array of puzzles. Or the puzzles.json get the roomid and then we can acces the order from here. 
  */ 

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

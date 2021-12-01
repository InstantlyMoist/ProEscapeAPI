const api = require("express").Router();
const Puzzle = require("../../../models/puzzle");
const http = require("http");

api.get("/", (req, res) => {
  // PuzzleID
  const puzzleID = req.query["puzzleID"];
  const puzzles = Puzzle.prototype.getAllpuzzles;
  //const puzzles = Puzzle.prototype.getAllpuzzles;
  //const foundPuzzle = Puzzle.prototype.findPuzzle(puzzles, puzzleID);
  
  if (!puzzleID) {
    res.sendStatus(404);
    return;
  }

  http.get(`http://${puzzleID}/start?answer=4852&ip=192.168.227.150`, (httpRes) => { // TODO: GET IP FROM COMPUTER DYNAMICALLY
    console.log("De request naar de puzzel is verstuurd");
  });

  puzzles[puzzleID].status = 0;
  Puzzle.prototype.updatePuzzle(puzzles);

  res.sendStatus(200);

});

module.exports = api;

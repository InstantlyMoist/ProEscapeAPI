const api = require("express").Router();
const e = require("express");
const Puzzle = require("../../models/puzzle");
//The route I think it takes puzzle -> hub -> api -> dashboard
api.post("/", (req, res) => { 
    const data = req.body;
    const status= data.status;
    let puzzleId = data.puzzleIp; // imagine this call comes from the puzzle so it will know the puzzle ip?
    const puzzles = Puzzle.prototype.getAllpuzzles;

    puzzleId= puzzles.find((element) => element == puzzleId);
    if(puzzleId == null){
        res.sendStatus(404);
        return
    }
    puzzles[puzzleId].status = status;
    Puzzle.prototype.updatePuzzle(puzzles)

    res.sendStatus(200)
});
module.exports = api;   
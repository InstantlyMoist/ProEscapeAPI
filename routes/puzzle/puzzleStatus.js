const api = require("express").Router();
const e = require("express");
const Puzzle = require("../../models/puzzle");


api.get("/",(req, res)=>{

})
//The route I think it takes puzzle -> hub -> api -> dashboard
api.post("/", (req, res) => { 
    const data = req.body;
    const status= data.status;
    let puzzleIp = data.puzzleIp; // imagine this call comes from the puzzle so it will know the puzzle ip?
    const puzzles = Puzzle.prototype.getAllpuzzles;

    puzzleIp = Puzzle.prototype.findPuzzle(puzzles,puzzleIp)
    if(puzzleId == null){
        res.sendStatus(404);
        return
    }

    puzzles[puzzleId].status = status;
    Puzzle.prototype.updatePuzzle(puzzles)

    res.sendStatus(200)
});
module.exports = api;   
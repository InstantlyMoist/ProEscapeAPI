const api = require("express").Router();
const Puzzle = require("../../../models/puzzle");
const Room = require("../../../models/room");
api.post("/", (req, res) => {
    const data = req.body;
    res.header("Access-Control-Allow-Origin", "*");
    // We probably wil want to get the roomID from the url but im not sure how to give this so for testing purposes im doing it hardcoded
    // let roomID = req.query["roomID"];  
    const roomID = data['roomID']

    Room.prototype.insertOrder(roomID,data['order']);
    Puzzle.prototype.insertAnwser(data['code'])

    res.sendStatus(200);
});
module.exports = api;

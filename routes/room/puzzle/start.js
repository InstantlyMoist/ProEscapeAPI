const api = require("express").Router();
const Puzzle = require("../../../models/puzzle");
const http = require("http");
const Room = require("../../../models/room");


api.get("/", (req, res) => {
  // roomID
  const roomID = req.query["roomID"];
  const rooms = Room.prototype.getAllRooms
  const puzzles = Puzzle.prototype.getAllpuzzles;
  const orderKeys = Object.keys(rooms[roomID]['order'])
  let step = {}
  step[orderKeys[0]] = rooms[roomID]['order'][orderKeys[0]]
  rooms[roomID]['current'] = step
  Room.prototype.updateRooms(rooms);
  Room.prototype.activateOrder(puzzles, roomID);
  Puzzle.prototype.puzzleReset(rooms,roomID)

  res.sendStatus(200);

});

module.exports = api;

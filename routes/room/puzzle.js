const api = require("express").Router();
const uuid = require('uuid');
const Room = require("../../models/room");
const Puzzle = require("../../models/puzzle")

//requires de id of the room, the ip adress of the puzzle and the title of the puzzle
api.post("/", (req, res) => {
  // /api/room/puzzle

  const data = req.body;
  console.log(data);

  puzzles = Puzzle.prototype.getAllpuzzles
  const value = {
    "status": true,
    "title": data.title
  }
  puzzles[data.puzzleId] = value

  Puzzle.prototype.updatePuzzle(puzzles)


  const roomId = data.roomId;
  const rooms = Room.prototype.getAllRooms;
  let room = Room.prototype.findRoom(roomId, rooms);
  console.log(room);

  if (!room) { // Room does not exist
    res.sendStatus(404);
    return;
  }
  puzzleId = uuid.v4()
  rooms[roomId].puzzles.push(puzzleId);
  console.log(rooms[roomId].puzzles);
  Room.prototype.updateRooms(rooms);
  res.sendStatus(200);
});

api.delete("/", (req, res) => { 
  const data = req.body;
  const puzzleId = data.puzzleId;
  const roomId = data.roomId;

  const rooms = Room.prototype.getAllRooms;
  const room = Room.prototype.findRoom(roomId, rooms);
  const puzzle = rooms[room].puzzles.find((element) => element == puzzleId);

  if (!room || !puzzle) { // Either room or puzzle doesn't exist
    res.sendStatus(404);
    return;
  }
  const puzzleIndex = rooms[room].puzzles.indexOf(puzzle);
  rooms[room].puzzles.splice(puzzleIndex,1);
  Room.prototype.updateRooms(rooms);
  res.sendStatus(200);
});
module.exports = api;

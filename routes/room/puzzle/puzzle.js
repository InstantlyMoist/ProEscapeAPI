const api = require("express").Router();
const uuid = require("uuid");
const Room = require("../../../models/room");
const Puzzle = require("../../../models/puzzle");

//requires de id of the room, the ip adress of the puzzle and the title of the puzzle
api.post("/", (req, res) => {
  // /api/room/puzzle

  const data = req.body;
  const roomID = data.roomID

  const puzzles = Puzzle.prototype.getAllpuzzles;
  const value = {
    status: true,
    title: data.info[0]['value'],
  };
  puzzles[data.info[1]['value']] = value;

  Puzzle.prototype.updatePuzzle(puzzles);

  const rooms = Room.prototype.getAllRooms;
  if (!roomID) {
    res.sendStatus(404);
    return;
  }
  let foundRoom = Room.prototype.findRoom(roomID, rooms);

  if (!foundRoom) {
    // Room does not exist
    res.sendStatus(404);
    return;
  }

  rooms[roomID].puzzles.push(data.info[1]['value']);
  Room.prototype.updateRooms(rooms);
  res.sendStatus(200);
});

api.delete("/", (req, res) => {

  const roomID = req.body['roomID'];
  const puzzleID = req.body['info'][1]['value']
  const puzzles = Puzzle.prototype.getAllpuzzles;

  const rooms = Room.prototype.getAllRooms;
  const foundRoom = Room.prototype.findRoom(roomID, rooms);
  const foundPuzzle = Puzzle.prototype.findPuzzle(puzzleID);

  if (!foundRoom || !foundPuzzle) {
    // Either room or puzzle doesn't exist
    res.sendStatus(404);
    return;
  }
  // TODO: Remove puzzle from puzzles.json (!)
  delete puzzles[puzzleID];
  const puzzleIndex = rooms[foundRoom].puzzles.indexOf(foundPuzzle);
  rooms[foundRoom].puzzles.splice(puzzleIndex, 1);
  Room.prototype.updateRooms(rooms);
  Puzzle.prototype.updatePuzzle(puzzles)

  res.sendStatus(200);
});
module.exports = api;

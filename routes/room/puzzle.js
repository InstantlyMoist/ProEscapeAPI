const api = require("express").Router();
const uuid = require('uuid');
const Room = require("../../models/room");

//requires de id van de kamer
api.post("/", (req, res) => {
  // /api/room/puzzle

  const data = req.body;
  console.log(data);

  const roomId = data.RoomId;
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

api.delete("/", (req, res) => { // TODO Andreas: let erop dat alle requests via de main slug gaan (dus /api/room/puzzle), je hoeft hiervoor geen aparte /delete aan te maken :)
  const puzzleId = req.body.PuzzleId;
  const roomId = req.body.RoomId;
  console.log(puzzleId, roomId);

  const rooms = Room.prototype.getAllRooms;
  const room = Room.prototype.findRoom(roomId, rooms);
  puzzle = rooms[room].puzzles.find((element) => element == puzzleId);

  if (!room || !puzzle) { // Either room or puzzle doesn't exist
    res.sendStatus(404);
    return;
  }
  puzzleIndex = rooms[room].puzzles.findIndex(puzzle); // Kan je niet findIndex(puzzle) doen? aangezien je die al hebt
  rooms[room].puzzles.splice(puzzleIndex);
  Room.prototype.updateRooms(rooms);
  res.sendStatus(200);
});
module.exports = api;

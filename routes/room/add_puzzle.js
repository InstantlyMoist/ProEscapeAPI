const { RSA_PKCS1_PADDING } = require("constants");
const e = require("express");
const express = require("express");
const api = express.Router();
const fs = require("fs");
const Room = require("../../models/room");

api.use(express.json());

//requires de id van de kamer
api.post("/", (req, res) => { // /api/room/addpuzzle
 
  const data = req.body;
  console.log(data)

  const roomId= data.RoomId
  const rooms = Room.prototype.getAllRooms;
  let room = Room.prototype.findRoom(RoomId, rooms)
  console.log(room)

  if (room != null){
    puzzleId= Math.max.apply(Math,rooms[roomId].puzzles) + 1
    rooms[roomId].puzzles.push(puzzleId);
    console.log(rooms[roomId].puzzles)
    Room.prototype.updateRooms(rooms)
    res.sendStatus(200);
  }else{  res.sendStatus(404);} //When the room doesn't exist


});
// TO DO Vraag kyllian if not return
api.delete("/delete", (req,res) =>{
  const puzzleId = req.body.PuzzleId
  const roomId = req.body.RoomId
  console.log(puzzleId, roomId)

  const rooms = Room.prototype.getAllRooms;
  const room = Room.prototype.findRoom(roomId, rooms);
  puzzle = rooms[room].puzzles.find(element => element == puzzleId)


  if (room !=null && puzzle !=null){
      puzzleIndex = rooms[room].puzzles.findIndex(element => element == puzzle)
      // rooms[room].puzzles.splice(PuzzleIndex,1);
      delete rooms[room].puzzles[puzzleIndex];
      Room.prototype.updateRooms(rooms);
      res.sendStatus(200);
    }else{  res.sendStatus(404)} // When the puzzle or room doesn't exist
  })
module.exports = api;

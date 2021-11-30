const api = require("express").Router();

const Room = require("../../models/room");

api.get("/", (req, res) => {
  let rooms = Room.prototype.getAllRooms;
  let roomID = req.query["roomID"];
  let foundRoom = Room.prototype.getById(rooms, roomID);

  if (!foundRoom) {
    res.sendStatus(404);
    return;
  }
  
  res.send(foundRoom);
});

api.post("/", (req, res) => {
  let data = req.body; // Should be the room object with title

  let rooms = Room.prototype.getAllRooms;
  let keys = Object.keys(rooms);
  let newIndex = parseInt((keys[keys.length - 1] || 0)) + 1;

  data["runningState"] = false;
  data["progress"] = 0;
  data["puzzles"] = [];
  data["camera"] = [];

  rooms[newIndex] = data;

  Room.prototype.updateRooms(rooms);

  res.sendStatus(200);
});

api.delete("/", (req, res) => {
  let data = req.body;
  // Data should contain room ID
  let roomID = data.id;

  Room.prototype.remove(roomID, (done) => { // Method handles ID so no need to check if it's there
    res.sendStatus(done ? 404 : 200);
  });
});

api.put("/", (req, res) => {
  let data = req.body;
  let roomID = req.query["roomID"];
  let rooms = Room.prototype.getAllRooms;

  if (!roomID) {
    res.sendStatus(404);
    return;
  }

  if (!data) {
    res.sendStatus(400);
    return;
  }

  rooms[roomID].title = data.title || rooms[roomID].title;
  rooms[roomID].progress = data.progress || rooms[roomID].progres;
  rooms[roomID].runningState = data.runningState || rooms[roomID].runningState;

  Room.prototype.updateRooms(rooms)
  res.sendStatus(200);
});



module.exports = api;

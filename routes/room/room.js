const api = require("express").Router();

const Room = require("../../models/room");

api.get("/", (req, res) => {
  let rooms = Room.prototype.getAllRooms;
  let roomID = req.query["roomId"];
  let foundRoom = getById(rooms, roomID);

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

function getById(json, id) { // TODO: Move this to model
  let result = null;
  Object.keys(json).forEach((room) => {
    result = json[id];
  });
  return result;
}

module.exports = api;

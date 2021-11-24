const { response } = require("express");
const express = require("express");
const api = express.Router();
const Room = require("../../models/room");
const fs = require("fs");
var bodyParser = require("body-parser");

api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

api.get("/", (req, res) => {
  let rooms = Room.prototype.getAllRooms;
  let roomID = req.query["roomId"];
  let foundRoom = getById(rooms, roomID);

  if (foundRoom !=null){
    res.send(foundRoom);
    console.log(foundRoom);
  }else{ res.sendStatus(404)}//When the room doesn't exist

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

  Room.prototype.remove(roomID, (done) => {
    res.sendStatus(done ? 404 : 200);
  });
});

function getById(json, id) {
  let result = null;
  Object.keys(json).forEach((room) => {
    result = json[id];
  });
  return result;
}

module.exports = api;

const api = require("express").Router();
const Room = require("../../models/room");

api.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(Room.prototype.getAllRooms);
});

module.exports = api;

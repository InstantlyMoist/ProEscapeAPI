const api = require("express").Router();
const Room = require("../../models/room");

api.get("/", (req, res) => {
  res.send(Room.prototype.getAllRooms);
});

module.exports = api;

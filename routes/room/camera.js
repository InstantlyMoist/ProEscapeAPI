const api = require("express").Router();
const Room = require("../../models/room");

api.post("/", (req, res) => {
  const data = req.body; //requires the roomId and the camera(s) ip
  let roomID = req.query["roomId"];

  foundRoom = Room.prototype.findRoom(roomID, rooms);
  if (!foundRoom) {
    res.sendStatus(404);
    return;
  }

  Room.prototype.addCamera(roomId, data.camera);
  res.sendStatus(200);
});

api.delete("/", (req, res) => {
  let roomID = req.query["roomID"];
  let cameraIP = req.query["cameraIP"];

  const rooms = Room.prototype.getAllRooms;

  foundRoom = Room.prototype.findRoom(roomID, rooms);
  foundCamera = rooms[foundRoom].camera.find((element) => element == cameraIP);

  if (!roomID || !cameraIP || !foundCamera || !foundRoom) {
    // When room or camera doesn't exist
    res.sendStatus(404);
    return;
  }
  Room.prototype.removeCamera(cameraIP, roomID, rooms);
  res.sendStatus(200);
});
module.exports = api;

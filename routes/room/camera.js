const api = require("express").Router();
const Room = require("../../models/room");

api.post("/", (req, res) => {
    const data = req.body;  //requires the roomId and the camera(s) ip
    let roomId = data.roomId;
    roomId = Room.prototype.findRoom(roomId,rooms);
    camera = data.camera
    if (roomId == null){
        res.sendStatus(404);
        return;
    }
    Room.prototype.addCamera(roomId, camera)
    res.sendStatus(200);

});

api.delete("/", (req, res) => { 
const data = req.body //requires the roomId and the camera ip
let roomId = data.roomId;
let cameraIp = data.cameraIp;
const rooms = Room.prototype.getAllRooms;

roomId = Room.prototype.findRoom(roomId,rooms);
cameraIp = rooms[roomId].camera.find((element)=> element == cameraIp);

if(!roomId || !cameraIp){ // when room or camera doesn't exist
    res.sendStatus(404);
    return;
}
Room.prototype.removeCamera(cameraIp,roomId,rooms);
res.sendStatus(200);

});
module.exports = api;

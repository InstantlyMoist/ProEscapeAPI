const api = require("express").Router();
const Puzzle = require("../../models/puzzle");
const Room = require("../../models/room");

api.post("/", (req, res) => {
    const data = req.body;  //requires the roomId and the camera(s) ip
    let roomId = data.roomId;
    const rooms = Room.prototype.getAllRooms;
    roomId = Room.prototype.findRoom(roomId,rooms);

    if (roomId == null){
        res.sendStatus(404);
        return;
    }
    
    const cameraKeys = Object.keys(data.camera);
    cameraKeys.forEach(ip=>{
        rooms[roomId].camera.push(data.camera[ip]);
    });

    Room.prototype.updateRooms(rooms);
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
const cameraIndex = rooms[roomId].camera.indexOf(cameraIp);
rooms[roomId].camera.splice(cameraIndex,1);
Room.prototype.updateRooms(rooms);
res.sendStatus(200);

});
module.exports = api;

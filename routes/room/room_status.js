const api = require("express").Router();

const Room = require("../../models/room");

api.post("/", (req, res) => { //TO DO ERROR handeling not sure if it needs it
    let data = req.body;
    console.log(`Dit is data.progress${data.progress}`)
    console.log(`Dit is data.runningstate${data.runningState}`)
    const rooms = Room.prototype.getAllRooms;
    let roomId = Room.prototype.findRoom(data.RoomId, rooms);

    if (roomId == null){ // When the room doesn't exist
        res.sendStatus(404);
        return
    }

    if (data.title != null){
        rooms[roomId].title = data.title;
    }
    if(data.progress != null){
        
        rooms[roomId].progress = data.progress;
    }
    if(data.runningState != null){
        rooms[roomId].runningState = data.runningState;
    }
    
    
    if (data.title == null && data.progress == null && data.runningState == null ){
        res.sendStatus(404);
        console.log("User send no data");
        return;
    }
    Room.prototype.updateRooms(rooms)
    res.sendStatus(200);
});
module.exports = api;   
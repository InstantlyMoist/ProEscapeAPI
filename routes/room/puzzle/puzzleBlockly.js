const api = require("express").Router();
const room = require("../../../models/room");
api.post("/", (req, res) => {
    const data = req.body;
    res.header("Access-Control-Allow-Origin", "*");
    console.log(data);
    // We probably wil want to get the roomID from the url but im not sure how to give this so for testing purposes im doing it hardcoded
    // let roomID = req.query["roomID"];  
    let roomID = '2'


    room.prototype.insertOrder(roomID,data);
    res.status(200).send("f u");
    
});
module.exports = api;

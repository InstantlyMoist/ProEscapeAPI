let fs = require("fs");

class Room {

    /*
    TODO in room:

    Add IP address field (for the camera), this should be updated in the POST and UPDATE request. 
    We could also consider adding a list of IPs for multiple cameras, which would probably be a lot easier.
    A simple check of the body could determine if it's either one camera or multiple
    
    if one -> convert to list with only one index
    else -> use list

    Dashboard and app should be able to load them dynamically
    */

    /*  26/11
        Added camera ip array to data.json that gets added in the POST in room.js. You can add multiple camera ips to it.
        You can also delete camera ips.
    */

    // Room consist of:
    //
    // ID
    // Array of puzzles ID
    // State of room
    // Code

    constructor(id, puzzles, state, code) {
        // always initialize all instance properties
        this.id = id;
        this.puzzles = puzzles;
        this.state = state;
        this.code = code;
    }

    get getAllRooms() {
        return JSON.parse(fs.readFileSync("./data/data.json")); // TODO: Add error handling (?)
    }

    updateRooms(rooms){ // TODO: Add error handling (?)
        fs.writeFileSync("./data/data.json", JSON.stringify(rooms, null, "  "));
    }

    findRoom(roomId ,rooms){ // TODO: Add error handling (?)
        let keys = Object.keys(rooms);
        let room = keys.find(element => element == roomId)
        return room
    }

    remove(roomID, done) {
        let rooms = this.getAllRooms;
        if (rooms[roomID] == null) {
            return done(Error('Room not found'));
        }
        delete rooms[roomID];
        this.updateRooms(rooms);
        return done(null);
    }

    getById(json, id) {
        let result = null;
        Object.keys(json).forEach((room) => {
          result = json[id];
        });
        return result;
      }
}

module.exports = Room;
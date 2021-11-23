let fs = require("fs");

class Room {

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
        return JSON.parse(fs.readFileSync("./data/data.json"));
    }

    updateRooms(rooms){
        fs.writeFileSync("./data/data.json", JSON.stringify(rooms, null, "  "));
    }

    remove(roomID, done) {
        let rooms = this.getAllRooms;
        if (rooms[roomID] == null) {
            console.log("No room found");
            return done(Error('Room not found'));
        }
        delete rooms[roomID];
        this.updateRooms(rooms);
        return done(null);
    }
}

module.exports = Room;
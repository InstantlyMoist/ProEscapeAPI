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

    // Room consist of:
    //
    // ID
    // Array of puzzles ID
    // State of room
    // Code
    */
    constructor(id, puzzles, state, code) {
        // always initialize all instance properties
        this.id = id;
        this.puzzles = puzzles;
        this.state = state;
        this.code = code;
    }
    /**
     * Sends you json file with all rooms info
     */
    get getAllRooms() {
        return JSON.parse(fs.readFileSync("./data/data.json")); // TODO: Add error handling (?)
    }
    /**
     * Replace the old json file with the new one
     * @param {New json file} rooms 
     */
    updateRooms(rooms){ // TODO: Add error handling (?)
        fs.writeFileSync("./data/data.json", JSON.stringify(rooms, null, "  "));
    }
    /**
     * Check if the rooms exist
     * @param {The id for the room} roomId 
     * @param {the json file with all the rooms} rooms 
     * @returns gives back the room id if it doesn't exit it return empty
     */
    findRoom(roomId ,rooms){ // TODO: Add error handling (?)
        let keys = Object.keys(rooms);
        let room = keys.find(element => element == roomId)
        return room
    }
    /**
     * Remove room and all info from the json file
     * @param {The id for the room} roomID 
     * @param {use to check if roomId exist, if its not done is empty} done 
     * @returns 
     */
    remove(roomID, done) {
        let rooms = this.getAllRooms;
        if (rooms[roomID] == null) {
            return done(Error('Room not found'));
        }
        delete rooms[roomID];
        this.updateRooms(rooms);
        return done(null);
    }
    /**
     * Check if roomid exist
     * @param {The json with the rooms} json 
     * @param {The room ID} id 
     * @returns 
     */
    getById(json, id) {
        let result = null;
        Object.keys(json).forEach((room) => {
          result = json[id];
        });
        return result;
      }
      /**
       * Adds camera ip to the room
       * @param {The room ID where the camera is located} roomId 
       * @param {The ip of the camera} camera 
       */
    addCamera(roomId,camera){
        const room = this.getAllRooms;
        const cameraKeys = Object.keys(camera);
        cameraKeys.forEach(ip=>{
            rooms[roomId].camera.push(data.camera[ip])
        });
        this.updateRooms(rooms);
        
    }
    /**
     * Removes camera ip from room
     * @param {The ip of the camera to be removed} cameraIp 
     * @param {The room id where camera is located} roomId 
     * @param {The json file with all the rooms} rooms 
     */
    removeCamera(cameraIp,roomId,rooms){
        const cameraIndex = rooms[roomId].camera.indexOf(cameraIp);
        rooms[roomId].camera.splice(cameraIndex,1);
        this.updateRooms(rooms)
    }
}

module.exports = Room;
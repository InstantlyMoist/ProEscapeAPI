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
   * @param {*} rooms New json file
   */
  updateRooms(rooms) {
    // TODO: Add error handling (?)
    fs.writeFileSync("./data/data.json", JSON.stringify(rooms, null, "  "));
  }
  /**
   * Check if the rooms exist
   * @param {*} roomID The id for the room
   * @param {*} rooms the json file with all the rooms
   * @returns gives back the room id if it doesn't exit it return empty
   */
  findRoom(roomID, rooms) {
    // TODO: Add error handling (?)
    let keys = Object.keys(rooms);
    let room = keys.find((element) => element == roomID);
    return room;
  }
  /**
   * Remove room and all info from the json file
   * @param {*} roomID The id for the room
   * @param {*} done use to check if roomId exist, if its not done is empty
   * @returns
   */
  remove(roomID, done) {
    let rooms = this.getAllRooms;
    if (rooms[roomID] == null) {
      return done(Error("Room not found"));
    }
    delete rooms[roomID];
    this.updateRooms(rooms);
    return done(null);
  }
  /**
   * Check if roomid exist
   * @param {*} json The json with the rooms
   * @param {*} ID The room ID
   * @returns
   */
  getById(json, ID) {
    let result = null;
    Object.keys(json).forEach((room) => {
      result = json[ID];
    });
    return result;
  }
  /**
   * Adds camera ip to the room
   * @param {*} roomID The room ID where the camera is located
   * @param {*} camera The ip of the camera
   */
  addCamera(roomID, camera) {
    const rooms = this.getAllRooms;
    const cameraKeys = Object.keys(camera);
    cameraKeys.forEach((ip) => {
      rooms[roomID].camera.push(data.camera[ip]);
    });
    this.updateRooms(rooms);
  }
  /**
   * Removes camera ip from room
   * @param {*} cameraIP The ip of the camera to be removed
   * @param {*} roomID The room id where camera is located
   * @param {*} rooms The json file with all the rooms
   */
  removeCamera(cameraIP, roomID, rooms) {
    const cameraIndex = rooms[roomID].camera.indexOf(cameraIP);
    rooms[roomID].camera.splice(cameraIndex, 1);
    this.updateRooms(rooms);
  }
  /**
   * Insert the order of puzzels gotten from Blockly
   * 
   * @param {*} roomID The id for the room 
   * @param {*} order The data given from blockly
   */
  insertOrder(roomID, order){
    let rooms = this.getAllRooms;
    rooms[roomID]['order'] = {};
    for (let indexKey in order){
      let i = 1;
      rooms[roomID]['order'][indexKey] = order[indexKey];
      i++
    }
    this.updateRooms(rooms);
  }
}

module.exports = Room;

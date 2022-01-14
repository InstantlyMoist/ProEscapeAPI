let fs = require("fs");
const http = require("http");

class Room {
  
  constructor() {
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
  /**
   *  get the room id where the puzzle is located at.
   * @param {*} puzzleIP The ip that the puzzle has
   * @returns 
   */
  getpuzzleRoom(puzzleIP){
    const rooms = this.getAllRooms;
    const keys = Object.keys(rooms);
    
    for(const key of keys){
      let check = rooms[key]['puzzles'].includes(puzzleIP)
      if (check){
        const roomid = key
        return roomid
      }
    }   
    throw "Puzzle doesn't exist"
  }

  /**
   * this function is used to check when we need to go to the next step of puzzles
   * 
   * @param {*} puzzleIP Needed to check for which puzzles we have to start
   * @param {*} roomID To known in which room we are working in
   * @param {*} puzzles To give forward to activate puzzles if needed
   */
  nextPuzzle(puzzleIP,roomID,puzzles){  
    const rooms = this.getAllRooms;
    const keyStep = Object.keys(rooms[roomID]['current']);
    if (rooms[roomID]['current'][keyStep].includes(puzzleIP)){
      const puzzleIndex = rooms[roomID]['current'][keyStep].indexOf(puzzleIP);
      rooms[roomID]['current'][keyStep].splice(puzzleIndex,1);
      this.updateRooms(rooms) // unnecessary check if oke to delete
    }

    if (rooms[roomID]['current'][keyStep].length == 0){
      const keysRoom = Object.keys(rooms[roomID]['order']);
      for(let i = 0; i < keysRoom.length;i++){
        if (keysRoom[i] == keyStep){
          if(rooms[roomID]['order'][keysRoom[i+1]] != null){
            let step = {}
            step[keysRoom[i+1]] = rooms[roomID]['order'][keysRoom[i+1]]
            rooms[roomID]['current'] = step;
            this.updateRooms(rooms)
            this.activateOrder(puzzles, roomID);
          }else{
              rooms[roomID]['progress'] = 100;
              this.updateRooms(rooms);
          }
       }
     }
   }
  }
  /**
   * This function is vital to start all the puzzles in the correct order
   * 
   * @param {*} puzzles used to see which code corresponds to the puzzle
   * @param {*} roomID used to see which room we are working in
   */
  activateOrder(puzzles,roomID){
    this.changeProgress(roomID)
    const rooms = this.getAllRooms;
    const keyStep = Object.keys(rooms[roomID]['current']);
    for (const puzzle of rooms[roomID]['current'][keyStep]){
      // http.get(`http://${puzzle}/start?answer=${puzzles[puzzle]['code']}&ip=192.168.227.150`, (httpRes) => {
      //   console.log("De request naar de puzzel is verstuurd");
      // });
    }
  }

  /**
   * Changes the progress based on the current step the room is.
   * 
   * @param {*} roomID  Room id needed to know which room we are in 
   */
  changeProgress(roomID){// Posible to change progress based on steps to base it on the puzzle left over.
    let rooms = this.getAllRooms;
    const keys = Object.keys(rooms[roomID]['order']);
    let count = 0;
    for (const key of keys){
      if(Object.keys(rooms[roomID]['current']).includes(key)){
         let progress = count / keys.length *100;
         rooms[roomID]['progress'] = Math.trunc(progress);
      }
      count++
    }
    this.updateRooms(rooms);
  }
}

module.exports = Room;

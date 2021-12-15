const fs = require("fs");
class Puzzle {

    /*
    TO DO:
    - Create POST for resetting device, though we can probably use the initialization function -> Should discuss
    */


    constructor(id, state) {
        this.id = id;
        this.state = state;
    }
    
    /**
     * Updates old json with new json file
     * @param {*} puzzles Json file with the puzzles
     */
    updatePuzzle(puzzles){ // TODO: Add error handling (?)
        fs.writeFileSync("./data/puzzles.json", JSON.stringify(puzzles, null, "  "));
    }
    /**
     * Returns all info about puzzles 
     */
    get getAllpuzzles() {
        return JSON.parse(fs.readFileSync("./data/puzzles.json"));
    }
    /**
     * Finds puzzle in room, if it doesnt exist return empty
     * @param {*} puzzleIP The ip of the puzzle
     */
    findPuzzle(puzzleIP){
        const puzzles = this.getAllpuzzles;
        if(!puzzles[puzzleIP]){
            return null
        }
        return puzzleIP;
    }
    /**
     * Insert all given codes from Blockly
     * 
     * @param {*} Codes The json given with all given codes
     */
    insertAnwser(Codes){
        const puzzles = this.getAllpuzzles;
        for(let indexKey in Codes){
            puzzles[indexKey]['code'] = Codes[indexKey]; 
        }
        this.updatePuzzle(puzzles)
    }
    /**
     * Sets all puzzle status to 0 from a specific  room
     * 
     * @param {*} rooms To get all the puzzle from room
     * @param {*} roomID To known in which room we are working in
     */
    puzzleReset(rooms,roomID){
        const puzzles = this.getAllpuzzles;
        for(const puzzle of rooms[roomID]['puzzles']){
            puzzles[puzzle]["status"] = 0
        }
        this.updatePuzzle(puzzles)
    }

    getId() {
        return this.id;
    }

    getState() {
        return this.state;
    }
}

module.exports = Puzzle;
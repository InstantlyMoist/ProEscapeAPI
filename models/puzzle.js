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
     * @param {Json file with the puzzles} puzzles 
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
     * @param {Json file with inf about puzzle} puzzles 
     * @param {The ip of the puzzle} puzzleIp 
     */
    findPuzzle(puzzles, puzzleIp){
        puzzleIp = puzzles.find((element) => element == puzzleIp);
        return puzzleIp;
    }

    getId() {
        return this.id;
    }

    getState() {
        return this.state;
    }
}

module.exports = Puzzle;
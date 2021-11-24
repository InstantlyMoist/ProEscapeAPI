class Puzzle {

    // Puzzle consist of:
    //
    // ID (int)
    // State (boolean)

    // TO DO 
    // IP save from puzzle (In the json?) 
    // POST initialisatie
    // SET STATE / RESET


    constructor(id, state) {
        this.id = id;
        this.state = state;
    }

    addpuzzle(puzzle){
        fs.writeFileSync("./data/data.json", JSON.stringify(puzzle, null, ""));
    }
    
    getId() {
        return this.id;
    }

    getState() {
        return this.state;
    }
}

module.exports = Puzzle;
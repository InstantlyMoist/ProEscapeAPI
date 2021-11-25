class Puzzle {

    /*
    TODO for puzzles:
    - Create puzzles.json

    Central storage of the puzzles reduces complexity of the overall application and opens up for easier API access

    - We can safely assume that the IP address of the puzzle will be entered within the puzzle create POST request.
      Which means we also need to send a POST request to the Arduino with that IP adress.
      This POST request should contain:
        - Central hub IP (So data can be sent back)
        - Answer code (The general answer to the puzzle, opens up for randomization within the escape room)

    - Create POST request for changing puzzle state (ENABLED/DISABLED) (?) -> Consider making puzzle responsible for this
    - Create POST for resetting device, though we can probably use the initialization function -> Should discuss
    */

    // Puzzle consist of:
    // ID (int) -> Change to UUID
    // State (boolean) -> Could load dynamically

    // TO DO 
    // IP save from puzzle (In the json?) 
    // POST initialisatie
    // SET STATE / RESET


    constructor(id, state) {
        this.id = id;
        this.state = state;
    }

    addpuzzle(puzzle){ // TOOD: Add error handling (?)
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
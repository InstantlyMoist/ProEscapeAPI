class Puzzle {

    // Puzzle consist of:
    //
    // ID (int)
    // State (boolean)

    constructor(id, state) {
        this.id = id;
        this.state = state;
    }
    
    getId() {
        return this.id;
    }

    getState() {
        return this.state;
    }
}

module.exports = Puzzle;
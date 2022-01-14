const express = require("express");
const api = express();

var bodyParser = require("body-parser");

const cors = require('cors');


api.use(cors({origin: '*'}));
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json()); // Globally parses the body as JSON

const port = 3000; // TODO: Switch to HTTP/HTTPS port to run protected requests (infra)

api.use("/api/rooms", require("./routes/rooms/rooms"));
api.use("/api/puzzles", require("./routes/puzzles/puzzles"));


api.use("/api/room", require("./routes/room/room"));
api.use("/api/room/puzzle", require("./routes/room/puzzle/puzzle"));
api.use("/api/room/camera", require("./routes/room/camera/camera"));
api.use("/api/puzzle/start", require("./routes/room/puzzle/start"));

api.use("/api/puzzleAwnser", require("./routes/puzzle/puzzleAnswer"));
api.use("/api/puzzle/complete", require("./routes/room/puzzle/complete"));
api.use("/api/puzzle/blockly", require("./routes/room/puzzle/puzzleBlockly"));

api.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`)
});

const express = require("express");
const api = express();

var bodyParser = require("body-parser");

api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json()); // Globally parses the body as JSON

const port = 3000; // TODO: Switch to HTTP/HTTPS port to run protected requests (infra)

api.use("/api/rooms", require("./routes/rooms/rooms"));
api.use("/api/room", require("./routes/room/room"));
api.use("/api/room/puzzle", require("./routes/room/puzzle"));
api.use("/api/room/roomStatus", require("./routes/room/roomStatus"));
api.use("/api/room/camera", require("./routes/room/camera"));
api.use("/api/room/camera", require("./routes/room/camera"));

api.use("/api/puzzleAwnser", require("./routes/puzzle/puzzleAwnser"));
api.use("/api/puzzleStatus", require("./routes/puzzle/puzzleStatus"));

api.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`)
});

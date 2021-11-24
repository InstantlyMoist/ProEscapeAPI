const express = require("express");
const api = express();

var bodyParser = require("body-parser");

api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json()); // Globally parses the body as JSON

const port = 3000; // TODO: Switch to HTTP/HTTPS port to run protected requests (infra)

api.use("/api/rooms", require("./routes/rooms/rooms"));
api.use("/api/room", require("./routes/room/room"));
api.use("/api/room/puzzle", require("./routes/room/puzzle"));

api.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`)
});

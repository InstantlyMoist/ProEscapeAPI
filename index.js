const express = require("express");
const api = express();



const port = 3000;

api.use("/api/rooms", require("./routes/get_all_rooms"));
api.use("/api/room", require("./routes/room/room"));
api.use("/api/room/addpuzzle", require("./routes/room/add_puzzle")); //todo

api.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`)
});

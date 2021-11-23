const express = require("express");
const api = express.Router();
const fs = require("fs");

api.post("/", (req, res) => { // /api/room/addpuzzle
  res.send(200);
  // TODO: Check if room exists
  // Check if puzzle exists
  // Add puzzle to room (ID Only)
});

module.exports = api;

const express = require("express");
const userrouter = express.Router();

userrouter.get("/", (req, resp) => {
  resp.render("google_play");
});

module.exports = userrouter;

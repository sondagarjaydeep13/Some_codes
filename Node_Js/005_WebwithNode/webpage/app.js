const express = require("express");
const app = express();
const port = 9000;
const path = require("path");
app.listen(port, () => {
  console.log("Portnumber" + " " + port + " " + "Running");
});

app.get("/app", (req, resp) => {
  resp.sendFile(path.join(__dirname, "app.html"));
});
app.get("/home", (req, resp) => {
  resp.sendFile(path.join(__dirname, "app.html"));
});
app.get("/about", (req, resp) => {
  resp.sendFile(path.join(__dirname, "about.html"));
});

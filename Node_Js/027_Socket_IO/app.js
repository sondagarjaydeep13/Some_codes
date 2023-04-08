const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const path = require("path");
const hbs = require("hbs");
const http = require("http").createServer(app);
const viewpath = path.join(__dirname, "./templates/view");
const publicpath = path.join(__dirname, "./public");
app.set("view engine", "hbs");
app.set("views", viewpath);
app.use(express.static(publicpath));
http.listen(port, () => {
  console.log("server running on port :" + port);
});

app.get("/", (req, res) => {
  res.render("index");
});
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("connected");

  socket.on("message", (msg) => {
    socket.broadcast.emit("message", msg);
  });
});

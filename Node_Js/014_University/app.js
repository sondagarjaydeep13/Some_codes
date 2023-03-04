const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 9000;
const studentrouter = require("./router/student_router");
app.use(express.json());
const dburl =
  "mongodb+srv://sondagarjaydeep13:Jaydeep123@cluster0.jvvwc8q.mongodb.net/University?retryWrites=true&w=majority";
app.listen(port, () => {
  console.log("Port " + " " + port + " " + "Running");
});
mongoose
  .connect(dburl)
  .then((result) => {
    console.log("University Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/", studentrouter);

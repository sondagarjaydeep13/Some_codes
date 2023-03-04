const express = require("express");
const app = express();
const port = 9000;
const bcrypt = require("bcryptjs");

app.listen(port, () => {
  console.log("Port " + " " + port + " " + " Running");
});

// connect to database
const mongoose = require("mongoose");
const DBurl = "mongodb://127.0.0.1:27017/Colors";
const database = "Colors";

app.use(express.json());

mongoose
  .connect(DBurl)
  .then((result) => {
    console.log("database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const user = new mongoose.Schema({
  Name: {
    type: String,
  },
  MobileNr: {
    type: Number,
  },
  Address: {
    type: String,
  },
  Pass: {
    type: String,
  },
});
user.pre("save", async function () {
  this.Pass = await bcrypt.hash(this.Pass, 10);
  //   console.log(password);
});

const User = new mongoose.model("User", user);

app.post("/user", (req, resp) => {
  const user = new User(req.body);

  user
    .save()
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/user", (req, resp) => {
  User.find()
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/user/:id", (req, resp) => {
  const _id = req.params.id;

  User.findById(_id)
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      resp.send(err);
    });
});

app.post("/user", (req, resp) => {
  const user = new User(req.body);
  user
    .save()
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      resp.send(err);
    });
});

app.put("/user/:id", (req, resp) => {
  const _id = req.params.id;
  User.findByIdAndUpdate(_id, req.body)
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      resp.send(result);
    });
});
app.delete("/user/:id", (req, resp) => {
  const _id = req.params.id;
  User.findByIdAndDelete(_id)
    .then((result) => {
      resp.send(result);
    })
    .catch((err) => {
      resp.send(result);
    });
});
app.post("/userlogin", async (req, resp) => {
  try {
    const Name = req.body.Name;
    const Pass = req.body.Pass;
    const userdata = await User.findOne({ Name:Name });
    const valide = await bcrypt.compare(Pass, userdata.Pass);
    if (valide) {
      resp.send("Welcome" + " " + userdata.Name);
    } else {
      resp.send("Data Not Found");
    }
  
  } catch (error) {
    resp.send("404 Not Found");
  }
  
});

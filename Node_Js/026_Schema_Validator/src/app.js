const mongoose = require("mongoose");
const validator = require("validator");
const dburl = "mongodb://127.0.0.1:27017/04_04_database";

mongoose
  .connect(dburl)
  .then((result) => {
    console.log("04_04_database connected");
  })
  .catch((error) => {
    console.log(error);
  });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    validate(value) {
      if (!validator.isAlpha(value)) {
        throw new error("Invalide username");
      }
    },
  },

  Email: {
    type: String,
    require: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new error("Invalide email");
      }
    },
  },
  Password: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("User", userSchema);

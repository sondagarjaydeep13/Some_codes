const mongoose = require("mongoose");

const User = require("../src/app");

//--------------------Insert One Data-------------------------------//
const insert = () => {
  const user = new User({
    username: "Vivekbhai123",
    email: "vivekbhaigmail.com",
    password: "vivek@123",
  });

  user
    .save()
    .then((result) => {
      console.log("Data insert success:" + result);
    })
    .catch((error) => {
      console.log(error);
    });
};

//-------------------------Insert many data-------------------------------------//

const insertMany = () => {
  const user1 = {
    username: "Kamal",
    email: "kamal@gmail.com",
    password: "kamal@123",
  };
  const user2 = {
    username: "Magam",
    email: "magan@gmail.com",
    password: "magan@123",
  };
  User.insertMany([user1, user2])

    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

//----------------------------------- Find all data------------------------------//

const finddata = () => {
  User.find()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

// ----------------------------User find by name--------------------------//

const userbyid = (id) => {
  User.find({ _id: id })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
//--------------------------- Update user data using id----------------------------//

const updatebyid = () => {
  User.findByIdAndUpdate(
    { _id: "642bff5e3910afde601f9071" },
    { username: "Kamalbhai" }
  )
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

//--------------------------------- Delete user---------------------------//

const deletebyid = (id) => {
  User.findByIdAndDelete({ _id: id })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

// deletebyid("642bff5e3910afde601f9071");
// updatebyid();
// userbyid("642bff5e3910afde601f9071");
// insert();
// insertMany();
// finddata();

const express = require("express");
const cors = require("cors");

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = "./public";
server.use(express.static(staticServerPath));

// users

const users = []; // fake users data base

// api endpoints

server.post("/user", (req, res) => {
  console.log("Body params:", req.body);
  console.log("Body param userName:", req.body.userName);
  console.log("Body param userEmail:", req.body.userEmail);

  // add new user to daba base
  users.push({
    name: req.body.userName,
    email: req.body.userEmail,
  });

  res.json({
    result: "User created",
  });
});

server.post("/users", (req, res) => {
  const filteredName = req.body.filterByName;
  const filteredEmail = req.body.filterByEmail;
  const filteredUser = users
    .filter((user) =>
      user.name.toLowerCase().includes(filteredName.toLowerCase())
    )
    .filter((user) =>
      user.email.toLowerCase().includes(filteredEmail.toLowerCase())
    );

  res.json({
    result: filteredUser,
  });
});

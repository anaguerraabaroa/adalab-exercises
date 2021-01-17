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
const filteredUsers = [];

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
  const filteredNames = req.body.filterByName;
  for (let i = 0; i < users.length; i++) {
    if (users[i].name.includes(filteredNames)) {
      filteredUsers.push(filteredNames);
    }
  }
  res.json({
    result: filteredUsers,
  });
});

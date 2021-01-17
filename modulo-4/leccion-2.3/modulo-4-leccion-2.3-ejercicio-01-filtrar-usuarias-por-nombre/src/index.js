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
  console.log("Query params:", req.query);
  console.log("Query param userName:", req.query.userName);
  console.log("Query param userEmail:", req.query.userEmail);
  console.log("Query param filterName:", req.query.filterName);

  // add new user to daba base
  users.push({
    name: req.query.userName,
    email: req.query.userEmail,
  });
  res.json({
    result: "User created",
  });
});

server.get("/users", (req, res) => {
  const filteredNames = req.query.filterName;
  for (let i = 0; i < users.length; i++) {
    if (users[i].name.includes(filteredNames)) {
      filteredUsers.push(filteredNames);
    } else {
      filteredUsers;
    }
  }
  res.json({
    result: filteredUsers,
  });
});

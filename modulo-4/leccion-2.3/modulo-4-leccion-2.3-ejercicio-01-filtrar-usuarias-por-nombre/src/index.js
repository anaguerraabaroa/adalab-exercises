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

// fake data base
const users = [];

// api endpoints

server.post("/user", (req, res) => {
  console.log("Query params:", req.query);
  console.log("Query param userName:", req.query.userName);
  console.log("Query param userEmail:", req.query.userEmail);

  // add new user to daba base
  users.push({
    name: req.query.userName,
    email: req.query.userEmail,
  });
  res.json({
    result: "User created",
  });
});

// get user by name from data base
server.get("/users", (req, res) => {
  const filteredNames = req.query.filterByName;
  const filteredUser = users.find((user) => user.name === filteredNames);
  res.json({
    result: filteredUser,
  });
});

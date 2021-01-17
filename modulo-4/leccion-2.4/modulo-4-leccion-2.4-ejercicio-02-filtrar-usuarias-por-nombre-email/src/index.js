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
  const name = req.body.filterByName;
  const email = req.body.filterByEmail;
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].name.toUpperCase().includes(name.toUpperCase()) &&
      users[i].email.toUpperCase().includes(email.toUpperCase())
    ) {
      filteredUsers.push({
        name: users[i].name,
        email: users[i].email,
      });
    }
  }
  res.json({
    result: filteredUsers,
  });
});

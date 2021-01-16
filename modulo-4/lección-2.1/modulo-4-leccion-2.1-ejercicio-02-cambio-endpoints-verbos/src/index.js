const express = require("express");
const cors = require("cors");

// create server
const server = express();

// set express middleware
//   we must always put these lines, until we know what they do
//   more info: https://expressjs.com/es/guide/using-middleware.html
server.use(cors());
server.use(express.json());

// init express aplication
// if we change por from 3000 to 3500 we have to change it on fetch functions on main.js file as well
const serverPort = 3500;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// STATIC SERVER: listen files in public folder
const staticServerPath = "./public"; // relative to the root of the project
server.use(express.static(staticServerPath));

// API: listen fetch requests

// origiinal API request > GET > http://localhost:3000/users
// if we transform it into a POST request, we have to transform fetch function on main.js file as well
server.post("/users", (req, res) => {
  const response = {
    users: [{ name: "Sofía" }, { name: "María" }],
  };
  res.json(response);
});

// original API request > POST > http://localhost:3000/users/add
// if we change new-user route to users/add, we have to change it on fetch function on main.js file as well
server.post("/users/add", (req, res) => {
  // console request body params
  console.log(
    `Creating the user in database with user name: "${req.body.userName}"`
  );
  const response = {
    result: `User created: ${req.body.userName}`,
  };
  res.json(response);
});

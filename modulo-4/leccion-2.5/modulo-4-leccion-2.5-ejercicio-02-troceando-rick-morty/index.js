const express = require("express");
const cors = require("cors");
const users = require("./data.json");

// create app server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

app.get("/users/:userId", (req, res) => {
  console.log("Url params:", req.params);
  console.log("Url param userId:", req.params.userId);

  const user = users.find((user) => user.id === parseInt(req.params.userId));
  console.log("Found user:", user);

  if (user === undefined) {
    res.json({ error: "user-not-found" });
  } else {
    res.json(user);
  }
});

// To review
// app.get("/users/:userId/:episodes", (req, res) => {
//   console.log("Url params:", req.params);
//   console.log("Url param userId:", req.params.userId);
//   console.log("Url param episodes:", req.params.episodes);

//   const user = users.find((user) => user.id === parseInt(req.params.userId));
//   console.log("Found user:", user);

//   const episodes = users.find(
//     (user) => user.episode.length === req.params.episode
//   );
//   console.log("Found episodes:", episodes);

//   if (user === undefined || episodes === undefined) {
//     res.json({ error: "not-found" });
//   } else {
//     res.json(episodes);
//   }
// });

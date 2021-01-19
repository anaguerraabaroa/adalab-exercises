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

// get user function
app.get("/users/:userId", (req, res) => {
  console.log("Url params:", req.params);
  console.log("Url param userId:", req.params.userId);

  // get user by id
  const user = users.find((user) => user.id === parseInt(req.params.userId));
  console.log("Found user:", user);

  // response with selected data or error
  if (user === undefined) {
    res.json({ error: "user-not-found" });
  } else {
    res.json(user);
  }
});

// get user and number of episodes function
app.get("/users/:userId/:episodes", (req, res) => {
  console.log("Url params:", req.params);
  console.log("Url param userId:", req.params.userId);
  console.log("Url param episodes:", req.params.episodes.length);

  // get user by id
  const user = users.find((user) => user.id === parseInt(req.params.userId));
  console.log("Found user:", user);

  // get number of episodes by user
  const episodes = users.find(
    (user) => user.episode.length === req.params.episodes.length
  );
  console.log("Found episodes:", episodes);

  // response with selected data or error
  if (user === undefined) {
    res.json({ error: "user-not-found" });
  } else if (episodes === undefined) {
    res.json({ error: "episodes-not-found" });
  } else {
    res.json({
      user: user,
      episodesNumber: user.episode.length,
    });
  }
});

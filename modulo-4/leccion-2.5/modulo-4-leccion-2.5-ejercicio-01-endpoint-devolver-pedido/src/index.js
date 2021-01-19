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

app.get("/users/:userId/orders/:orderId", (req, res) => {
  console.log("Url params:", req.params);
  console.log("Url param userId:", req.params.userId);
  console.log("Url params orderId", req.params.orderId);

  // find user by userId
  const user = users.find(
    (user) => user.userId === parseInt(req.params.userId)
  );
  console.log("Found user:", user);

  // find order by orderId
  const order = users.find(
    (user) => user.orderId === parseInt(req.params.orderId)
  );
  console.log("Found order:", order);

  // response with selected user data or error
  if (user === undefined) {
    res.json({ error: "user-not-found" });
  } else if (order === undefined) {
    res.json({ error: "order-not-found" });
  } else {
    res.json(user);
  }
});

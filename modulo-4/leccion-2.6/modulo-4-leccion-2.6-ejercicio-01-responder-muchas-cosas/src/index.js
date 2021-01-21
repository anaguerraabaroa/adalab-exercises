const express = require("express");
const cors = require("cors");

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// create app server
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// response-a: JSON response
app.get("/response-a", (req, res) => {
  res.json({ result: "ok" });
});

// response-b: HTML response
app.get("/response-b", (req, res) => {
  const htmlCode = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Express Response Types</title>
      <link rel="stylesheet" href="http://beta.adalab.es/resources/stylesheets/all.css" >
    </head>
    <body class="page">
      <header>
        <h1>Express: Esta es una página de prueba</h1>
      </header>
    </body>
  </html>`;
  res.send(htmlCode);
});

// response-c: redirect response
app.get("/response-c", (req, res) => {
  const getrandomNumber = (max) => Math.ceil(Math.random() * max);
  const randomNumber = getrandomNumber(10);
  if (randomNumber > 0 && randomNumber <= 10) {
    if (randomNumber % 2 === 0) {
      res.redirect("https://www.youtube.com");
    } else {
      res.redirect("https://www.instagram.com");
    }
  }
});

// response-d: query params JSON response
app.get("/user", (req, res) => {
  const userParams = {
    user: req.query.user,
  };
  console.log("userParams", userParams);

  if (userParams.user === "1" || userParams.user === "2") {
    res.status(200);
    res.json({
      result: "ok",
    });
  } else {
    res.status(404);
    res.json({
      result: "error: invalid query param",
    });
  }
});

const express = require("express");

const PORT = 3000;
const HOST = "0.0.0.0";

const app = express();

app.get("/", (req, res) => {
  console.log("Received request for URL: " + req.url);
  return res.send("Hello World batata");
});

app.listen(PORT, HOST);

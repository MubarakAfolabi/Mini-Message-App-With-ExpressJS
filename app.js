const express = require("express");
const path = require("node:path");
const app = express();

app.set("views", path.join(__dirname), "views");
app.set("view engine", "ejs");

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on Port ${PORT}`);
});

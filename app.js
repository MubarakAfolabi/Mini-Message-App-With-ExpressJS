const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/index.js");
const formRouter = require("./routes/form.js");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", formRouter);

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on Port ${PORT}`);
});

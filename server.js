const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

const catsRouter = require("./routes/cats");
const dogsRouter = require("./routes/dogs");
const birdsRouter = require("./routes/birds");

app.use("/cats", catsRouter);
app.use("/dogs", dogsRouter);
app.use("/birds", birdsRouter);

app.listen(port, () => {
  console.log("listening on port", port);
});

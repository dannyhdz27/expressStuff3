const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("watup brudda");
});

const catsRouter = require("./routes/cats");

app.use("/cats", catsRouter);

app.listen(port, () => {
  console.log("listening on port", port);
});

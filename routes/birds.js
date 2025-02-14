const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("here are the birds! which bird would you like?");
});

router.get("/parrot", (req, res) => {
  res.send("take the parrot!");
});

router.get("/chickadee", (req, res) => {
  res.send("take the chickadee!");
});

router.get("/tucan", (req, res) => {
  res.send("take the tucan!");
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("here are the dogs! which dog would you like?");
});

router.get("/husky", (req, res) => {
  res.send("take the husky!!");
});

router.get("/germanshepherd", (req, res) => {
  res.send("take the german shepherd!");
});

module.exports = router;

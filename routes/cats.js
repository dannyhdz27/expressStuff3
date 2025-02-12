const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("here are the cats! which cat would you like?");
});

router.get("/tabby", (req, res) => {
  res.send("take the tabby cat!");
});

router.get("/tuxedo", (req, res) => {
  res.send("take the tuxedo cat!");
});

module.exports = router;

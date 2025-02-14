const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("cats");
});

router.get("/tabby", (req, res) => {
  res.send("take the tabby cat!");
});

router.get("/tuxedo", (req, res) => {
  res.render("tuxedoCat");
});

module.exports = router;

var db = require("../models");
var path = require("path");
var express = require("express");
var router = express.Router();
var Salon = require("../models/salon");

router.get("/", function(req, res) {
  res.render(
    "index"
    //add object here
    //, { title: "blah" }
  );
});

module.exports = router;

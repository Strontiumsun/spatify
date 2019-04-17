var db = require("../models");
var path = require("path");
var express = require("express");
var router = express.Router();
var Salon = require("../models/salon");

router.get("/", function(req, res) {
  res.render(
    "index"
  );
});
//email script test========================
//var script = [{ script: "../email.js" }];
//email script test========================

router.get("/form", function(req, res) {
  res.render("form");
});

router.get("/services", function(req, res) {
  res.render("services");
});

router.get("/deals", function(req, res) {
  res.render("deals");
});

module.exports = router;

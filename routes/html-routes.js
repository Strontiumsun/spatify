var db = require("../models");
var path = require("path");
var express = require("express");
var router = express.Router();
var Salon = require("../models/salon");

router.get("/", function (req, res) {
  res.render(
    "index"
    //add object here
    //, { title: "blah" }
  );
});
//email script test========================
//var script = [{ script: "../email.js" }];
//email script test========================

<<<<<<< HEAD
router.get("/form", function (req, res) {
  res.render(
    "form"
    //add object here
    //, { title: "blah" }
  );
=======
router.get("/form", function(req, res) {
  db.Salon.findAll().then(function(data) {
    res.render("form", { data: data });
  });
>>>>>>> master
});

router.get("/services", function (req, res) {
  res.render("services")
});



module.exports = router;

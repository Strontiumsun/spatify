var db = require("../models");
var Salon = require("../models/salon");
const nodemailer = require("nodemailer");
var exphbs = require("express-handlebars");
var hbs = require("nodemailer-express-handlebars");
var later = require("later");
var moment = require("moment");
moment().format();

module.exports = function(app) {
  // this gets us all our salon data
  app.get("/api/salons", function(req, res) {
    db.Salon.findAll().then(function(data) {
      console.log(data);
      res.json(data);
    });
  });

  // this gets us all our user data. Works, but without data so nothing will appear
  app.get("/api/reservations", function(req, res) {
    db.User.findAll().then(function(data) {
      res.json(data);
    });
  });

  // this route gets all the salons that provide the chosen service
  app.get("/api/salons/services/:services", function(req, res) {
    db.Salon.findAll().then(function(data) {
      var serve;
      var server = [];
      // console.log(data);
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].services);
        serve = data[i].services.toLowerCase();
        serve = serve.split(", ");
        console.log(serve);

        console.log(req.params.services);
        if (serve.includes(req.params.services)) {
          server.push(data[i]);
        }
      }

      res.json(server);
    });
  });

  // this route takes in the chosen salon and creates intervals for that service
  // those intervals are pushed to the front end
  app.get("/api/salons/services/:services/:salonID", function(req, res) {
    var service = req.params.services;
    var salonID = req.params.salonID;
    var foundSalon;
    var timeArr = [];
    console.log(service, salonID);
    db.Salon.findAll({
      where: {
        id: salonID
      }
    }).then(function(data) {
      foundSalon = data[0];

      db.Service.findAll({
        where: {
          serviceType: service
        }
      }).then(function(data) {
        var openTime = foundSalon.dataValues.opens;
        var closeTime = foundSalon.dataValues.closes;

        var interval = data[0].dataValues.s_interval;

        console.log(openTime, closeTime);
        console.log(interval);

        function laterIntervals(interval, dstart, dend) {
          var sched = later.schedule(
            later.parse
              .recur()
              .every(interval)
              .minute()
          );
          start = new Date(`2019-05-22T${dstart}Z`);
          end = new Date(`2019-05-22T${dend}Z`);

          var next = sched.next(35, start, end);
          // as long as the number here is sufficiently large, the program will run until it reaches the end time

          for (var i = 0; i < next.length; i++) {
            var splitter = next[i].toUTCString().split(" ");

            timeArr.push(splitter[4]);
          }
          console.log(timeArr);
        }
        laterIntervals(interval, openTime, closeTime);
        res.json({ times: timeArr });
      });
    });
  });

  // this route will let us save user data to the database
  app.post("/api/reservations", function(req, res) {
    console.log(req.body);
    // here we'll create a new object with the data from the front end
    // this route can't be completed without frontend js
  });

  app.get("/email", function(req, res) {
    console.log("email");
    async function main() {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        //host: "smtp.ethereal.email",
        // port: 587,
        // secure: false,
        auth: {
          user: "spatifyTest123@gmail.com",
          pass: "Root123!"
        }
      });

      var mailOptions = {
        from: "spatifyTest123@gmail.com",
        to: "mcampbell0918@gmail.com",
        subject: "Test",
        text: "testing testing",
        html: "<b>testing</b>"
      };

      //let info = await
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) throw err;
        else {
          console.log(info);
        }
      });
      //console.log("Preview URL: " + nodemailer.getTestMessageUrl(info));
    }
    main().catch(console.error);
  });
};

var db = require("../models");
var Salon = require("../models/salon");
const nodemailer = require("nodemailer");
var exphbs = require("express-handlebars");
var hbs = require("nodemailer-express-handlebars");

module.exports = function(app) {
  // this gets us all our salon data. Works
  app.get("/api/salons", function(req, res) {
    db.Salon.findAll().then(function(data) {
      res.json(data);
    });
  });

  // this gets us all our user data. Works, but without data so nothing will appear
  app.get("/api/reservations", function(req, res) {
    db.User.findAll().then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/salons/services/:services", function(req, res) {
    db.Salon.findAll().then(function(data) {
      var serve;
      var server = [];
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i].services)

        serve = data[i].services.toLowerCase();
        // https://stackoverflow.com/questions/16253742/return-all-values-from-array-in-lowercase-using-for-loop-instead-of-map
        // console.log(serve);
        serve = serve.split(", ");
        console.log(serve);
        // save each string in an array with split
        // loop through each new array and check for the term
        console.log(req.params.services);
        if (serve.includes(req.params.services)) {
          server.push(data[i]);
          // console.log(server)
        }
      }

      res.json(server);
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
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: "peter.keeling@ethereal.email",
          pass: "tkEwbH5sjGzXjUmbTF"
        }
      });

      let info = await transporter.sendMail({
        from: "mcampbell0918@gmail.com",
        to: "mcampbell0918@gmail.com",
        subject: "Test",
        text: "testing testing",
        html: "<b>testing</b>"
      });
      console.log("Preview URL: " + nodemailer.getTestMessageUrl(info));
    }
    main().catch(console.error);
  });
};

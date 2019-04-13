var db = require("../models");
var later = require('later');
var moment = require('moment');
moment().format();

// var Salon = require("../models/salon");

module.exports = function (app) {

  // this gets us all our salon data. Works
  app.get("/api/salons", function (req, res) {
    db.Salon.findAll().then(function (data) {
      console.log(data)
      res.json(data)
    })
  })

  // this gets us all our user data. Works, but without data so nothing will appear
  app.get("/api/reservations", function (req, res) {
    db.User.findAll().then(function (data) {
      res.json(data)
    })
  })

  app.get("/api/salons/services/:services", function (req, res) {
    db.Salon.findAll().then(function (data) {
      var serve;
      var server = [];
      // console.log(data);
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].services)

        serve = data[i].services.toLowerCase();
        // https://stackoverflow.com/questions/16253742/return-all-values-from-array-in-lowercase-using-for-loop-instead-of-map
        // console.log(serve);
        serve = serve.split(", ")
        console.log(serve)
        // save each string in an array with split
        // loop through each new array and check for the term
        console.log(req.params.services)
        if (serve.includes(req.params.services)) {
          server.push(data[i])

          // console.log(server)
        }
      }
      db.Service.findAll({
        where: {
          serviceType: req.params.services
        }
      }).then(function (data) {
        // console.log(data[0].dataValues.s_interval);
        // console.log(server[0].dataValues.opens, server[0].dataValues.closes)
        var openTime = server[0].dataValues.opens;
        var closeTime = server[0].dataValues.closes;
        var interval = data[0].dataValues.s_interval;
        console.log(openTime, closeTime)
        console.log(interval)

        // function bigInterval(interval) {
        //   var sched = later.schedule(later.parse.recur().on(interval).minute()),
        //     start = new Date('2013-05-22T10:00:00Z');
        //   end = new Date('2013-05-22T18:00:00Z')
        //   console.log(sched.next(10, start, end))
        // }
        // bigInterval(90)

        function laterIntervals(interval, dstart, dend) {



          var trial = {
            schedules: [
              { m: [0, interval] }
            ]
          }
          var sched = later.schedule(trial);


          // var sched = later.schedule(later.parse.recur().on(interval).minute());
          start = new Date(`2019-05-22T${dstart}Z`);
          end = new Date(`2019-05-22T${dend}Z`)
          // console.log(start, end);
          console.log(sched.next(35, start, end))
          // as long as the number here is sufficiently large, the program will run until it reaches the end time

        }
        laterIntervals(interval, openTime, closeTime);

        // function createIntervals(from, until, inter) {

        //   var time = new Date(from);
        //   var max = (Math.abs(until-from) / inter);
        //   var intervals = [];

        //   for (var i = 0; i <= max; i++) {
        //     intervals.push(time);
        //     var 
        //   }
        // }

        // if store open 10 and close at 12, then there are 4 total intervals
        // loop must run 4 times
        // 

        // var openTest = 10;
        // var closeTest = 17;

        // function timeRange(open, close, int) {
        //   var range = parseFloat(close) - parseFloat(open);
        //   console.log(range)

        //   var timeNum = range / int;
        //   console.log(timeNum)
        // }
        // console.log(timeRange(openTest, closeTest, interval))

        // for (var j = 0; j < closeTime; j++) {
        // function addMinutes(time, minsToAdd, close) {
        //   function D(J) { return (J < 10 ? '0' : '') + J };

        //   var piece = time.split(':');

        //   var mins = piece[0] * 60 + +piece[1] + +minsToAdd;

        //   // --- the problem area ---
        //   if (i > 10) {
        //     console.log("stopped")

        //   }
        //   else {
        //     addMinutes(openTime, interval, closeTime);
        //     i++;
        //     return D(mins % (24 * 60) / 60 | 0) + ':' + D(mins % 60);
        //   }
        //   // -------------------------
        // }
        // console.log(addMinutes(openTime, interval, closeTime));
        // }


        // '18:35'
        // console.log(moment(openTime).format("HH"));
      })

      res.json(server)
    })
  })

  // this route will let us save user data to the database
  app.post("/api/reservations", function (req, res) {
    console.log(req.body);
    // here we'll create a new object with the data from the front end
    // this route can't be completed without frontend js
  })

}



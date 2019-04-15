var db = require("../models");
var later = require('later');
var moment = require('moment');
moment().format();

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

        var openTime = server[0].dataValues.opens;
        var closeTime = server[0].dataValues.closes;

        var interval = data[0].dataValues.s_interval;

        console.log(openTime, closeTime)
        console.log(interval)

        // this function calculates intervals from the start to the end of the day for that salon
        function laterIntervals(interval, dstart, dend) {

          var sched = later.schedule(later.parse.recur().every(interval).minute());
          start = new Date(`2019-05-22T${dstart}Z`);
          end = new Date(`2019-05-22T${dend}Z`)

          var next = sched.next(35, start, end)
          // as long as the number here is sufficiently large, the program will run until it reaches the end time

          // console.log(next[0].toUTCString())

          for (var i = 0; i < next.length; i++) {
            var splitter = next[i].toUTCString().split(" ");
            console.log(splitter[4])
          }


        }
        laterIntervals(interval, openTime, closeTime);

        // everything below here is stuff I tried either with npms or with basic js
        // ---------------------------

        // function makeSchedule(taskId, interval, salonName, openTime, closeTime) {
        //   var tasks = [{ id: taskId, duration: interval }]


        //   var resources = [{ id: salonName, available: later.parse.text(`after ${openTime} and before ${closeTime}`) }];
        //   // console.log(tasks, resources)
        //   var data = schedule.create(tasks, resources, later.parse.text(`every ${interval} minutes`), new Date())
        //   console.log(data)

        // }
        // makeSchedule(taskId, interval, salonName, openTime, closeTime)

        // function newTech(interval, openTime, closeTime) {
        //   import { Scheduler } from '@ssense/sscheduler';
        //   const scheduler = new Scheduler();
        //   const availability = scheduler.getAvailability({
        //     from: '2017-02-01',
        //     to: '2017-03-01',
        //     duration: interval,
        //     interval: interval,
        //     schedule: {
        //       weekdays: {
        //         from: openTime, to: closeTime
        //       }
        //     }
        //   })

        //   console.log(availability)

        // }
        // newTech(interval, openTime, closeTime)



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



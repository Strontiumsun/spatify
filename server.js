//Dependencies
//===========================================
var express = require("express");

//Set up Express app
//===========================================
var app = express();
var PORT = process.env.PORT || 8080;

//Require models folder for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up handlebars to render HTML pages
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

//Routes
require("PATH TO ROUTES");

//app.listen always goes at the end of your code

//replace app.listen with code below when database is set up
// db.sequelize.sync().then(function () {
//     app.listen(PORT, function () {
//         console.log("App listening on PORT:" + PORT);
//     });


db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT:" + PORT)
    })
});


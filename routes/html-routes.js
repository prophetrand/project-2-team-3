var path = require("path");
var models = require("../models");
var User = models.User;

var isAuthenticated = require("../config/middleware/isAuthenticated");
// var usersObj = [];
module.exports = function(app) {

    app.get("/", function(req, res) {
        // Welcome page and login function.
        res.render("login");
    });

    app.get("/profile/user/:id", isAuthenticated, function(req, res) {

    });

    app.get("/signup", function(req, res) {
        res.render("signup");
    });

    app.get("/matches", isAuthenticated, function(req, res) {

    });

    app.post("/api/user/find/results", function(req, res) {
        res.render("connections", req.body.data);
    });

    app.get("/connect", function (req, res) {
        // User.findAll({
        //     attributes: ['username', 'profPic', 'interests', 'bio']
        // }).then(data => {
        //     // For loop will push all current users onto an array
        //     for (var i=0; i < data.length; i++){
        //         usersObj.push(data[i].dataValues);
        //     }

        //     // Pass the array to res.render
            res.render("connect");
        // });
    });
}
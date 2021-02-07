var path = require("path");
var User = require("../models/user")

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

    app.get("/", function(req, res) {
        // Welcome page and login function.
    })

    app.get("/profile/user/:id", isAuthenticated, function(req, res) {

    });

    app.get("/signup", function(req, res) {

    });

    app.get("/matches", isAuthenticated, function(req, res) {

    });

    app.get("/connect", function(req, res) {
        User.all(function(data){
            var userObj = {
                user: data
            };
            console.log("HERE");
            res.render("connect", userObj);
        });
    });
}
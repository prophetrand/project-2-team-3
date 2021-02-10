var path = require("path");
var models = require("../models");
var User = models.User;

var isAuthenticated = require("../config/middleware/isAuthenticated");
// var usersObj = [];
module.exports = function(app) {

    app.get("/", function(req, res) {
        // Welcome page and login function.
        if (req.user) {
            res.redirect("/profile");
        }
        res.render("login");
    });

    app.get("/profile", function(req, res) {
        res.render("profile");
    });

    app.get("/signup", function(req, res) {
        res.render("signup");
    });

    app.get("/matches", function(req, res) {

    });

    app.post("/api/user/find/results", function(req, res) {
        res.render("connections", req.body.data);
    });

    app.get("/connect", function (req, res) {
        res.render("connect");
    });
}
// be sure to add back in "isAunthenticated" to routes that we want restricted.
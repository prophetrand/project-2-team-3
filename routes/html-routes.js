var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

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

    app.get("/connect", isAuthenticated, function(req, res) {

    });
}
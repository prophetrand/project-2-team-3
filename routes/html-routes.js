var path = require("path");

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

    app.get("/connect", isAuthenticated, function(req, res) {
        User.all(function(data){
            var userObj = {
                user: data
            };

            res.render("connect", userObj);
        });
    });
}
var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

    app.get("/", function(req, res) {
        // Welcome page and login function.
        res.render("login");
        // console.log(object);
        // res.render("login", object);
        // might not have to send any data... could send handlebars w/ no placeholders, could res.sendFile static HTML...
    });

    app.get("/profile/user/:id", isAuthenticated, function(req, res) {

    });

    app.get("/signup", function(req, res) {
        
        res.render("signup");
        // console.log(object);
        // res.render("signup", object);
    });

    app.get("/matches", isAuthenticated, function(req, res) {

    });

    app.get("/connect", isAuthenticated, function(req, res) {

    });
}
var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    app.get("/", function (req, res) {
        // Welcome page and login function.
        if (req.user) {
            res.redirect("/profile");
        }
        res.render("login");
    });

    app.get("/profile", function (req, res) {
        console.log(req.user.username);
        var data = {
            username: req.user.username,
            bio: req.user.bio,
            profPic: req.user.profPic
            // username: "usertest1",
            // bio: "it works woohoo"
        }
        res.render("profile", data)
    });

    app.get("/signup", function (req, res) {
        res.render("signup");
    });

    app.get("/matches", function (req, res) {

    });

    app.get("/connect", function (req, res) {

    });
}
// be sure to add back in "isAunthenticated" to routes that we want restricted.
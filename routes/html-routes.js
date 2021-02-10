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
        var data = {
            username: req.user.username,
            bio: req.user.bio,
            profPic: req.user.profPic,
            id: req.user.id
        }
    
        // User_interests.findAll({
        //     where: {
        //         user_id: req.user.id
        //     },
        //     include: [
        //         {
        //             model: Interests
        //         }
        //     ],
        // })
        console.log(data);
        res.render("profile", data);
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
var path = require("path");
var db = require("../models");

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
        db.User.findOne({
            where: {
                id: req.user.id,
            }
        }).then(function (dbData) {
            var hbsData = {
                username: dbData.username,
                bio: dbData.bio,
                profPic: dbData.profPic,
                id: dbData.id
            }
            res.render("profile", hbsData);
        });

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
    });

    app.get("/signup", function (req, res) {
        res.render("signup");
    });

    app.get("/matches", function(req, res) {
          res.render("matches");
    });

    app.get("/connect", function (req, res) {

    });
}
// be sure to add back in "isAunthenticated" to routes that we want restricted.
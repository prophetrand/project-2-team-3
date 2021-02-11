var path = require("path");
var db = require("../models");
var Op = db.Sequelize.Op;

var isAuthenticated = require("../config/middleware/isAuthenticated");
const interests = require("../models/interests");

module.exports = function (app) {
    app.get("/", function (req, res) {
        // Welcome page and login function.
        if (req.user) {
            res.redirect("/profile");
        }
        res.render("login");
    });

    // Gets profile page with their bio, profile pic, username, and interests
    app.get("/profile", isAuthenticated, function (req, res) {
        db.User.findOne({
            where: {
                id: req.user.id,
            },
        }).then(function (dbData) {
            var hbsData = {
                username: dbData.username,
                bio: dbData.bio,
                profPic: dbData.profPic,
                id: dbData.id,
            };
            db.Interests.findAll({
                include: {
                    model: db.User,
                    through: {
                        where: {
                            user_id: req.user.id,
                        },
                    },
                    as: "User",
                },
            })
                .then((data) => {
                    console.log(data);
                    var interests = [];
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].dataValues.User.length !== 0) {
                            interests.push(data[i].dataValues);
                        }
                    }
                    hbsData.interests = interests;
                    console.log(hbsData);
                    res.render("profile", hbsData);
                })
                .catch(function (err) {
                    console.log(err);
                });
        });
    });

    app.get("/signup", function (req, res) {
        res.render("signup");
    });

    app.get("/matches", isAuthenticated, function (req, res) {
        db.Matches.findAll({
            where: {
                user_id: req.user.id,
            },
        }).then((data) => {
            var arr = [];

            for (var i = 0; i < data.length; i++) {
                arr.push(data[i].dataValues.match_id);
            }

            db.User.findAll({
                where: {
                    id: {
                        [Op.in]: arr,
                    },
                },
            }).then((data2) => {
                var users = [];
                for (var j = 0; j < data2.length; j++) {
                    users.push(data2[j].dataValues);
                }
                console.log(users);
                var usersObj = { users: users };

                res.render("matches", usersObj);
            });
        });
    });
    // Route to retrieve all users with that interest
    app.get("/connect/:choice", isAuthenticated, function (req, res) {
        db.User.findAll({
            include: {
                model: db.Interests,
                through: {
                    where: {
                        interest_id: req.params.choice,
                    },
                },
                as: "Interests",
            },
        })
            .then((data) => {
                console.log(data[0].dataValues.Interests);
                var users = [];
                for (var i = 0; i < data.length; i++) {
                    if (data[i].dataValues.Interests.length !== 0) {
                        users.push(data[i].dataValues);
                    }
                }
                console.log(users);
                var usersObj = { users: users };

                res.render("connections", usersObj);
            })
            .catch(function (err) {
                console.log(err);
            });
    });

    app.get("/connect", isAuthenticated, function (req, res) {
        res.render("connect");
    });
};
// be sure to add back in "isAunthenticated" to routes that we want restricted.

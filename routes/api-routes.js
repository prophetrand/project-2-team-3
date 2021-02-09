var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

    app.get("/api/signup", function(req, res) {
        db.User.create({
          username: req.body.username,
          password: req.body.password
        })
          .then(function() {
            res.redirect(307, "/login");
          })
          .catch(function(err) {
            res.status(401).json(err);
          });
    });

    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.user);
    });

    app.post("/api/signup", passport.authenticate("local"), function(req, res) {
    
    });

    app.get("/api/user", function(req, res) {
      db.User.findAll({})
      .then(function(dbUser) {
        res.json(dbUser);
      });
    });

    // app.post("/api/user/find", function(req, res) {
    //   db.User.findAll({
    //     where: {
    //       interests: req.body.choice
    //     }
    //   }).then(users => {
    //     res.render("connections", users);
    //   });
    // });

    app.get("/api/connect/results", function(req, res) {
      db.User.findAll({}).then(data => {
        res.redirect("connections", data);
      });
    });

    app.get("/api/user/:id", function(req, res) {

    });

    app.post("/api/user", function(req, res) {

    });

    app.get("/api/connect", function(req, res) {

    });

    app.get("/api/matches/:id", function(req, res) {

    });

    app.post("/api/user/:id", function(req, res) {

        // Update user bio, interests, picture
        // Updates the matches model

    });
}
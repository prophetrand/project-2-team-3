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

    app.get("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.user);
    });

    app.get("/api/signup", passport.authenticate("local"), function(req, res) {
        
    });

    app.get("/api/user", function(req, res) {
      res.json(req.username);
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
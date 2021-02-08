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
      db.User.find({})
      .then(function(dbUser) {
        res.json(dbUser);
      });
    });

    app.get("/api/user/:id", function(req, res) {
      db.User.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbUser) {
        res.json(dbUser);
      });
    });

    app.post("/api/user", function(req, res) {
      db.User.create({
        profPic: req.body.profPic,
        interests: req.body.interests,
        bio: req.body.bio
      })
      .then(function(dbUser) {
        res.json(dbUser);
      });
    });

    app.get("/api/connect", function(req, res) {

    });

    app.get("/api/matches/:id", function(req, res) {

    });

}
var db = require("../models");
var passport = require("../config/passport");
const matches = require("../models/matches");

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

    });

    app.get("/api/user/:id", function(req, res) {

    });

    app.post("/api/user", function(req, res) {

    });

    app.get("/api/connect", function(req, res) {

    });

    app.get("/api/matches/:id", function(req, res) {
         db.Matches.findAll({
           where: {
              user_id: req.user_id
           },
                      
         }).then(function(dbMatches){
           res.json(dbMatches);
         });

    });

    app.post("/api/user/:id", function(req, res) {

        // Update user bio, interests, picture
        // Updates the matches model

    });
}
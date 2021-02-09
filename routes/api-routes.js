var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

    app.post("/api/signup", function(req, res) {
        db.User.create({
          username: req.body.username,
          password: req.body.password,
          bio: req.body.bio
        })
          .then(function(data) {
            res.redirect(307, "/api/login");
          })
          .catch(function(err) {
            console.log(err);
            res.status(401).json(err);
          });
    });

    app.post("/api/interests", function(req, res) {
      db.User_interests.create({
        user_id: req.user.id,
        interest_id: req.body.interest_id
      })
        .then(function(data) {
          res.send(data);
        })
        .catch(function(err) {
          console.log(err);
          res.status(401).json(err);
        });
    });

    app.post("/api/login", passport.authenticate("local"), function(req, res) { 
      res.json(req.user);
    });

    app.get("/api/user", function(req, res) {

    });

    app.get("/api/user/:id", function(req, res) {

    });

    app.get("/api/connect", function(req, res) {

    });

    app.get("/api/matches/:id", function(req, res) {

    });

    // GET route for logout function, will probably be useful later.
    // app.get("/logout", function(req, res) {
    //   req.logout();
    //   res.redirect("/");
    // });
}
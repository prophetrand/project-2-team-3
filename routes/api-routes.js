var db = require("../models");
var passport = require("../config/passport");
const matches = require("../models/matches");

module.exports = function (app) {

  app.post("/api/signup", function (req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password,
      bio: req.body.bio
    })
      .then(function (data) {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        console.log(err);
        res.status(401).json(err);
      });
  });

  app.post("/api/interests", function (req, res) {
    db.User_interests.create({
      user_id: req.user.id,
      interest_id: req.body.interest_id
    })
      .then(function (data) {
        res.send(data);
      })
      .catch(function (err) {
        console.log(err);
        res.status(401).json(err);
      });
  });

  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  app.get("/api/user", function (req, res) {
    db.User.find({})
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });

  app.get("/api/user/:id", function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });

  app.post("/api/user", function (req, res) {
    db.User.create({
      profPic: req.body.profPic,
      interests: req.body.interests,
      bio: req.body.bio
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });

  app.get("/api/connect", function (req, res) {
    db.Matches.create({
      user_id: req.user.id,
      match_id: req.body.id
    }).then(data => {
      res.redirect(307, "/profile");
    });
  });
  // Put route for updating users
  app.put("/api/user/:id", function (req, res) {
    db.User.update({
      // profPic: req.body.profPic,
      // interests: req.body.interests,
      bio: req.body.bio,
    }, {
      where: {
        id: req.params.id
      }
    })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        console.log(err);
        res.status(401).json(err);
      });
  });

  app.get("/api/matches/:id", function (req, res) {
    db.Matches.findAll({
      where: {
        match_id: req.user_id
      },

    }).then(function (dbMatches) {
      res.render("matches", dbMatches);
    });

  });

  // GET route for logout function, will probably be useful later.
  // app.get("/logout", function(req, res) {
  //   req.logout();
  //   res.redirect("/");
  // });

  // app.get("/api/interests/:id", function (req, res) {
  //   db.User.findAll({
  //     include: {
  //       model: db.User,
  //       // where: {
  //       //   id: req.params.id
  //       // },
  //       through: {
  //         where: {
  //           user_id: req.params.id
  //         }
  //       },
  //       as: "Interests"
  //     }
  //   }).then(data => {
  //     console.log(data[0].dataValues.Interests);
  //     var users = [];
  //     for (var i = 0; i < data.length; i++) {
  //       users.push(data[i].dataValues)
  //     }
  //     res.render("profile");
  //   }).catch(function(err) {
  //     console.log(err);
  //   })
  // });


  // GET route for logout function
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
}


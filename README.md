# LOVE-CONNECT

![License](https://img.shields.io/badge/license-MIT-181717?style=for-the-badge) 

## Table of Contents
* [Title](#title)
* [Deployed Link](#deployed-link)
* [Site Gif](#site-gif)
* [Technologies Used](#technologies-used)
* [Description](#description)
* [Usage](#usage)
* [Work Involved](#work-involved)
* [Code Snippet](#code-snippet)
* [License](#license)
* [Authors](#authors)
* [Acknowledgments](#acknowledgments)

## Deployed Link
* Click this link to view the site.
[Deployed Link](https://loveconnect14.herokuapp.com/)

## Site Gif
![Site](public/assets/images/love-connect.gif)

## Technologies Used
* javascript
* CSS
* MySQL
* Sequelize
* Express
* NodeJs
* Handlebars
* Bootstrap
* passport
* bideo.js
* bycrypt.js
* 100-K Faces API
* Canva
* Pexels
* Heroku
* Github

## Description
This is a full stack dating application that allows a user to sign in, select their interests, upload and edit their bio, find other users based off of their interersts, and match with others. 

## Work Involved
For this application, the front-end aspects of the site were developed using the Bootstrap framework. Utilizing sequelize, we created a variety of models that allowed for storing of data within the MySQL database, and associations within these models to allow for matches, and displaying user interests. Additional features such as the profile picture was generated using the 100-K Faces API, and the login page video using bideo.js.


## Code Snippet
* This code snippet displays the profile page api html route which allows the user to view their bio, profile picture, username, and selected interests upon signing in or creating a profile.
```
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
```

## License
This project is covered under MIT.

## Authors

**Jessny Joseph** 
* [Github](https://github.com/jessnyj)
* [LinkedIn](https://www.linkedin.com/in/jessny-joseph-361515201)

**Rand Hale**
* [Github](https://github.com/prophetrand)
* [LinkedIn](https://www.linkedin.com/in/rand-hale-83ba389b/)

**William Bryan**
* [Github](https://github.com/WeiLiBryan)
* [LinkedIn](https://www.linkedin.com/in/william-bryan-72730019a/)

**Abuye Mamuye**
* [Github](https://github.com/AbuyeM1)
* [LinkedIn](https://www.linkedin.com/in/abuye-mamuye-5a49921b0/)

## Acknowledgments
Trilogy Education Services

var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        profPic: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg"
        },
        interests: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },{
        freezeTableName: true
    });

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
      };
      
      // Password hashing functionality
      User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    User.prototype.all = function() {
        User.findAll({
            attributes: ['username', 'profPic', 'interests', 'bio']
        });
    };



    return User;
}
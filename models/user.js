var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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
            defaultValue: "https://100k-faces.glitch.me/random-image"
        },
        interests: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        freezeTableName: true
    });

    User.associate = function(models) {
        User.belongsToMany(models.Interests, {
        through: models.User_interests,
        as: "Interests",
        foreignKey: "user_id",
        });
    }

    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Password hashing functionality
    User.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    return User;
}
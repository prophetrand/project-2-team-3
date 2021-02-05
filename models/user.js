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

    return User;
}
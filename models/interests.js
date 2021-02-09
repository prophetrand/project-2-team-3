const user_interests = require("./user_interests");
const User = require("./user");

module.exports = function(sequelize, DataTypes) {
    var Interests = sequelize.define("Interests", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
        },
    },{
        freezeTableName: true
    });
    Interests.associate = function(models) {
        Interests.belongsToMany(models.User, {
         through: models.User_interests,
         as: "User",
         foreignKey: "interest_id"
        });
    }
    
    return Interests;
};
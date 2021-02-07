module.exports = function(sequelize, DataTypes) {
    var User_interests = sequelize.define("User_interests", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        interest_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },{
        freezeTableName: true
    });

    return User_interests;
};
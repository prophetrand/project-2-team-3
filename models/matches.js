module.exports = function(sequelize, DataTypes) {
    var Matches = sequelize.define("Matches", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        match_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },{
        freezeTableName: true
    });

    return Matches;
};
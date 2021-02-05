module.exports = function(sequelize, DataTypes) {
    var Interests = sequelize.define("Interests", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
        },
    },{
        freezeTableName: true
    });

    return Interests;
};
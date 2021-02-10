module.exports = function(sequelize, DataTypes) {
    var Interests = sequelize.define("Interests", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
    }, {
        freezeTableName: true
    });
    Interests.associate = function (models) {
        Interests.belongsToMany(models.User, {
            through: models.User_interests,
            as: "User",
            foreignKey: "interest_id"
        });
    }

    // Interests.create({
    //     name: "Arts"
    // }).then(function() {
    //     Interests.create({
    //         name: "Food"
    //     }).then(function() {
    //         Interests.create({
    //             name: "Nature"
    //         }).then(function() {
    //             Interests.create({
    //                 name: "Sports"
    //             }).then(function() {
    //                 Interests.create({
    //                     name: "Tech"
    //                 }).then(function() {
    //                     Interests.create({
    //                         name: "Travel"
    //                     });
    //                 })
    //             })
    //         })
    //     })
    // }).catch(function(err) {
    //     console.log(err);
    // });

    return Interests;
};
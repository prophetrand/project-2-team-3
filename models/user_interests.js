module.exports = function(sequelize, DataTypes) {
    var User_interests = sequelize.define("User_interests", {},{
        freezeTableName: true
    });

    
    return User_interests;
};

// User_interests.findAll({
//     where: {
//         user_id: ###
//     },
//     include: [
//       {
//         model: Interests
//       }
//     ],
// });
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: DataTypes.STRING,
        location: DataTypes.STRING,
        appointment: DataTypes.DATE
    });
    return User;
};
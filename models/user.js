module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: DataTypes.STRING,
        name: DataTypes.STRING,
        appointment: DataTypes.DATE,
        salon: DataTypes.STRING,
        service: DataTypes.STRING,
        startTime: DataTypes.STRING,
        discount: DataTypes.BOOLEAN
    });
    return User;
};
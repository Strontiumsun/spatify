module.exports = function (sequelize, DataTypes) {
    var Salon = sequelize.define("Salon", {
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        services: DataTypes.STRING,
        image: DataTypes.STRING
    });
    return Salon;
};
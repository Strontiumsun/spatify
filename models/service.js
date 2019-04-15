module.exports = function (sequelize, DataTypes) {
    var Service = sequelize.define("Service", {
        serviceType: DataTypes.STRING,
        s_interval: DataTypes.INTEGER
    });
    return Service;



}
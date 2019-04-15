module.exports = function (sequelize, DataTypes) {
    var Salon = sequelize.define("Salon", {
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        services: DataTypes.STRING,
        opens: DataTypes.STRING,
        closes: DataTypes.STRING,
        image: DataTypes.STRING
    });

    // Salon.associate = function (models) {
    //     Salon.hasMany(models.Service, {
    //         as: "services",
    //         foreignKey: "idService"
    //     });
    // }


    return Salon;



};
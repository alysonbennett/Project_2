module.exports = function(sequelize, DataTypes) {
  const Reservation = sequelize.define("Reservation", {
    date: DataTypes.DATEONLY,
    time: DataTypes.STRING
  });

  Reservation.associate = function(models) {
    Reservation.belongsTo(models.Pet, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Reservation;
};

module.exports = function(sequelize, DataTypes) {
  const Pet = sequelize.define("Pet", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    breed: DataTypes.STRING,
    energy: DataTypes.INTEGER,
    allergies: DataTypes.STRING,
    medications: DataTypes.STRING,
    other: DataTypes.STRING
  });

  Pet.associate = function(models) {
    Pet.hasMany(models.User, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };

  return Pet;
};

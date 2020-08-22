module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Field', {
      code: DataTypes.STRING,
      coordinates: DataTypes.GEOMETRY
    });
  
    return User;
  }
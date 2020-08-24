module.exports = (sequelize, DataTypes) => {
  
    const Mill = sequelize.define('Mill', {
      name: DataTypes.STRING
    },
    {
      tableName: 'Mill'
    });
  
    Mill.associate = function(models) {
      Mill.hasMany(models.Havest, {foreignKey: 'millId'});
    }

    return Mill;
  }
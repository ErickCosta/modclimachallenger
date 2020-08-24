module.exports = (sequelize, DataTypes) => {
  
    const Havest = sequelize.define('Havest', {
      code: DataTypes.STRING,
      startDate: DataTypes.STRING,
      endDate: DataTypes.STRING,
      millId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Mill',
          key: 'id'
        }
      }
    },
    {
      tableName: 'Havest'
    });

    Havest.associate = function(models) {
      Havest.belongsTo(models.Mill, {foreignKey: 'millId', sourceKey: 'id'});
    }
    
    Havest.associate = function(models) {
      Havest.hasMany(models.Farm, {foreignKey: 'havestId'});
    }
  
    return Havest;
  }
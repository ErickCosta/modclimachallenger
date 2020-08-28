module.exports = (sequelize, DataTypes) => {
  
    const Farm = sequelize.define('Farm', {
      code: DataTypes.STRING,
      name: DataTypes.STRING,
      havestId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Havest',
          key: 'id'
        }
      }
    },
    {
      tableName: 'Farm'
    });
    Farm.associate = function(models) {
      Farm.belongsTo(models.Havest, {foreignKey: 'havestId', sourceKey: 'id'});
    }
    Farm.associate = function(models) {
      Farm.hasMany(models.Field, {foreignKey: 'farmId'});
    }
    return Farm;
  }
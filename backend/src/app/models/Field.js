module.exports = (sequelize, DataTypes) => {
  
    const Field = sequelize.define('Field', {
      code: DataTypes.STRING,
      coordinates: DataTypes.GEOMETRY,
      farmId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Farm',
          key: 'id'
        }
      }
    },
    {
      tableName: 'Field'
    });
  
    Field.associate = function(models) {
      Field.belongsTo(models.Farm, {foreignKey: 'farmId', sourceKey: 'id'});
    }
  
    return Field;
  }
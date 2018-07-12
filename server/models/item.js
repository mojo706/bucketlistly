module.exports = (sequelize, DataTypes) => {
  const BucketlistItem = sequelize.define('BucketlistItems', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    bucketlistId: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'dateCreated',
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'dateModified',
      allowNull: false,
    },
  })
  BucketlistItem.associate = models => {
    BucketlistItem.belongsTo(models.Bucketlists, {
      foreignKey: 'bucketlistId',
    })
  }
  return BucketlistItem
}

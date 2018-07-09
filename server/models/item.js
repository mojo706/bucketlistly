module.exports = (sequelize, DataTypes) => {
  const BucketlistItem = sequelize.define('Item', {
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
      type: DataTypes.INTEGER,
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dateModified: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
  BucketlistItem.associate = models => {
    BucketlistItem.belongsTo(models.Bucketlist, {
      foreignKey: 'bucketlistId',
      onDelete: 'CASCADE',
    })
  }
  return BucketlistItem
}

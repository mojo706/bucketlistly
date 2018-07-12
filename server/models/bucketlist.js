module.exports = (sequelize, DataTypes) => {
  const Bucketlist = sequelize.define('Bucketlists', {
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
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  Bucketlist.associate = models => {
    Bucketlist.hasMany(models.BucketlistItems, {
      foreignKey: 'id',
      as: 'bucketlistItems',
      onDelete: 'CASCADE',
    })
  }
  return Bucketlist
}

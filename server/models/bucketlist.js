module.exports = (sequelize, DataTypes) => {
  const Bucketlist = sequelize.define('Bucketlist', {
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
  })

  Bucketlist.associate = models => {
    Bucketlist.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems',
      onDelete: 'CASCADE',
    })
  }
  return Bucketlist
}

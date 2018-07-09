module.exports = (sequelize, DataTypes) => {
  const Bucketlist = sequelize.define('Bucketlist', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
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
  Bucketlist.associate = models => {
    Bucketlist.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems',
    })
  }
  return Bucketlist
}

module.exports = (sequelize, DataTypes) => {
  const VericationToken = sequelize.define(
    'VerificationToken',
    {
      userId: DataTypes.STRING,
      token: DataTypes.STRING,
    },
    {
      classMethods: {
        associate: models => {
          VericationToken.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'userId',
            foreignKeyConstraint: true,
          })
        },
      },
    },
  )
  return VericationToken
}

module.exports = (sequelize, DataTypes) => {
  const VericationToken = sequelize.define(
    'VerificationTokens',
    {
      userId: DataTypes.STRING,
      token: DataTypes.STRING,
    },
    {
      classMethods: {
        associate: models => {
          VericationToken.belongsTo(models.Users, {
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

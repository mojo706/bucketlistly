module.exports = (sequelize, DataTypes) => {
  const VerificationToken = sequelize.define(
    'VerificationTokens',
    {
      userId: DataTypes.STRING,
      token: DataTypes.STRING,
    },
    {
      classMethods: {
        associate: models => {
          VerificationToken.belongsTo(models.Users, {
            as: 'user',
            foreignKey: 'userId',
            foreignKeyConstraint: true,
          })
        },
      },
    },
  )
  return VerificationToken
}

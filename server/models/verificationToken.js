const cuid = require('cuid')

module.exports = (sequelize, DataTypes) => {
  const VerificationToken = sequelize.define(
    'VerificationTokens',
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: () => cuid(),
      },
      userId: DataTypes.STRING,
      token: DataTypes.STRING,
      expireToken: DataTypes.STRING,
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

const cuid = require('cuid')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: () => cuid(),
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  })

  User.associate = models => {
    User.hasOne(models.VerificationTokens, {
      as: 'verificationtoken',
      foreignKey: 'userId',
      foreignKeyConstraint: true,
    })
  }
  return User
}

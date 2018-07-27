module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Bucketlists', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'dateCreated',
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'dateModified',
        allowNull: false,
      },
      createdBy: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }),

  down: queryInterface => queryInterface.dropTable('Bucketlists'),
}

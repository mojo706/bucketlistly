module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('BucketlistItems', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
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
      done: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      bucketlistId: {
        type: Sequelize.STRING,
        allowNull: false,
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
    }),

  down: queryInterface => queryInterface.dropTable('BucketlistItems'),
}

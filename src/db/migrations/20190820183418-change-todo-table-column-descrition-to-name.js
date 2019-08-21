
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Todos', 'description', 'name')
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Todos', 'name', 'description')
  }
};

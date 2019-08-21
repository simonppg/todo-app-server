module.exports = (sequelize, DataType) => {
    const Todo = sequelize.define('Todo', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    })

    Todo.associate = (models) => {
        Todo.belongsTo(models.List)
    }

    return Todo
}
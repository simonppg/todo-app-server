module.exports = (sequelize, DataType) => {
    const List = sequelize.define('List', {
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

    List.associate = (models) => {
        List.belongsTo(models.User)
        List.hasMany(models.Todo)
    }

    return List
}
module.exports = {
    database: 'todos',
    username: 'user',
    password: '',
    params: {
        dialect: 'sqlite',
        storage: 'todos-db.sqlite',
        define: {
            underscore: true
        },
        operatorsAliases: false
    }
}
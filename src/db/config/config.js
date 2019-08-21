
module.exports = {
    development: {
        username: 'user',
        password: null,
        database: 'todos',
        params: {
            host: '127.0.0.1',
            dialect: 'sqlite',
            storage: 'todos-db.sqlite',
            define: {
                underscore: true
            },
            operatorsAliases: false
        }
    },
    test: {
        username: 'root',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mysql',
        operatorsAliases: false
    },
    production: {
        username: 'root',
        password: null,
        database: 'database_production',
        host: '127.0.0.1',
        dialect: 'mysql',
        operatorsAliases: false
    }
}
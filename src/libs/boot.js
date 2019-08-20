module.exports = app => {
    // Create tables and start server
    app.db.database.sequelize.sync().done(() => {
        app.listen(app.get('port'), () => {
            let port = app.get('port')
            console.log(`Server on port ${port}`)
            console.log(`http://localhost:${port}`)
        })
    })
}
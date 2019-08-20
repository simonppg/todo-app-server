module.exports = app => {

    const Todo = app.db.database.models.Todo;

    app.route('/todos')
        .get((req, res) => {
            Todo.findAll({})
                .then(result => {
                    res.json(result)
                })
                .catch(err => {
                    res.status(412).json({msg: err.message})
                })
        })
        .post((req, res) => {
            Todo.create(req.body)
                .then(result => res.json(result))
                .catch(err => {
                    res.status(412).json({msg: err.message})
                })
        })
}
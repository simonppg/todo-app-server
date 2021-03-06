module.exports = app => {

    const User = app.db.database.models.User;

    app.route('/users')
        .get((req, res) => {
            User.findAll({})
                .then(result => {
                    console.log(result)
                    res.json(result)
                })
                .catch(err => {
                    res.status(412).json({msg: err.message})
                })
        })
        .post((req, res) => {
            User.create(req.body)
                .then(result => res.json(result))
                .catch(err => {
                    res.status(412).json({msg: err.message})
                })
        })
}
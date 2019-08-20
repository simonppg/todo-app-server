module.exports = app => {

    const List = app.db.database.models.List;

    app.route('/lists')
        .get((req, res) => {
            List.findAll({})
                .then(result => {
                    res.json(result)
                })
                .catch(err => {
                    res.status(412).json({msg: err.message})
                })
        })
        .post((req, res) => {
            List.create(req.body)
                .then(result => res.json(result))
                .catch(err => {
                    res.status(412).json({msg: err.message})
                })
        })
}
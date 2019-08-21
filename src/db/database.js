import Sequelize from 'sequelize'
import fs from 'fs'
import path from 'path'

let db = null

module.exports = app => {
    if(!db) {
        let sequelize
        const config = app.db.config.config
        console.log(config)

        if (process.env.NODE_ENV === 'production') {
            sequelize = new Sequelize(
                config.production.database,
                config.production.username,
                config.production.password,
                config.production.params)
        } else {

            sequelize = new Sequelize(
                config.development.database,
                config.development.username,
                config.development.password,
                config.development.params)
            }

        db = {
            sequelize,
            Sequelize,
            models: {}
        }
    
        const modelsDir = path.join(__dirname, 'models')
        fs.readdirSync(modelsDir).forEach(filename => {
            const modelName = path.join(modelsDir, filename);
            const model = sequelize.import(modelName)
            db.models[model.name] = model
        })

        Object.keys(db.models).forEach(key => {
            console.log(`associating: ${key} with other modules`)
            db.models[key].associate(db.models)
        })
    }

    return db
}
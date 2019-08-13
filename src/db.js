import Sequelize from 'sequelize'
import fs from 'fs'
import path from 'path'

let db = null

module.exports = app => {
    if(!db) {
        const config = app.libs.config
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        )

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
            db.models[key].associate(db.models)
        })
    }

    return db
}
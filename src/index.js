import express from 'express'
import consign from 'consign'

const app = express()

consign({
    cwd: __dirname
})
.include('db/config/config.js')
.then('db/database.js')
.then('libs/middlewares.js')
.then('routes')
.then('libs/boot.js')
.into(app) 

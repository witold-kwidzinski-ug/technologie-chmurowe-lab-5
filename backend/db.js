require('dotenv').config()
const {Pool} = require('pg')

const DB = new Pool({
    host: "db",
    database: process.env.DATABASE,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD
})

module.exports = DB
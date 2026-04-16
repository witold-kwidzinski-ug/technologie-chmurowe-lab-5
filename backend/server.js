const express = require('express')
const app = express()
const cors = require('cors')
const DB = require("./db")

app.use(cors(), express.json())

require("dotenv").config()

const id = process.env.BACKEND_ID || "default"


const startTime = Date.now()

let reqCount = 0;


app.get("/items", async (req, res) => {
    reqCount++
    try {
        const items = await DB.query("SELECT * FROM items")
        res.send(items.rows)
    } catch {
        res.sendStatus(500)
    }
    

})

app.post("/items", async (req, res) => {
    reqCount++
    try {
        const item = req.body.name


        await DB.query(`INSERT INTO items (nazwa) VALUES ($1)`, [item])

        const record = await DB.query('SELECT * FROM items WHERE nazwa=$1', [item])

        res.send(record.rows[0])

    } catch {
        res.sendStatus(400)
    }

    

})

app.get("/stats", async (req, res) => {
    reqCount++
    try {
        const size = await DB.query('SELECT COUNT(*) FROM items')
        res.json({size: size.rows[0].count , id, uptime: Math.floor((Date.now() - startTime) / 1000), reqCount})
    } catch {
        res.sendStatus(500)
    }
})


app.get("/health", (req, res) => {
    reqCount++

    res.json({status: "ok", uptime: Math.floor((Date.now() - startTime) / 1000)})

})


app.listen(3000, () => {
    console.log("Started backend at http://localhost:3000")
})

module.exports = app
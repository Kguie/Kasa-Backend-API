// index.js
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Lodging = require('./models/lodging')
const PORT = 4000
const cors = require('cors')

//Cors
app.use(cors())


//Database connection

app.get('/lodgings', async (req, res) => {

    const results = await Lodging.find({})

    try {
        res.send(
            'status: 200,'

        )
    }
    catch (error) {
        res.json({
            status: 400,
            message: { error }
        })
    }
}
)

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
    res.send('This is my about route..... ')
})

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT} `)
})
// Export the Express API
module.exports = app
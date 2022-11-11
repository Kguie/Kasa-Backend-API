// index.js
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Lodging = require('./models/lodging')
const PORT = 4000
const cors = require('cors')


mongoose.connect("mongodb+srv://kguie:GfQLpqTpFOeXvAFr@kasa.nsgwlcc.mongodb.net/KasaDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));


//Cors
app.use(cors());


//Database connection

app.get('/lodgings', async (req, res) => {

    const results = await Lodging.find({})

    try {
        res.json({
            status: 200,
            lodgings: results
        })
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
    res.json('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
    res.json({ message: 'This is my about route..... ' })
})

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT} `)
})
// Export the Express API
module.exports = app
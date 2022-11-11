// index.js
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Lodging = require('./models/lodging')
const PORT = 4000

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT} `)
})

//Database connection
mongoose.connect("mongodb+srv://kguie:GfQLpqTpFOeXvAFr@kasa.nsgwlcc.mongodb.net/KasaDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));



app.get('/lodgings', getAllLodgings = (req, res) => {
    Lodging.find()
        .then(lodgings => res.status(200).json(lodgings))
        .catch(error => res.status(400).json({ error }))
}
)

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
    res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app
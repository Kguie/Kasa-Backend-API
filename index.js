// index.js
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Lodging = require('./models/lodging')
const PORT = 4000




//Database connection
mongoose.connect("mongodb+srv://kguie:GfQLpqTpFOeXvAFr@kasa.nsgwlcc.mongodb.net/KasaDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));


app.use('/lodgings', async (req, res) => {
    const lodgingsData = await Lodging.find()
    try {
        res.json({
            status: 200,
            lodgings: lodgingsData
        })
        res.send(
            'requete reçue'
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
// index.js
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Lodging = require('./models/lodging')
const PORT = 4000

//Cors
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});


//Database connection

app.get('/lodgings', async (req, res) => {
    mongoose.connect("mongodb+srv://kguie:GfQLpqTpFOeXvAFr@kasa.nsgwlcc.mongodb.net/KasaDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("Connexion à MongoDB réussie !"))
        .catch(() => console.log("Connexion à MongoDB échouée !"));


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
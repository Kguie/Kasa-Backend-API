// index.js
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Lodging = require('./models/lodging')
const PORT = 4000
const cors = require('cors')
const lodgingRouter = require('./routes/lodging');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');



mongoose.connect("mongodb+srv://kguie:GfQLpqTpFOeXvAFr@kasa.nsgwlcc.mongodb.net/KasaDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));


//Cors
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



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

app.use('/api/lodgings', lodgingRouter);

app.get('/', (req, res) => {
    res.json('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
    res.json({ message: 'This is my about route..... ' })
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT} `)
})
// Export the Express API
module.exports = app












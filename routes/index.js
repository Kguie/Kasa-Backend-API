/**
 * Index routes
 **/

const express = require('express')
const router = express.Router()

/*Get the API text*/
router.get('/', function (req, res, next) {
    res.render('index', { title: 'API - Kasa' })
})

module.exports = router

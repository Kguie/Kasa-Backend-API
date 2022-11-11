/**
 * Lodging routes
 **/

const express = require("express");
const lodgingCtrl = require("../controllers/lodging");
const router = express.Router();


//Get the lodgings data
router.get("/", lodgingCtrl.getAllLodgings);

//Get one lodgings data
router.get("/:id", lodgingCtrl.getOneLodging);

module.exports = router;
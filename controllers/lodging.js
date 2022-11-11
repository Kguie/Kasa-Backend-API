/**
 * Lodging routing logic
 **/

const Lodging = require("../models/lodging");



/* Get all the lodgings datas*/
exports.getAllLodgings = (req, res, next) => {
    Lodging.find()
        .then(lodgings => res.status(200).json(lodgings))
        .catch(error => res.status(400).json({ error }))
};


/*Get one lodging's data with the id */
exports.getOneLodging = (req, res, next) => {
    Lodging.findById(req.params.id)
        .then(lodging => res.status(200).json(lodging))
        .catch(error => res.status(404).json({ error }))
};









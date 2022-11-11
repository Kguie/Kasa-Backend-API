/**
 * Lodging routing logic
 **/

const Lodging = require("../models/lodging");



/* Get all the lodgings datas*/
exports.getAllLodgings = async (req, res, next) => {
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
};


/*Get one lodging's data with the id */
exports.getOneLodging = async (req, res, next) => {
    const results = await Lodging.findById(req.params.id)
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
};









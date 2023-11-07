const { Quote } = require('../models/Quote');
const quoteController = require('express').Router()
const { errorHandler } = require('../utils/errorHandler');

// const addQuote = async (req, res) => {
//     const { quote, value } = req.body;
//     const data = { quote, value };

//     try {
//         await Quote.create({ ...data });

//         res.status(200).json({ ...data });
//     } catch (error) {
//         errorHandler(error, res, req);
//     }
// };

quoteController.get('/getSingleQuote', async (req, res) => {

    try {
        const quote = await Quote.aggregate([{ $sample: { size: 1 } }])

        res.status(200).json(quote);
    } catch (error) {
        errorHandler(error, res, req);
    }
});

module.exports = quoteController
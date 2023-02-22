const express = require('express');

const cat = require('../controllers/categoriesController');

const router = express.Router();



router.route('/')
    .get(async (req, res) => {
        const categories = await cat.getAll();

        if (!categories) {
            res.status(404).json({error});
        }

        res.status(200).json(categories);
    })
;



module.exports = router;
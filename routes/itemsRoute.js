const express = require('express');

const itemsController = require('../controllers/itemsController');

const router = express.Router();


router.route('/')
    .get(async (req, res) => {
        const items = await itemsController.getAll();

        if (!items) {
            res.status(404).json({message: "Il n'y a aucun item pour le moment."});
        }

        res.status(200).json(items);
    })
;



module.exports = router;
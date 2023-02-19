const express = require('express');

const burger = require('../controllers/burgerController');

const router = express.Router();



router.route('/')
    .get(async (req, res) => {
        const burgers = await burger.getAll();

        if (!burgers) {
            res.status(404).json({message: "Il n'y a aucun burger pour le moment."});
        }

        res.status(200).json(burgers);
    })
;



module.exports = router;
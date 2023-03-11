const express = require('express');

const itemsController = require('../controllers/itemsController');

const router = express.Router();


router.route('/')
    .get(async (req, res) => {
        const items = await itemsController.getAll();

        if (!items) {
            res.status(404).json({message: "Il n'y a aucun produit disponible pour le moment."});
        }

        res.status(200).json(items);
    })
;

router.route('/infos')
    .get(async (req, res) => {
        const infos = await itemsController.getAllItemsInfos();

        if (!infos) {
            res.status(404).json({message: "Il n'y a aucun produit disponible pour le moment."});
        }

        res.status(200).json(infos);
    })
;



module.exports = router;
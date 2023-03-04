const express = require('express');

const burgerController = require('../controllers/burgerController');

const router = express.Router();



router.route('/')
    .get(async (req, res) => {
        const burgers = await burgerController.getAll();

        if (!burgers) {
            res.status(404).json({message: "Il n'y a aucun burger pour le moment."});
        }

        res.status(200).json(burgers);
    })
    .put(async (req, res) => {
        const new_burger = await burger.add(req.body);

        if (!new_burger) {
            res.status(404);
        }
        res.status(200).json(new_burger);
    })
;

router.route('/:id')
    .get(async (req, res) => {
        const burger = await burgerController.getById(req.params.id);
            if (!burger) {
                res.status(404).json({message: "Aucun burger ne correspond à cette recherche."});
            }
            res.status(200).json(burger);
    })
    .delete(async (req, res) => {
        const burger = await burgerController.remove(req.params.id);
        if (!burger) {
            res.status(404).json({message: "La suppression n'a pas fonctionné."});
        }
        res.status(202).json({message: "Suppression acceptée et réussie."});
    })
;


module.exports = router;
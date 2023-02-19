const express = require('express');

// J'importe tous mes fichiers route.js contenus dans le dossier "routes"

const burger = require('./burgerRoute');

// J'importe le Routeur Express
const router = express.Router();


// Je pointe chaque entité vers sa sous-route :
// "http://localhost/api/{entité}"
router.use('/burgers', burger);


// J'exporte le router pour le rendre accessible en faisant un require de tout ce fichier
module.exports = router;
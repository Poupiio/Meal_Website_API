const express = require('express');

// J'importe tous mes fichiers route.js contenus dans le dossier "routes"
const items = require('./itemsRoute');
const categories = require('./categoriesRoute');
const burgers = require('./burgersRoute');

// J'importe le Routeur Express
const router = express.Router();


// Je pointe chaque entité vers sa sous-route :
// "http://localhost/api/{entité}"
router.use('/items', items);
router.use('/categories', categories);

router.use('/burgers', burgers);

// J'exporte le router pour le rendre accessible en faisant un require de tout ce fichier
module.exports = router;
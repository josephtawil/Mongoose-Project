const express = require('express');
const router = express.Router();
const {addShoe, getShoe,findShoe} = require('../controllers/shoe-controller');

//this will create a shoe
router.post("/addShoe", addShoe);
//this will get all the Shoes
router.get('/allShoes', getShoe);

router.get('/shoe/:id',findShoe);
module.exports = router;
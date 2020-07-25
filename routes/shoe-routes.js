const express = require('express');
const router = express.Router();
const {addShoe, getShoe} = require('../controllers/shoe-controller');

//this will create a shoe
router.post("/addShoe", addShoe);
//this will get all the Shoes
router.get('/allShoes', getShoe);
module.exports = router;
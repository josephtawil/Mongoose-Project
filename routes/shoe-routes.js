const express = require('express');
const router = express.Router();
const {addShoe, getShoe,findShoe, updatedShoeBrand, updateShoePrice, deleteShoe, addColorWay} = require('../controllers/shoe-controller');

//this will create a shoe
router.post("/addShoe", addShoe);
//this will get all the Shoes
router.get('/allShoes', getShoe);

router.get('/shoe/:id',findShoe);

router.patch('/shoebrand', updatedShoeBrand);

router.patch('/shoeprice', updateShoePrice);

router.delete('/deleteShoe/:id', deleteShoe);

router.patch('/addColorWay', addColorWay);

module.exports = router;
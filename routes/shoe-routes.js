const express = require('express');
const router = express.Router();
const {addShoe} = require('../controllers/shoe-controller');

router.post("/addShoe", addShoe);

module.exports = router;
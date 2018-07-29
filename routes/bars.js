const express = require('express');
const router = express.Router();
var barsController = require('../controllers/bars');

router.get('/', barsController.index);


module.exports = router;
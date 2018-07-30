const express = require('express');
const router = express.Router();
var barsController = require('../controllers/barsController');

router.get('/', barsController.index);
router.get('/new', barsController.new);
router.get('/:id', barsController.show);
router.post('/', barsController.create);
router.delete('/:id', barsController.delete);

module.exports = router;
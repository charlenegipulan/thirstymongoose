var express = require('express');
var router = express.Router();
var beersController = require('../controllers/beersController');

router.get('/', beersController.index);
router.get('/new', beersController.new);
router.get('/:id', beersController.show);
router.delete('/:id', beersController.delete);
router.post('/', beersController.create);

module.exports = router;
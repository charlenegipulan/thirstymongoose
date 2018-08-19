const express = require("express");
const router = express.Router();
var barsController = require("../controllers/bars");

router.get("/", barsController.index);
router.get("/new", barsController.new);
router.get("/:id", barsController.show);
router.post("/", barsController.create);
router.delete("/:id", barsController.delete);
router.get("/:id/beers/new", barsController.newServe);
router.post("/:barId/beers/:beerId", barsController.createServe);
router.delete("/:barId/beers/:beerId", barsController.deleteServe);

module.exports = router;

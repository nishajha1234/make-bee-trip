const express = require("express");
const router = express.Router();

const trainController = require("../controllers/train.controller");

/* Train routes */
router.get("/", trainController.getTrains);

module.exports = router;
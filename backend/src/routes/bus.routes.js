const express = require("express");
const router = express.Router();

const busController = require("../controllers/bus.controller");

/* Bus routes */
router.get("/", busController.getBuses);

module.exports = router;
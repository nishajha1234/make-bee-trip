const express = require("express");
const router = express.Router();

const flightController = require("../controllers/flight.controller");

/* Flight routes */
router.get("/", flightController.getFlights);

module.exports = router;
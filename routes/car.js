const express = require("express");
const router = express.Router();
const carController = require("../controllers/car");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, carController.getCars);

router.post("/createCar", carController.createCar);

// router.delete('/deleteCar', carController.deleteCar)

module.exports = router;

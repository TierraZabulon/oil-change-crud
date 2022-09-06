const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointment");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, appointmentController.getAppointments);

router.get("/createAppointment", appointmentController.appointmentForm)

router.post("/createAppointment", appointmentController.createAppointment);

// router.put('/changeAppointmentCar', appointmentController.changeAppointmentCar)

// router.put('/changeAppointmentType', appointmentController.changeAppointmentType)

// router.delete("/deleteAppointment", appointmentController.deleteAppointment);

module.exports = router;

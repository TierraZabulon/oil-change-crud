const Appointment = require("../models/Appointment");

module.exports = {
  getAppointments: async (req, res) => {
    console.log(req.user);
    try {
      const appointments = await Appointment.find({ userId: req.user.id });
      res.render("appointment.ejs", {
        appointments: appointments,
        user: req.user,
        carId: req.query.carId,
        carMake: req.query.carMake,
        carModel: req.query.carModel,
        carYear: req.query.carYear,
        
      });
    } catch (err) {
      console.log(err);
    }
  },
  createAppointment: async (req, res) => {
    try {
      await Appointment.create({
        date: req.body.appointmentDate,
        userId: req.user.id,
        time: req.body.appointmentTime,
        options: req.body.appointmentOptions,
        carId: req.body.carId
      });
      console.log("Appointment has been added!");
      res.redirect("/appointment");
    } catch (err) {
      console.log(err);
    }
  },
  appointmentForm: async (req, res) => {
    try {
      res.render("createAppointment.ejs", {
        user: req.user,
        carId: req.query.carId,
        carMake: req.query.carMake,
        carModel: req.query.carModel,
        carYear: req.query.carYear,
        
      });
    } catch (err) {
      console.log(err);
    }
  },
};

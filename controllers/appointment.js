const Appointment = require("../models/Appointment");

module.exports = {
  getAppointments: async (req, res) => {
    console.log(req.user);
    try {
      const appointments = await Appointment.find({ userID: req.user.id });
      res.render("appointment.ejs", {
        appointments: appointments,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createAppointment: async (req, res) => {
    try {
      await Appointment.create({
        // date: req.date,
        userId: req.user.id,
        // carMake: req.body.carMake,
        // carModel: req.body.appointmentDate,
        // carYear: req.body.carYear,
      });
      console.log("Appointment has been added!");
      res.redirect("/appointment");
    } catch (err) {
      console.log(err);
    }
  },
};

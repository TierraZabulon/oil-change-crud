const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  appointmentDate: {
    type: Date,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);

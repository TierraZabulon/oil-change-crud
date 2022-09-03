const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  options: {
    type: String,
    required: true,
    enum: ["Standard", "Premium", "VIP"],
    default: "Standard",
  },
  carId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);

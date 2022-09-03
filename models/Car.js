const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  carMake: {
    type: String,
    required: true,
  },
  carModel: {
    type: String,
    required: true,
  },
  carYear: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Car", CarSchema);

const mongoose = require("mongoose");

const audioSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  audio: {
    required: true,
    type: String,
  },
  owner: {
    required: true,
    type: mongoose.ObjectId,
    ref: "User",
  }
});

const model = mongoose.model("Audio", audioSchema);
exports.audioModel = model;

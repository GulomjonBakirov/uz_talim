const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  content: {
    required: true,
    type: String,
  },
  owner: {
    type: mongoose.ObjectId,
    required: true,
    ref: "User",
  },
  image: {
    type: String,
    required: true,
  },
  type: {
    enum: [5, 6, 7, 8, 9],
    type: String,
    required: true,
  },
  video:{
      type:String,
  }
});

const model = mongoose.model("Lesson", lessonSchema);
exports.lessonModel = model;

const mongoose = require("mongoose");

const yangilikSchema = new mongoose.Schema({
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
    ref:'User'
  },
  image: {
    type: String,
    required: true,
  },
  type:{
      enum:["science","education"],
      type:String,
      required:true
  }
});

const model = mongoose.model("New", yangilikSchema);
exports.newModel = model;

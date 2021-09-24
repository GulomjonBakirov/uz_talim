const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
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
});

const model = mongoose.model("Article", articleSchema);
exports.articleModel = model;

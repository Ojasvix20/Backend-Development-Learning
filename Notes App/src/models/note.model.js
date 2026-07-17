const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const noteModel = mongoose.model("note", noteSchema);

//noteModel is needed for efficient crud operation

module.exports = noteModel;

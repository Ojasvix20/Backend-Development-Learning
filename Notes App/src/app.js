const express = require("express");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json());

// note = {title, description}+

/*

POST /notes => Create a note
GET /notes => Get all note
DELETE /notes:id => Delete a note
PATCH /notes:id => Update a note

*/

app.post("/notes", async (req, res) => {
  const data = req.body; //{title, description}
  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).json({
    message: "Note Created!",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find(); //.find() - returns array of objects (notes) from db

  //we can also add conditions to find() like particular title
  // const notes = await noteModel.find({
  //     title:"test_title"
  // });

  //   const notes = await noteModel.findOne({
  //     title: "test_title",
  //   }); //.findOne() - returns the object (note) from db which match the conditions

  //find() => [{},{},{}] or []
  //findOne() => {} or null
  res.status(200).json({
    message: "Notes fetched successfully",
    notes: notes,
  });
});

app.delete("/notes:id", async (req, res) => {});    //resume from 2:50

module.exports = app;

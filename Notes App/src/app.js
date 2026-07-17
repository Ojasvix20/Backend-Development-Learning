//main objective of this file is to create the server
const express = require("express");
const app = express();

/* --this is our note structure: 
note={
    title:"my first note:,
    description:"this is my first note"
}
*/
const notes = []; //array of notes
//  since theres no database rn, if server restarts, the data is gone. because the array exists on ram... and every restart means new ram assigned.

app.use(express.json()); //middleware to make the body of request readable for express

// POST /notes

app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: "note created successfully",
  });
}); 

// GET /notes

app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "notes fetched successfully",
    notes: notes,
  });
});

//DELETE a note -> (delete /notes/:index)

app.delete("/notes/:index", (req, res) => {
  //over here, full colon tells that the value is dynamic

  const index = req.params.index;

  delete notes[index];

  res.status(200).json({
    message: "Note deleted successfully",
  });
});

//PATCH - update existing data on the given index

app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const description = req.body.description;

  notes[index].description = description;
  res.status(200).json({
    message: `note ${index} updated successfully`,
  });
});

module.exports = app;

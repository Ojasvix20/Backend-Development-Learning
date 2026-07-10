//main objective of this file is to create the server
const express = require("express");
const app = express();

/* --this is our note structure: 
note={
    title:"my first note:,
    description:"this is my first note"
}
*/
const notes = [];
app.use(express.json()); //middleware to make the body of request readable for express

app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message:"note created successfully"
  });
});

module.exports = app;

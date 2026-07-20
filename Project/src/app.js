const express = require("express");
const multer = require("multer");

const app = express();

app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() }); //for receiving/ reading postman form data

app.post("/create-post", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);
});

module.exports = app;


RESUME FROM 3:30
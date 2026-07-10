//Server instantiate
const express = require("express");
const app = express();    //creating server instance

//used to parse req.body in express -> post or put
// const bodyParser = require("body-parser");
// Specifically parse json data & add it to the request.body object
// app.use(bodyParser.json());

// however bodyparser is outdated - we use this instead

app.use(express.json()); //This is built into Express.

// Activate the server
app.listen(3000, () => {          //to start the server on port no. 3000
  console.log("Server started at port no. 3000");
});

// Routes
app.get("/", (request, response) => {
  response.send("hello hi howdy");
});

app.post("/api/cars", (request, response) => {
  const { name, brand } = request.body;
  console.log(name);
  console.log(brand);
  response.send("Car Submitted successfully");
});
app.get("/api/cars", (req, res) => {
  res.send("Cars API is working!");
});

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Cars")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

//Server instantiate
const express = require("express");
const app = express();

// Activate the server
app.listen(3000, () => {
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

const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://Ojasvi:***@cluster0.zdwd0lc.mongodb.net/Project1",
  );
  console.log("Connected to DB");
}

module.exports = connectDB;

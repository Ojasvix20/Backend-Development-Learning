const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://Ojasvi:RwH6Xt7nzx3zeDK1@cluster0.zdwd0lc.mongodb.net/backendDB",
    );
    console.log("DB Connected Successfully");
  } catch (err) {
    console.error("MongoDB connection failed:");
    console.error(err);
  }
}

module.exports = connectDB;

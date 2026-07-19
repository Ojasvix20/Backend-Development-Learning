const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
    );
    console.log("DB Connected Successfully");
  } catch (err) {
    console.error("MongoDB connection failed:");
    console.error(err);
  }
}

module.exports = connectDB;

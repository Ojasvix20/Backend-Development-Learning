// import the model

const ToDo = require("../models/ToDo");

//define route handler:

exports.createToDo = async (req, res) => {
  try {
    // extract title & description from request body:
    const { title, description } = req.body;

    //create a new todo object and insert in DB

    const respone = await ToDo.create({ title, description });

    // send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: " Entry Successfull!",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};

module.exports = mongoose.model("ToDo", todoSchema);

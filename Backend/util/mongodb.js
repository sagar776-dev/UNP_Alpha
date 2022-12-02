const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://unpmongo:Admin@123@cluster0.qknxsf8.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
  );

module.exports = mongoose
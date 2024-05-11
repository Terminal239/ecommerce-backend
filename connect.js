const mongoose = require("mongoose");
const MONGODB_URI = process.env.NODE_ENV === "test" ? process.env.TEST_MONGODB_URI : process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Successfully connected to the database!");
  })
  .catch((error) => {
    console.log(error);
  });

mongoose.set("strictQuery", false);
mongoose.set("bufferTimeoutMS", 30000);

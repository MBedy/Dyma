const mongoose = require("mongoose");
const constants = require("../constants");

mongoose
  .connect(constants.MONGO_DB_URI, { useNewUrlParser: true })
  .then(() => console.log("connecion db ok !"))
  .catch(console.error);

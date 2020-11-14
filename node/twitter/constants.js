require("dotenv").config();

const constants = {
  MONGO_DB_URI: process.env.MONGO_DB_URI,
};

module.exports = constants;

const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  content: {
    type: String,
    maxlength: 140,
    minlength: 1,
    required: true,
  },
});

const Tweet = mongoose.model("tweet", tweetSchema);

module.exports = Tweet;

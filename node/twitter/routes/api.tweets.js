const router = require("express").Router();
const Tweet = require("../database/models/tweet.model");

router.post("/", (req, res) => {
  const { body } = req;
  const newTweet = new Tweet(body);

  newTweet
    .save()
    .then(() => res.redirect("/"))
    .catch((err) => {
      const errors = Object.keys(err.errors).map(
        (key) => err.errors[key].message
      );
      res.status(400);
      res.render("tweets/tweet-form", { errors });
    });
});

module.exports = router;

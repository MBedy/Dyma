const router = require("express").Router();

router.get("/", (_, res) => {
  res.render("tweets/tweet-list");
});

router.get("/tweet/new", (_, res) => {
  res.render("tweets/tweet-form");
});

module.exports = router;

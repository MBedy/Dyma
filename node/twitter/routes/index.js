const router = require("express").Router();
const api = require("./api");

router.use("/api", api);

router.get("/", (_, res) => {
  res.render("tweets/tweet-list");
});

router.get("/tweet/new", (_, res) => {
  res.render("tweets/tweet-form");
});

module.exports = router;

const express = require("express");
const router = express.Router();

const post = require("../controllers/post.controller");

router.get("/all", function (req, res) {
  post.list(function (err, posts) {
    if (err) {
      res.status(404);
      res.json({
        error: "Posts not found",
      });
    } else {
      res.json(posts);
    }
  });
});

router.get("/:id", function (req, res) {
  post.get(req.params.id, function (err, post) {
    if (err) {
      res.status(404);
      res.json({
        error: "Post not found",
      });
    } else {
      res.json(post);
    }
  });
});

module.exports = router;

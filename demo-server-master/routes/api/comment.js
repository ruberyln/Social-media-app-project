const express = require("express");
const router = express.Router();

// Load Post model
const Post = require("../../models/posts");

router.post("/create", async (req, res) => {
  let body = req.body;
  let result = await Post.findOneAndUpdate(
    { _id: body.postId },
    {
      $push: {
        comments: {
          comment: body.comment,
          commentedBy: body.userId,
          at: Date.now(),
        },
      },
    },
    { new: true }
  );
  return res.status(200).json(result);
});

module.exports = router;

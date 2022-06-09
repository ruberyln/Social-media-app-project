const express = require("express");
const router = express.Router();

// Load Post model
const Post = require("../../models/posts");

router.post("/create", async (req, res) => {
  let body = req.body;

  let result = await Post.create(body);
  return res.status(200).json(result);
});



router.post("/findAll", async (req, res) => {
  let { data } = req.body;

  let result = await Post.find(data)
    .populate([
      { path: "createdBy", model: "users" },
      { path: "comments.commentedBy", model: "users" }
    ])
    .sort({ createdAt: -1 });
  return res.status(200).json(result);
});


router.post("/upVote", async (req, res) => {
  let body = req.body;
  let result = await Post.findOneAndUpdate(
    { _id: body.postId },
    {
      $addToSet: {
        likes: body.userId 
      },
      $pull:{
        disLikes:body.userId
      }
    },
    { new: true }
  );
  return res.status(200).json(result);
});

router.delete("/", async (req,res) => {
  let result = await Post.findOneAndDelete (
    {_id:req.body.postId})
    return res.status(200).json(result)
});
// {
//   userId,
//   postId
// }
router.post("/downVote", async (req, res) => {
  let body = req.body;
  let result = await Post.findOneAndUpdate(
    { _id: body.postId },
    {
      $addToSet: {
        disLikes: body.userId
      },
      $pull:{
        likes:body.userId
      }
    },
    { new: true }
  );
  return res.status(200).json(result);
});
module.exports = router;


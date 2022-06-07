const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    images: [String],

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    likes: [String],
    disLikes: [String],
    comments: [
      {
        commentedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
        },
        comment: {
          type: String,
        },
        at: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
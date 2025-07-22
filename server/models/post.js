const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  category: String,
  content: String,
  image: String,
  user: {
    type: String,
    default: "Admin",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

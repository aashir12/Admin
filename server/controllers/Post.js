
const Post = require("../models/post");

 const getPost = async function (req, res, next) {
  const posts = await Post.find();
  res.send(posts);
};

const createPost = async function (req, res, next) {
  const { title, content, category } = req.body;

  Post.create({
    title: title,
    category: category,
    content: content,
  });

  res.send("success");
};

module.exports={createPost,getPost}
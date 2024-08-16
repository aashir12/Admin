var express = require('express');
var router = express.Router();
const Post = require("../models/post");
const {createPost,getPost} =require('../controllers/Post')


router.get('/posts',getPost);
router.post("/posts", createPost);


module.exports = router;

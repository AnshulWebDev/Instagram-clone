const express = require("express");

//adding post controller
const { addComment } = require("../controllers/addComment");
const { createPost } = require("../controllers/createPost");
const { deleteComment } = require("../controllers/deleteComment");
const { deletePost } = require("../controllers/deletePost");
const { getPostOfFollowing } = require("../controllers/getPostofFollowing");
const { likeAndUnlikePosts } = require("../controllers/likeAndUnlikePost");
const { updateCaption } = require("../controllers/updateCaption");

//add Middleware
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);
router
  .route("/post/:id")
  .get(isAuthenticated, likeAndUnlikePosts)
  .put(isAuthenticated, updateCaption)
  .delete(isAuthenticated, deletePost);

router.route("/posts").get(isAuthenticated, getPostOfFollowing);

router
  .route("/post/comment/:id")
  .put(isAuthenticated, addComment)
  .delete(isAuthenticated, deleteComment);

module.exports = router;

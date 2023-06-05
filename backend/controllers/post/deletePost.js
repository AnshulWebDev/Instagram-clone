const Post = require("../models/Post");
const User = require("../models/User");

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      res.status(404).json({
        success: false,
        message: "post not found",
      });
    }

    if (post.owner.toString() !== req.user._id.toString()) {
      res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    await post.deleteOne();

    const user = await User.findById(req.user._id);

    const index = user.posts.indexOf(req.params.id);

    user.posts.splice(index, 1);
    await user.save();

    res.status(200).json({
      success: true,
      message: "post deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
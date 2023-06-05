const Post = require("../models/Post");

exports.likeAndUnlikePosts = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "post not found",
      });
    }

    if (post.likes.includes(req.user._id)) {
      const index = post.likes.indexOf(req.user._id);

      post.likes.splice(index, 1);

      await post.save();

      return res.status(200).json({
        success: true,
        message: "post unliked",
      });
    } else {
      post.likes.push(req.user._id);
      await post.save();

      return res.status(200).json({
        success: true,
        message: "post Liked",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

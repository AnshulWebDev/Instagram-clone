const Post = require("../models/Post");

exports.deleteComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "post not found",
      });
    };

    //checking if owner wants to delete
    if (post.owner.toString() === req.user._id.toString()) {

      if(req.body.commentId==undefined){
        return res.status(400).json({
          success: false,
        message: "commentId is required"
        });
      }

      post.comments.forEach((item, index) => {
        if (item._id.toString() === req.body.commentId.toString()) {
          post.comments.splice(index,1)
        }
      });

      await post.save();

      return res.status(200).json({
        success: true,
      message: "comment deleted"
      });

    } else {
      post.comments.forEach((item, index) => {
        if (item.user.toString() === req.user._id.toString()) {
          post.comments.splice(index,1)
        }
      });
      await post.save();

      return res.status(200).json({
        success: true,
      message: "comment deleted"
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
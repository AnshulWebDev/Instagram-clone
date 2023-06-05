const User = require("../models/User");
const Post = require("../models/Post");

exports.deleteMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const posts = user.posts;
    const followers = user.followers;
    const following = user.following;

    await user.deleteOne();

    //logout user after deleting profile
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    //delete all posts of the user
    for (let i = 0; i < posts.length; i++) {
      const post = await Post.findById(posts[i]);
      await post.deleteOne();
    }

    //removing user from followers following
    for (let i = 0; i < followers.length; i++) {
      const follower = await User.findById(followers[i]);

      const index = follower.following.indexOf(user._id);
      follower.following.splice(index, 1);
      await follower.save();
    }

    //removing user from  following followers
    for (let i = 0; i < following.length; i++) {
      const follows = await User.findById(following[i]);

      const index = follows.followers.indexOf(user._id);
      follows.followers.splice(index, 1);
      await follows.save();
    }

    res.status(200).json({
      success: true,
      message: "Profile deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

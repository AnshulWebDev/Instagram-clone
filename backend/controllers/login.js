const User = require("../models/User");
const crypto = require("crypto");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        status: false,
        message: "user does not exist",
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(400).json({
        status: false,
        message: "incorrect password",
      });
    }

    const token = await user.generateToken();

    const options = {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(200).cookie("token", token, options).json({
      status: true,
      user,
      token,
    });
  } catch (error) {
    // console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
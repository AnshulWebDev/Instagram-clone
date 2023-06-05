const User = require("../models/User");
const crypto = require("crypto");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    user = await User.create({ name: name, email: email, password: password });

    const token = await user.generateToken();

    const options = {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(201).cookie("token", token, options).json({
      status: true,
      user,
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      success: false,
      message: "User Cannot Be Registered please try again later",
    });
  }
};
const express = require("express");
const router = express.Router();

const { deleteMyProfile } = require("../controllers/deleteMyProfile");
const { followUser } = require("../controllers/followUser");
const { forgotPassword } = require("../controllers/forgotPassword");
const { getAllUsers } = require("../controllers/getAllUsers");
const { getUserProfile } = require("../controllers/getUserProfile");
const { login } = require("../controllers/login");
const { logout } = require("../controllers/logout");
const { myProfile } = require("../controllers/myProfile");
const { registerUser } = require("../controllers/registerUser");
const { resetPassword } = require("../controllers/resetPassword");
const { updatePassword } = require("../controllers/updatePassword");
const { updateProfile } = require("../controllers/updateProfile");

//add Middleware
const { isAuthenticated } = require("../middlewares/auth");

router.post("/register", registerUser);
router.post("/login", login);
router.get("/logout", logout);
router.route("/follow/:id").get(isAuthenticated, followUser);
router.route("/update/password").put(isAuthenticated, updatePassword);
router.route("/update/profile").put(isAuthenticated, updateProfile);
router.route("/delete/me").delete(isAuthenticated, deleteMyProfile);
router.route("/me").delete(isAuthenticated, myProfile);
router.route("/user/:id").get(isAuthenticated, getUserProfile);
router.route("/users").get(isAuthenticated, getAllUsers);
router.post("/forgot/password", forgotPassword);
router.put("/password/reset/:token", resetPassword);

module.exports = router;

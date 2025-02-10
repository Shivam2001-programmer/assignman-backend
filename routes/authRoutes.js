const express = require("express");
const { signup, login, logout } = require("../controllers/authController");
const upload = require("../middleware/upload");

const router = express.Router();

router.post("/signup", upload.single("profile"), signup);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;

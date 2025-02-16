const express = require('express');
const { signUp, signIn } = require('../controllers/authController');
const router = express.Router();
const { refreshToken } = require("../controllers/authController");
router.post('/signUp', signUp);
router.post('/signIn', signIn);
router.post("/refresh-token", refreshToken);

module.exports = router;

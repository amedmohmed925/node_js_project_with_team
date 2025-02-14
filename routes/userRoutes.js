const express = require('express');
const { getUsers, getFavList, updateFavList, getWatchLater, updateWatchLater } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getUsers);
router.get('/favList', authMiddleware, getFavList);
router.put('/favList/:id', authMiddleware, updateFavList);
router.get('/watchLater', authMiddleware, getWatchLater);
router.put('/watchLater/:id', authMiddleware, updateWatchLater);

module.exports = router;

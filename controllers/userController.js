const User = require('../models/User');
const Movie = require('../models/Movie');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFavList = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('favList');
    res.json(user.favList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateFavList = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const movieId = req.params.id;
    if (user.favList.includes(movieId)) {
      user.favList = user.favList.filter(id => id.toString() !== movieId);
    } else {
      user.favList.push(movieId);
    }
    await user.save();
    res.json(user.favList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getWatchLater = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('watchLater');
    res.json(user.watchLater);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateWatchLater = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const movieId = req.params.id;
    if (user.watchLater.includes(movieId)) {
      user.watchLater = user.watchLater.filter(id => id.toString() !== movieId);
    } else {
      user.watchLater.push(movieId);
    }
    await user.save();
    res.json(user.watchLater);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

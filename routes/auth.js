// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../modules/User'); // Ensure this path is correct
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Register route
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    user = new User({ firstName, lastName, email, password });
    await user.save();

    const payload = { user: { id: user.id } };
    jwt.sign(payload, 'randomString', { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.status(200).json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const payload = { user: { id: user.id } };
    jwt.sign(payload, 'randomString', { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.status(200).json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

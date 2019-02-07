const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const User = require('../models/User')

router.get('/home', isLoggedIn, (req, res, next) => {
  // console.log(req.user)
  User.findById(req.user._id)
  .then(user => {
    res.json(user)
  })
});

module.exports = router;

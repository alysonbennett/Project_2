const express = require('express');
const router = express.Router();

// Welcome Page
router.get('/', (req, res) => res.render('login'));

// Dashboard
router.get('/dashboard', (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

router.get('/login', (req, res) =>
  res.render('login', {
    user: req.user
  })
);

router.get('/reservation', (req, res) =>
  res.render('reservation', {
    user: req.user
  })
);

router.get('/register', (req, res) =>
  res.render('register', {
    user: req.user
  })
);

module.exports = router;
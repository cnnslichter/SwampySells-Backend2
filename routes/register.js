const express = require('express');
const { registerUser, getRegisteredUser } = require('../services/register');

let router = express.Router();
router.post('/register', registerUser);
router.get('/register', getRegisteredUser);

module.exports = router;

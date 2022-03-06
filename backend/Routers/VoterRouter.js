const express = require('express');
const router = express.Router();
const checkVoterRegistration = require('../Models/VoterModel')
const jwt = require('jsonwebtoken');

router.post('/users', checkVoterRegistration, async (req, res) => {
  res.cookie("auth", await jwt.sign(req.voter, process.env.TOKEN_SECRET, {expiresIn: 1800})).status(200).send();
})

module.exports=router;
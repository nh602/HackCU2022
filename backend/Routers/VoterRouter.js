const express = require('express');
const router = express.Router();
const checkVoterRegistration = require('../Models/VoterModel')

router.post('/users', checkVoterRegistration, async (req, res) => {
  return res.status(200).json()
})

module.exports=router;
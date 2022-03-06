const express = require('express');
const router = express.Router();

const {checkCookie, processVote, searchForBallot} = require('../Controllers/VoteController');

router.post('/', checkCookie, processVote);
router.post('/verify', checkCookie, searchForBallot);

module.exports = router;
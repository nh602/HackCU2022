const express = require('express');
const router = express.Router();

const voterRouter = require('./VoterRouter');
const voteRouter = require('./VoteRouter');

router.use('/', voterRouter);
router.use('/votes', voteRouter);

module.exports = router;
const express = require('express');
const router = express.Router();

const voterRouter = require('./VoterRouter');
const voteRouter = require('./VoteRouter');

const votecont = require('../Controllers/VoteController');
const votemod = require('../Models/VoterModel')

router.use('/', voterRouter);
router.use('/votes', voteRouter);

router.get('/ballots', votemod.getBallotMeasures, votecont.getBallotIssues);

module.exports = router;
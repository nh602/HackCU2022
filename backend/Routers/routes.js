const express = require('express');
const router = express.Router();

const voterRouter = require('./VoterRouter');

router.use('/', voterRouter);

module.exports = router;
const jwt = require('jsonwebtoken');
const { Block } = require('../blockchain');
const {chain} = require('../blockchain');
const {createHash} = require('crypto');

function checkCookie(req, res, next){
  try{
    const authCookie = req.cookies['auth'];
    const decodedCookie = jwt.verify(authCookie, process.env.TOKEN_SECRET);
  
    req.ssn = decodedCookie.ssn;

    next();
  }catch (e){
    console.log("Failed checking cookie");
    console.log(e);
    return res.status(500).send("Failed checking cookie");
  }
  
}

function processVote(req, res){
  const blockData = {
    ssnHash: req.ssn,
    ballot: req.body.ballotMeasures
  };

  let block = new Block();
  block.data = blockData;

  chain.addBlock(block);

  return res.status(200).send(chain);
}

function searchForBallot(req, res){
  //const hash = createHash('sha256').update(req.ssn).digest('hex');
  for(block of chain.chain){
    if(block.data.ssnHash == req.ssn){
      return res.status(200).json(block);
    }
  }
  return res.status(404).send("Failed to find vote.");
}

function tallyVotes(req, res){
  
}

function getBallotIssues(req, res){
  return res.status(200).json({measures: req.measures})
}

module.exports = {checkCookie, processVote, searchForBallot, getBallotIssues}
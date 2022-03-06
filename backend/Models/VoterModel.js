const {query} = require("../db");
const {compare} = require("bcrypt");
const {createHash} = require("crypto");

/*
Check for voter registration
*/
async function checkVoterRegistration(req, res, next){
  const {
    firstName,
    lastName,
    ssn,
    dob
  } = req.body;
  
  if(!firstName || !lastName || !ssn || !dob){
    res.status(400).json({code: 400, error: "Missing required field."});
  } else{
    try{
      const queryResult = await query('SELECT * FROM voterRegistration WHERE firstName=$1 AND lastName=$2 AND dob=$3', [firstName, lastName, dob]);

      let found = false;
      
      for(voter of queryResult.rows){
        const comp = await compare(ssn, voter.ssn)
        if(comp) {
          found = true;
          req.voter = voter;
          req.voter.ssn = createHash('sha256').update(ssn).digest('hex');
          return next();
        }
      }

      return res.status(404).json({code: 404, error: "Voter not registered."});
    }catch (e){
      console.log("Failed to log in");
      console.log(e);
    }
  }
}

module.exports = checkVoterRegistration;